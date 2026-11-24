namespace Cosmic.Requests.Objects;

/// <summary>
/// The inputs of the DeleteObject operation.
/// </summary>
public sealed record DeleteObjectRequest
{
    /// <summary>
    /// The Bucket slug. Found under Bucket &gt; Settings in the dashboard.
    /// </summary>
    public required string Slug { get; init; }

    /// <summary>
    /// The Object id.
    /// </summary>
    public required string ObjectId { get; init; }

    /// <summary>
    /// Set to <c>true</c> to fire the corresponding webhook for this action.
    /// </summary>
    public bool TriggerWebhook { get; init; } = false;
}
