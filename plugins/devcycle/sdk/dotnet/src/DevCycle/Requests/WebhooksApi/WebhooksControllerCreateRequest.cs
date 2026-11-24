using DevCycle.Models;

namespace DevCycle.Requests.WebhooksApi;

/// <summary>
/// The inputs of the WebhooksControllerCreate operation.
/// </summary>
public sealed record WebhooksControllerCreateRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required CreateWebhookDto Body { get; init; }
}
