namespace FacebookBusinessManager.Requests.Insights;

/// <summary>
/// The inputs of the GetCampaignInsights operation.
/// </summary>
public sealed record GetCampaignInsightsRequest
{
    /// <summary>
    /// The ID of the campaign
    /// </summary>
    public required string CampaignId { get; init; }

    /// <summary>
    /// Comma-separated list of fields to include in the response. If omitted, default fields are returned.
    /// </summary>
    public string? Fields { get; init; }

    /// <summary>
    /// JSON object specifying the date range with since and until fields in YYYY-MM-DD format.
    /// </summary>
    public string? TimeRange { get; init; }
}
