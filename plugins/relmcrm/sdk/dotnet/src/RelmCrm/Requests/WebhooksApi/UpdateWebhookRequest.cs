using RelmCrm.Models;

namespace RelmCrm.Requests.WebhooksApi;

/// <summary>
/// The inputs of the UpdateWebhook operation.
/// </summary>
public sealed record UpdateWebhookRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
    /// </summary>
    public string? IfMatch { get; init; }

    public required WebhookInput Body { get; init; }
}
