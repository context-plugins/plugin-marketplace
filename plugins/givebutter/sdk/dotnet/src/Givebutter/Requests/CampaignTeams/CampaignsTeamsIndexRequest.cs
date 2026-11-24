namespace Givebutter.Requests.CampaignTeams;

/// <summary>
/// The inputs of the CampaignsTeamsIndex operation.
/// </summary>
public sealed record CampaignsTeamsIndexRequest
{
    /// <summary>
    /// The campaign ID
    /// </summary>
    public required int Campaign { get; init; }
}
