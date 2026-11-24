using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Requests.GrantsApi;

/// <summary>
/// The inputs of the ListGrants operation.
/// </summary>
public sealed record ListGrantsRequest
{
    public FunderId? FunderId { get; init; }

    public RecipId? RecipId { get; init; }

    public YearPlinthUsDataGrantsApi? Year { get; init; }

    public Subject? Subject { get; init; }

    public Location1? Location { get; init; }

    public MinAmt? MinAmt { get; init; }

    public MaxAmt? MaxAmt { get; init; }

    public Page? Page { get; init; }

    public Limit? Limit { get; init; }

    public SortBy? SortBy { get; init; }

    public SortOrder1? SortOrder { get; init; }
}
