namespace Givebutter.Requests.WebhooksApi;

/// <summary>
/// The inputs of the WebhooksShow operation.
/// </summary>
public sealed record WebhooksShowRequest
{
    /// <summary>
    /// The webhook ID
    /// </summary>
    public required string Webhook { get; init; }
}
