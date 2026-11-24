using Cosmic.Models;

namespace Cosmic.Requests.Objects;

/// <summary>
/// The inputs of the CreateObject operation.
/// </summary>
public sealed record CreateObjectRequest
{
    /// <summary>
    /// The Bucket slug. Found under Bucket &gt; Settings in the dashboard.
    /// </summary>
    public required string Slug { get; init; }

    public required ObjectCreate Body { get; init; }
}
