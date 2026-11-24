namespace ApiVerve.Requests.DataLookup;

/// <summary>
/// The inputs of the Unicodelookup operation.
/// </summary>
public sealed record UnicodelookupRequest
{
    /// <summary>
    /// The Unicode character to lookup. Supply either character or codepoint.
    /// </summary>
    public string? Character { get; init; }

    /// <summary>
    /// The Unicode codepoint in hex (e.g., '1F44B' or 'U+1F44B'). Supply either character or codepoint.
    /// </summary>
    public string? Codepoint { get; init; }
}
