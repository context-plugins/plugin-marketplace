namespace Fillo.Requests.Responses;

/// <summary>
/// The inputs of the ListFormDrafts operation.
/// </summary>
public sealed record ListFormDraftsRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }
}
