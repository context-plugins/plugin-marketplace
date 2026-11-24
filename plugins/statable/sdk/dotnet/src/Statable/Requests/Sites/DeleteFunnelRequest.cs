namespace Statable.Requests.Sites;

/// <summary>
/// The inputs of the DeleteFunnel operation.
/// </summary>
public sealed record DeleteFunnelRequest
{
    public required long Id { get; init; }

    public required long FunnelId { get; init; }
}
