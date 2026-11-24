namespace Deliverd.Requests.Reports;

/// <summary>
/// The inputs of the GetApiV1ReportsByIdOrSlugAnalytics operation.
/// </summary>
public sealed record GetApiV1ReportsByIdOrSlugAnalyticsRequest
{
    public required string IdOrSlug { get; init; }
}
