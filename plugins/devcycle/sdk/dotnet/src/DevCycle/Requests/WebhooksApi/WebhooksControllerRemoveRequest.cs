namespace DevCycle.Requests.WebhooksApi;

/// <summary>
/// The inputs of the WebhooksControllerRemove operation.
/// </summary>
public sealed record WebhooksControllerRemoveRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }
}
