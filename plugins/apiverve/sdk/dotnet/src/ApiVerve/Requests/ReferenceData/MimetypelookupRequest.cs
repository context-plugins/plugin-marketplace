namespace ApiVerve.Requests.ReferenceData;

/// <summary>
/// The inputs of the Mimetypelookup operation.
/// </summary>
public sealed record MimetypelookupRequest
{
    /// <summary>
    /// File extension to lookup (without the leading dot)
    /// </summary>
    public required string Extension { get; init; }
}
