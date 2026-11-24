using Paid.Models.Enums;

namespace Paid.Requests.WebhooksApi;

/// <summary>
/// The inputs of the TestWebhook operation.
/// </summary>
public sealed record TestWebhookRequest
{
    public required WebhooksWebhookNameTestPostParametersWebhookName WebhookName { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public object? Body { get; init; }
}
