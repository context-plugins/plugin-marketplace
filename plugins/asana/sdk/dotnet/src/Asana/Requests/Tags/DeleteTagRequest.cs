using System.Collections.Generic;

namespace Asana.Requests.Tags;

/// <summary>
/// The inputs of the DeleteTag operation.
/// </summary>
public sealed record DeleteTagRequest
{
    /// <summary>
    /// Globally unique identifier for the tag.
    /// </summary>
    public required string TagGid { get; init; }

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
    /// Results per page.
    /// The number of objects to return per page. The value must be between 1 and 100.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Offset token.
    /// An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.
    /// 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
    /// </summary>
    public string? Offset { get; init; }
}
