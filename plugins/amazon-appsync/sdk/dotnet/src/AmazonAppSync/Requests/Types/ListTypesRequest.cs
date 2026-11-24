using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Requests.Types;

/// <summary>
/// The inputs of the ListTypes operation.
/// </summary>
public sealed record ListTypesRequest
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }

    /// <summary>
    /// The type format: SDL or JSON.
    /// </summary>
    public required Format Format { get; init; }

    /// <summary>
    /// An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
    /// </summary>
    public string? NextToken { get; init; }

    /// <summary>
    /// The maximum number of results that you want the request to return.
    /// </summary>
    public int? MaxResults { get; init; }
}
