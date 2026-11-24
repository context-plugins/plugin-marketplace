namespace Cosmic.Requests.ObjectTypes;

/// <summary>
/// The inputs of the GetObjectType operation.
/// </summary>
public sealed record GetObjectTypeRequest
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
    /// The Bucket read key. Required unless the Bucket has no read key configured.
    /// </summary>
    public string? ReadKey { get; init; }

    /// <summary>
    /// Set to <c>true</c> to indent the JSON response for human reading. Increases response size.
    /// </summary>
    public bool Pretty { get; init; } = false;
}
