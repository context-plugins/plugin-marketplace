namespace MailerLite.Requests;

/// <summary>
/// The inputs of the CreateWebhook operation.
/// </summary>
public sealed record CreateWebhookRequest
{
    /// <summary>
    /// max records to return
    /// </summary>
    public int Limit { get; init; } = 100;

    /// <summary>
    /// number of items to skip
    /// </summary>
    public int Offset { get; init; } = 0;
}
