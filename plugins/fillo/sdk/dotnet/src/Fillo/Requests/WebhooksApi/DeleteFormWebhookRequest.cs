namespace Fillo.Requests.WebhooksApi;

/// <summary>
/// The inputs of the DeleteFormWebhook operation.
/// </summary>
public sealed record DeleteFormWebhookRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }

    /// <summary>
    /// A webhook id.
    /// </summary>
    public required string Id { get; init; }
}
