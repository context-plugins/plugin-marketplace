namespace Fellow.Requests.WebhooksApi;

/// <summary>
/// The inputs of the AppsDeveloperApiApiDeleteWebhook operation.
/// </summary>
public sealed record AppsDeveloperApiApiDeleteWebhookRequest
{
    public required string WebhookId { get; init; }
}
