using Client.Models;

namespace Client.Components.Pages;

public partial class Home
{
    private List<Project> GeesProjects = new List<Project>
    {
        new Project
        {
            Title = "Project 1",
            Description = "This is a description for project 1",
            ImageUrl = "https://via.placeholder.com/150",
            ProjectUrl = "https://www.google.com"
        },
        new Project
        {
            Title = "Project 2",
            Description = "This is a description for project 2",
            ImageUrl = "https://via.placeholder.com/150",
            ProjectUrl = "https://www.google.com"
        },
        new Project
        {
            Title = "Project 3",
            Description = "This is a description for project 3",
            ImageUrl = "https://via.placeholder.com/150",
            ProjectUrl = "https://www.google.com"
        }
    };
}
