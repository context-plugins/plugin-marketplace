using System.ComponentModel.DataAnnotations;

namespace Airtable.Requests.WebhooksApi;

/// <summary>
/// The inputs of the ListWebhookPayloads operation.
/// </summary>
public sealed record ListWebhookPayloadsRequest
{
    /// <summary>
    /// The unique identifier of the base (starts with 'app').
    /// </summary>
    [RegularExpression("^app[a-zA-Z0-9]+$")]
    public required string BaseId { get; init; }

    /// <summary>
    /// The unique identifier of the webhook.
    /// </summary>
    public required string WebhookId { get; init; }

    /// <summary>
    /// A cursor for pagination. Pass the cursor from the previous response to get the next page.
    /// </summary>
    public string? Cursor { get; init; }
}
