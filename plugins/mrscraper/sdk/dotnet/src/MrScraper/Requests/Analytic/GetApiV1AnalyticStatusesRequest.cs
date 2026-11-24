namespace MrScraper.Requests.Analytic;

/// <summary>
/// The inputs of the GetApiV1AnalyticStatuses operation.
/// </summary>
public sealed record GetApiV1AnalyticStatusesRequest
{
    public string? ApiTokenName { get; init; }

    public string? Domain { get; init; }

    public string? EndDate { get; init; }

    public string? StartDate { get; init; }
}
