using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Requests.Channels;

/// <summary>
/// The inputs of the ListNotificationChannels operation.
/// </summary>
public sealed record ListNotificationChannelsRequest
{
    public ChannelsRequest1? Body { get; init; }
}
