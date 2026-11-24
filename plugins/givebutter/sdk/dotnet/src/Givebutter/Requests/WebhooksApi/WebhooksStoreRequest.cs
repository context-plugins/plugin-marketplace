using Givebutter.Models;

namespace Givebutter.Requests.WebhooksApi;

/// <summary>
/// The inputs of the WebhooksStore operation.
/// </summary>
public sealed record WebhooksStoreRequest
{
    public required V1WebhooksRequest Body { get; init; }
}
