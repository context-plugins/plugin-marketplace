using System.Collections.Generic;
using Asana.Models.Enums;

namespace Asana.Requests.Typeahead;

/// <summary>
/// The inputs of the TypeaheadForWorkspace operation.
/// </summary>
public sealed record TypeaheadForWorkspaceRequest
{
    /// <summary>
    /// Globally unique identifier for the workspace or organization.
    /// </summary>
    public required string WorkspaceGid { get; init; }

    /// <summary>
    /// The type of values the typeahead should return. You can choose from one of the following: <c>custom_field</c>, <c>project</c>, <c>project_template</c>, <c>portfolio</c>, <c>tag</c>, <c>task</c>, and <c>user</c>. Note that unlike in the names of endpoints, the types listed here are in singular form (e.g. <c>task</c>). Using multiple types is not yet supported.
    /// </summary>
    public ResourceType ResourceType { get; init; } = ResourceType.User;

    /// <summary>
    /// *Deprecated: new integrations should prefer the resource_type field.*
    /// </summary>
    public TypeAsanaTypeaheadApi Type { get; init; } = TypeAsanaTypeaheadApi.User;

    /// <summary>
    /// The string that will be used to search for relevant objects. If an empty string is passed in, the API will return results.
    /// </summary>
    public string? Query { get; init; }

    /// <summary>
    /// The number of results to return. The default is 20 if this parameter is omitted, with a minimum of 1 and a maximum of 100. If there are fewer results found than requested, all will be returned.
    /// </summary>
    public int? Count { get; init; }

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
}
