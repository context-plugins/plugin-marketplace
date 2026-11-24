namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Anagramdetector operation.
/// </summary>
public sealed record AnagramdetectorRequest
{
    /// <summary>
    /// The first text to compare
    /// </summary>
    public required string Text1 { get; init; }

    /// <summary>
    /// The second text to compare
    /// </summary>
    public required string Text2 { get; init; }

    /// <summary>
    /// Ignore case when comparing (default: true)
    /// </summary>
    public bool? Ignorecase { get; init; }

    /// <summary>
    /// Ignore spaces when comparing (default: true)
    /// </summary>
    public bool? Ignorespaces { get; init; }
}
