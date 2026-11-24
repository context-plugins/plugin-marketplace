using Basiq.Models;

namespace Basiq.Requests.WebhooksApi;

/// <summary>
/// The inputs of the TestMessage operation.
/// </summary>
public sealed record TestMessageRequest
{
    public NotificationsMessagesTestRequest? Body { get; init; }
}
