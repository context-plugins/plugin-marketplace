namespace Beehiiv.Requests.CustomFields;

/// <summary>
/// The inputs of the Delete operation.
/// </summary>
public sealed record DeleteRequest
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The ID of the Custom Fields object
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
