namespace ApiVerve.Requests.Entertainment;

/// <summary>
/// The inputs of the Wordlehelper operation.
/// </summary>
public sealed record WordlehelperRequest
{
    /// <summary>
    /// Correct letters with positions (e.g., A1 means A at position 1)
    /// </summary>
    public string? Green { get; init; }

    /// <summary>
    /// Letters in word but wrong position (e.g., R2 means R not at position 2)
    /// </summary>
    public string? Yellow { get; init; }

    /// <summary>
    /// Letters not in the word
    /// </summary>
    public string? Gray { get; init; }

    /// <summary>
    /// Pattern with known letters (use _ for unknown)
    /// </summary>
    public string? Pattern { get; init; }

    /// <summary>
    /// Maximum number of suggestions
    /// </summary>
    public int? Limit { get; init; }
}
