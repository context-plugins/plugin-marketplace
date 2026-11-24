using System.Collections.Generic;

namespace Beehiiv.Requests.Posts;

/// <summary>
/// The inputs of the Preview operation.
/// </summary>
public sealed record PreviewRequest
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The prefixed ID of the post object
    /// </summary>
    public required string PostId { get; init; }

    /// <summary>
    /// <c>email</c> (default) or <c>web</c>.
    /// </summary>
    public string? Platform { get; init; }

    /// <summary>
    /// <c>free</c> (default) or <c>premium</c>. <c>premium</c> requires <c>tier_ids</c> to be present. Ignored if <c>subscriber_id</c> is present.
    /// </summary>
    public string? SubscriberType { get; init; }

    /// <summary>
    /// One or more premium tier IDs to preview as. Only used when <c>subscriber_type</c> is <c>premium</c>. Ignored if <c>subscriber_id</c> is present.
    /// </summary>
    public IReadOnlyList<string>? TierIds { get; init; }

    /// <summary>
    /// Preview using a specific subscriber's real tier memberships. Takes precedence over <c>subscriber_type</c>/<c>tier_ids</c> when present.
    /// </summary>
    public string? SubscriberId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
