using System.Collections.Generic;
using Asana.Models;

namespace Asana.Requests.Projects;

/// <summary>
/// The inputs of the AddMembersForProject operation.
/// </summary>
public sealed record AddMembersForProjectRequest
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
    /// Defines fields to return.
    /// Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
    /// The id of included objects will always be returned, regardless of the field options.
    /// </summary>
    public IReadOnlyList<string>? OptFields { get; init; }

    /// <summary>
    /// Information about the members being added.
    /// </summary>
    public required ProjectsAddMembersRequest Body { get; init; }
}
