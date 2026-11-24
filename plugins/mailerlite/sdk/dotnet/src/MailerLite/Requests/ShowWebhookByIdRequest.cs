namespace MailerLite.Requests;

/// <summary>
/// The inputs of the ShowWebhookById operation.
/// </summary>
public sealed record ShowWebhookByIdRequest
{
    /// <summary>
    /// The id of the webhook to retrieve
    /// </summary>
    public required int WebhookId { get; init; }
}
