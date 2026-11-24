namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Palindromechecker operation.
/// </summary>
public sealed record PalindromecheckerRequest
{
    /// <summary>
    /// The text to check for palindrome. Maximum 20000 characters
    /// </summary>
    public required string Text { get; init; }

    /// <summary>
    /// Ignore case when checking (default: true)
    /// </summary>
    public bool? Ignorecase { get; init; }

    /// <summary>
    /// Ignore spaces when checking (default: true)
    /// </summary>
    public bool? Ignorespaces { get; init; }

    /// <summary>
    /// Ignore punctuation when checking (default: true)
    /// </summary>
    public bool? Ignorepunctuation { get; init; }
}
