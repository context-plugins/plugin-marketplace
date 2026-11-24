namespace JuriSign.Requests.WebhooksApi;

/// <summary>
/// The inputs of the RegenerateWebhookSecret operation.
/// </summary>
public sealed record RegenerateWebhookSecretRequest
{
    public required int Id { get; init; }
}
