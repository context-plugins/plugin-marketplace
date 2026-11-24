namespace Fellow.Requests.WebhooksApi;

/// <summary>
/// The inputs of the AppsDeveloperApiApiGetWebhookById operation.
/// </summary>
public sealed record AppsDeveloperApiApiGetWebhookByIdRequest
{
    public required string WebhookId { get; init; }
}
