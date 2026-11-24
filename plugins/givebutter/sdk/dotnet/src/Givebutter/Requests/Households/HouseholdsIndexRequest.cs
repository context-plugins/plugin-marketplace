namespace Givebutter.Requests.Households;

/// <summary>
/// The inputs of the HouseholdsIndex operation.
/// </summary>
public sealed record HouseholdsIndexRequest
{
    public string? HeadContactId { get; init; }

    public string? Contacts { get; init; }

    public string? Query { get; init; }

    public string? SortBy { get; init; }

    public string? SortByDesc { get; init; }

    public string Page { get; init; } = "1";
}
