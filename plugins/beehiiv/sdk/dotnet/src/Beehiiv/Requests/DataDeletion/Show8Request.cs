namespace Beehiiv.Requests.DataDeletion;

/// <summary>
/// The inputs of the Show8 operation.
/// </summary>
public sealed record Show8Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The ID of the data deletion request
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
