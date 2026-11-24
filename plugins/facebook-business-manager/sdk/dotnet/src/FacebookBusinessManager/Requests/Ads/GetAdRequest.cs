namespace FacebookBusinessManager.Requests.Ads;

/// <summary>
/// The inputs of the GetAd operation.
/// </summary>
public sealed record GetAdRequest
{
    /// <summary>
    /// The ID of the ad
    /// </summary>
    public required string AdId { get; init; }

    /// <summary>
    /// Comma-separated list of fields to include in the response. If omitted, default fields are returned.
    /// </summary>
    public string? Fields { get; init; }
}
