namespace Paid.Requests.WebhooksApi;

/// <summary>
/// The inputs of the RotateWebhookSecret operation.
/// </summary>
public sealed record RotateWebhookSecretRequest
{
    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public object? Body { get; init; }
}
