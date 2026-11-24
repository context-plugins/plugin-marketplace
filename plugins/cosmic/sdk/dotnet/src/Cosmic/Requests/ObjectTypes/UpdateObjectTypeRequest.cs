using Cosmic.Models;

namespace Cosmic.Requests.ObjectTypes;

/// <summary>
/// The inputs of the UpdateObjectType operation.
/// </summary>
public sealed record UpdateObjectTypeRequest
{
    /// <summary>
    /// The Bucket slug. Found under Bucket &gt; Settings in the dashboard.
    /// </summary>
    public required string Slug { get; init; }

    /// <summary>
    /// The Object type slug, unique within the Bucket.
    /// </summary>
    public required string TypeSlug { get; init; }

    public required ObjectTypeUpdate Body { get; init; }
}
