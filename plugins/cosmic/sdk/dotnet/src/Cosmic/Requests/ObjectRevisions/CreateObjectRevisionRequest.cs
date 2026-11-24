using Cosmic.Models;

namespace Cosmic.Requests.ObjectRevisions;

/// <summary>
/// The inputs of the CreateObjectRevision operation.
/// </summary>
public sealed record CreateObjectRevisionRequest
{
    /// <summary>
    /// The Bucket slug. Found under Bucket &gt; Settings in the dashboard.
    /// </summary>
    public required string Slug { get; init; }

    /// <summary>
    /// The Object id.
    /// </summary>
    public required string ObjectId { get; init; }

    public required RevisionCreate Body { get; init; }
}
