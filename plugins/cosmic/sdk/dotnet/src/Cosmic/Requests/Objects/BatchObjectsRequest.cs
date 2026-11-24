using Cosmic.Models;

namespace Cosmic.Requests.Objects;

/// <summary>
/// The inputs of the BatchObjects operation.
/// </summary>
public sealed record BatchObjectsRequest
{
    /// <summary>
    /// The Bucket slug. Found under Bucket &gt; Settings in the dashboard.
    /// </summary>
    public required string Slug { get; init; }

    public required BatchRequest Body { get; init; }
}
