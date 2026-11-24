namespace MailerLite.Requests;

/// <summary>
/// The inputs of the UpdateWebhook operation.
/// </summary>
public sealed record UpdateWebhookRequest
{
    /// <summary>
    /// The id of the webhook to update
    /// </summary>
    public required int WebhookId { get; init; }
}
