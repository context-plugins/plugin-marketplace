namespace ApiVerve.Requests.DataLookup;

/// <summary>
/// The inputs of the Emoji operation.
/// </summary>
public sealed record EmojiRequest
{
    /// <summary>
    /// The emoji for which you want to get the text representation (e.g., 🥳)
    /// </summary>
    public required string Emoji { get; init; }
}
