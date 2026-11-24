using Asana.Models;

namespace Asana.Requests.Projects;

/// <summary>
/// The inputs of the AddCustomFieldSettingForProject operation.
/// </summary>
public sealed record AddCustomFieldSettingForProjectRequest
{
    /// <summary>
    /// Globally unique identifier for the project.
    /// </summary>
    public required string ProjectGid { get; init; }

    /// <summary>
    /// Provides “pretty” output.
    /// Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
    /// </summary>
    public bool? OptPretty { get; init; }

    /// <summary>
    /// Information about the custom field setting.
    /// </summary>
    public required ProjectsAddCustomFieldSettingRequest Body { get; init; }
}
