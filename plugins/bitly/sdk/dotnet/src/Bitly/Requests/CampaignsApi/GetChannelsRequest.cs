namespace Bitly.Requests.CampaignsApi;

/// <summary>
/// The inputs of the GetChannels operation.
/// </summary>
public sealed record GetChannelsRequest
{
    /// <summary>
    /// A GUID for a Bitly group
    /// </summary>
    public string? GroupGuid { get; init; }

    /// <summary>
    /// A GUID for a Bitly campaign
    /// </summary>
    public string? CampaignGuid { get; init; }
}
