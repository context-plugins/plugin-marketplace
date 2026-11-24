using Cosmic.Models;

namespace Cosmic.Requests.Objects;

/// <summary>
/// The inputs of the UpdateObject operation.
/// </summary>
public sealed record UpdateObjectRequest
{
    /// <summary>
    /// The Bucket slug. Found under Bucket &gt; Settings in the dashboard.
    /// </summary>
    public required string Slug { get; init; }

    /// <summary>
    /// The Object id.
    /// </summary>
    public required string ObjectId { get; init; }

    public required ObjectUpdate Body { get; init; }
}
