namespace Audioscrape.Requests.Items;

/// <summary>
/// The inputs of the GetItemTranscript operation.
/// </summary>
public sealed record GetItemTranscriptRequest
{
    /// <summary>
    /// Numeric item ID
    /// </summary>
    public required string ItemId { get; init; }
}
