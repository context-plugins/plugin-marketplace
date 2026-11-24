namespace Beehiiv.Requests.CustomFields;

/// <summary>
/// The inputs of the Index10 operation.
/// </summary>
public sealed record Index10Request
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
