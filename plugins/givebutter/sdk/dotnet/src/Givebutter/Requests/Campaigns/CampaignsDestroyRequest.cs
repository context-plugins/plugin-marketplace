namespace Givebutter.Requests.Campaigns;

/// <summary>
/// The inputs of the CampaignsDestroy operation.
/// </summary>
public sealed record CampaignsDestroyRequest
{
    /// <summary>
    /// The campaign ID
    /// </summary>
    public required int Campaign { get; init; }
}
