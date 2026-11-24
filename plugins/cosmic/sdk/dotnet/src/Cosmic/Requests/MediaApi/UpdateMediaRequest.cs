using Cosmic.Models;

namespace Cosmic.Requests.MediaApi;

/// <summary>
/// The inputs of the UpdateMedia operation.
/// </summary>
public sealed record UpdateMediaRequest
{
    /// <summary>
    /// The Bucket slug. Found under Bucket &gt; Settings in the dashboard.
    /// </summary>
    public required string Slug { get; init; }

    /// <summary>
    /// The media id.
    /// </summary>
    public required string MediaId { get; init; }

    public required MediaUpdate Body { get; init; }
}
