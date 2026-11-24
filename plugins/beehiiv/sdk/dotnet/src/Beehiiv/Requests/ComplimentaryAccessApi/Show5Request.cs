namespace Beehiiv.Requests.ComplimentaryAccessApi;

/// <summary>
/// The inputs of the Show5 operation.
/// </summary>
public sealed record Show5Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The prefixed ID of the complimentary access object
    /// </summary>
    public required string ComplimentaryAccessId { get; init; }

    /// <summary>
    /// Optional list of expandable objects.&lt;br&gt;<c>tier</c> - Returns the full tier object associated with this complimentary access.
    /// </summary>
    public string? Expand { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
