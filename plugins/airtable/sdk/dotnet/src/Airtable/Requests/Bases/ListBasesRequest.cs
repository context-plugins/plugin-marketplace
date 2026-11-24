namespace Airtable.Requests.Bases;

/// <summary>
/// The inputs of the ListBases operation.
/// </summary>
public sealed record ListBasesRequest
{
    /// <summary>
    /// Pagination cursor from a previous response to fetch the next page.
    /// </summary>
    public string? Offset { get; init; }
}
