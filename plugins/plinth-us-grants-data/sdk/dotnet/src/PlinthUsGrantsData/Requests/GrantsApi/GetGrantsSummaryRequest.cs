using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Requests.GrantsApi;

/// <summary>
/// The inputs of the GetGrantsSummary operation.
/// </summary>
public sealed record GetGrantsSummaryRequest
{
    public FunderId? FunderId { get; init; }

    public RecipId? RecipId { get; init; }

    public YearPlinthUsDataGrantsApi? Year { get; init; }

    public Subject? Subject { get; init; }

    public Location1? Location { get; init; }

    public MinAmt? MinAmt { get; init; }

    public MaxAmt? MaxAmt { get; init; }
}
