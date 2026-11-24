using Givebutter.Models;

namespace Givebutter.Requests.WebhooksApi;

/// <summary>
/// The inputs of the WebhooksUpdate operation.
/// </summary>
public sealed record WebhooksUpdateRequest
{
    /// <summary>
    /// The webhook ID
    /// </summary>
    public required string Webhook { get; init; }

    public required V1WebhooksRequest1 Body { get; init; }
}
