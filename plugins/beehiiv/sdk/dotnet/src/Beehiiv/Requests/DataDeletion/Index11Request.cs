namespace Beehiiv.Requests.DataDeletion;

/// <summary>
/// The inputs of the Index11 operation.
/// </summary>
public sealed record Index11Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
