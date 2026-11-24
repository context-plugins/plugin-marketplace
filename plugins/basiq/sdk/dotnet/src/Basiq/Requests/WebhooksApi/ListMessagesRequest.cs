namespace Basiq.Requests.WebhooksApi;

/// <summary>
/// The inputs of the ListMessages operation.
/// </summary>
public sealed record ListMessagesRequest
{
    /// <summary>
    /// webhook Id
    /// </summary>
    public required string WebhookId { get; init; }

    /// <summary>
    /// Maximum number of items included in the response. Max value = 500 and is the default value if this field is not provided
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Filter field that allows filtering by date, status, eventTypeId, webhookId, eventId
    /// </summary>
    public string? Filter { get; init; }
}
