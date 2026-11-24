namespace Cosmic.Requests.ObjectTypes;

/// <summary>
/// The inputs of the DeleteObjectType operation.
/// </summary>
public sealed record DeleteObjectTypeRequest
{
    /// <summary>
    /// The Bucket slug. Found under Bucket &gt; Settings in the dashboard.
    /// </summary>
    public required string Slug { get; init; }

    /// <summary>
    /// The Object type slug, unique within the Bucket.
    /// </summary>
    public required string TypeSlug { get; init; }

    /// <summary>
    /// Set to <c>true</c> to fire the corresponding webhook for this action.
    /// </summary>
    public bool TriggerWebhook { get; init; } = false;
}
