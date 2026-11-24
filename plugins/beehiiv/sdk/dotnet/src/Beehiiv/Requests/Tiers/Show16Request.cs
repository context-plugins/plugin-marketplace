namespace Beehiiv.Requests.Tiers;

/// <summary>
/// The inputs of the Show16 operation.
/// </summary>
public sealed record Show16Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The prefixed ID of the tier object
    /// </summary>
    public required string TierId { get; init; }

    /// <summary>
    /// Optional list of expandable objects.&lt;br&gt;<c>stats</c> - Returns statistics about the tier(s).&lt;br&gt;<c>prices</c> - Returns prices for the tier(s).
    /// </summary>
    public string? Expand { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
