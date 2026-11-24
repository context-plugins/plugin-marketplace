namespace Cosmic.Requests.MediaApi;

/// <summary>
/// The inputs of the DeleteMedia operation.
/// </summary>
public sealed record DeleteMediaRequest
{
    /// <summary>
    /// The Bucket slug. Found under Bucket &gt; Settings in the dashboard.
    /// </summary>
    public required string Slug { get; init; }

    /// <summary>
    /// The media id.
    /// </summary>
    public required string MediaId { get; init; }

    /// <summary>
    /// Set to <c>true</c> to fire the corresponding webhook for this action.
    /// </summary>
    public bool TriggerWebhook { get; init; } = false;
}
