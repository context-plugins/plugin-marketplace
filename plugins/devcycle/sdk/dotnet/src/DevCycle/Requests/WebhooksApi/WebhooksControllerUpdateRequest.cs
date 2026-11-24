using DevCycle.Models;

namespace DevCycle.Requests.WebhooksApi;

/// <summary>
/// The inputs of the WebhooksControllerUpdate operation.
/// </summary>
public sealed record WebhooksControllerUpdateRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required UpdateWebhookDto Body { get; init; }
}
