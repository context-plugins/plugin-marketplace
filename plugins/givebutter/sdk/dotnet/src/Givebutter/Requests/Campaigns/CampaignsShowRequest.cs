namespace Givebutter.Requests.Campaigns;

/// <summary>
/// The inputs of the CampaignsShow operation.
/// </summary>
public sealed record CampaignsShowRequest
{
    /// <summary>
    /// The campaign ID
    /// </summary>
    public required int Campaign { get; init; }
}
