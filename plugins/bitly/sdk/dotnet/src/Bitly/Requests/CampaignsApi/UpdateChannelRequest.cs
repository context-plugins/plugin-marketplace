using Bitly.Models;

namespace Bitly.Requests.CampaignsApi;

/// <summary>
/// The inputs of the UpdateChannel operation.
/// </summary>
public sealed record UpdateChannelRequest
{
    /// <summary>
    /// A GUID for a Bitly Channel
    /// </summary>
    public required string ChannelGuid { get; init; }

    public required ChannelModify Body { get; init; }
}
