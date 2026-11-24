namespace MailerLite.Requests;

/// <summary>
/// The inputs of the DeleteWebhook operation.
/// </summary>
public sealed record DeleteWebhookRequest
{
    /// <summary>
    /// The id of the webhook to delete
    /// </summary>
    public required int WebhookId { get; init; }
}
