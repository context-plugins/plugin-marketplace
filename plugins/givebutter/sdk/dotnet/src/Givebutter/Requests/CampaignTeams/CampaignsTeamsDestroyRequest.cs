namespace Givebutter.Requests.CampaignTeams;

/// <summary>
/// The inputs of the CampaignsTeamsDestroy operation.
/// </summary>
public sealed record CampaignsTeamsDestroyRequest
{
    /// <summary>
    /// The campaign ID
    /// </summary>
    public required int Campaign { get; init; }

    /// <summary>
    /// The team ID
    /// </summary>
    public required int Team { get; init; }
}
