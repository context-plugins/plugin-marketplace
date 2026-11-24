namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Commentgenerator operation.
/// </summary>
public sealed record CommentgeneratorRequest
{
    /// <summary>
    /// The mode of comment generation
    /// </summary>
    public required string Mode { get; init; }

    /// <summary>
    /// The tone of the comments
    /// </summary>
    public string? Tone { get; init; }

    /// <summary>
    /// The number of comments to generate (max 10)
    /// </summary>
    public int? Count { get; init; }

    /// <summary>
    /// Whether to include emojis in the comments
    /// </summary>
    public bool? Emojis { get; init; }
}
