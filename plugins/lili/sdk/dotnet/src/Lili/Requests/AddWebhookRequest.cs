using Lili.Models;

namespace Lili.Requests;

/// <summary>
/// The inputs of the AddWebhook operation.
/// </summary>
public sealed record AddWebhookRequest
{
    public required WebhookRequestModel Body { get; init; }
}
