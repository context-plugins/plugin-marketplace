namespace DevCycle.Requests.WebhooksApi;

/// <summary>
/// The inputs of the WebhooksControllerFindOne operation.
/// </summary>
public sealed record WebhooksControllerFindOneRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }
}
