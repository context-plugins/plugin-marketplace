namespace Givebutter.Requests.CampaignMembers;

/// <summary>
/// The inputs of the CampaignsMembersIndex operation.
/// </summary>
public sealed record CampaignsMembersIndexRequest
{
    /// <summary>
    /// The campaign ID
    /// </summary>
    public required int Campaign { get; init; }
}
