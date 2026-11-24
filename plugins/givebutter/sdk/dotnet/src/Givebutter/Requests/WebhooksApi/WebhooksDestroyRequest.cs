namespace Givebutter.Requests.WebhooksApi;

/// <summary>
/// The inputs of the WebhooksDestroy operation.
/// </summary>
public sealed record WebhooksDestroyRequest
{
    /// <summary>
    /// The webhook ID
    /// </summary>
    public required string Webhook { get; init; }
}
