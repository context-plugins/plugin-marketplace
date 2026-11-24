namespace Givebutter.Requests.CampaignTeams;

/// <summary>
/// The inputs of the CampaignsTeamsShow operation.
/// </summary>
public sealed record CampaignsTeamsShowRequest
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
