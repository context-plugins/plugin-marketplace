using Bitly.Models;

namespace Bitly.Requests.CampaignsApi;

/// <summary>
/// The inputs of the CreateChannel operation.
/// </summary>
public sealed record CreateChannelRequest
{
    public required ChannelModify Body { get; init; }
}
