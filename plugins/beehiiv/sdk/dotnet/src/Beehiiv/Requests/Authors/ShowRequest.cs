namespace Beehiiv.Requests.Authors;

/// <summary>
/// The inputs of the Show operation.
/// </summary>
public sealed record ShowRequest
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The author identifier. This accepts a prefixed author ID, full name, or first name.
    /// </summary>
    public required string AuthorId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
