using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Requests.Channels;

/// <summary>
/// The inputs of the AddNotificationChannel operation.
/// </summary>
public sealed record AddNotificationChannelRequest
{
    public ChannelsRequest? Body { get; init; }
}
