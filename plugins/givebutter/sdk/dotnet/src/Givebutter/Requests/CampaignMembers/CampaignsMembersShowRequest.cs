namespace Givebutter.Requests.CampaignMembers;

/// <summary>
/// The inputs of the CampaignsMembersShow operation.
/// </summary>
public sealed record CampaignsMembersShowRequest
{
    /// <summary>
    /// The campaign ID
    /// </summary>
    public required int Campaign { get; init; }

    /// <summary>
    /// The member ID
    /// </summary>
    public required int Member { get; init; }
}
