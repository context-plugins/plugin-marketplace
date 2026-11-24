namespace Bitly.Requests.CampaignsApi;

/// <summary>
/// The inputs of the GetChannel operation.
/// </summary>
public sealed record GetChannelRequest
{
    /// <summary>
    /// A GUID for a Bitly Channel
    /// </summary>
    public required string ChannelGuid { get; init; }
}
