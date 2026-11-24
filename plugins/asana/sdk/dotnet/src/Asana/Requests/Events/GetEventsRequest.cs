using System.Collections.Generic;

namespace Asana.Requests.Events;

/// <summary>
/// The inputs of the GetEvents operation.
/// </summary>
public sealed record GetEventsRequest
{
    /// <summary>
    /// A resource ID to subscribe to. The resource can be a task or project.
    /// </summary>
    public required string Resource { get; init; }

    /// <summary>
    /// A sync token received from the last request, or none on first sync. Events will be returned from the point in time that the sync token was generated.
    /// *Note: On your first request, omit the sync token. The response will be the same as for an expired sync token, and will include a new valid sync token.If the sync token is too old (which may happen from time to time) the API will return a <c>412 Precondition Failed</c> error, and include a fresh sync token in the response.*
    /// </summary>
    public string? Sync { get; init; }

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
