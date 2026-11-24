namespace ApiVerve.Requests.DataLookup;

/// <summary>
/// The inputs of the Bible operation.
/// </summary>
public sealed record BibleRequest
{
    /// <summary>
    /// The name of the book in the bible (e.g., Genesis)
    /// </summary>
    public required string Book { get; init; }

    /// <summary>
    /// The Bible translation version
    /// </summary>
    public required string Version { get; init; }

    /// <summary>
    /// The chapter number in the book
    /// </summary>
    public required int Chapter { get; init; }

    /// <summary>
    /// The verse number in the chapter
    /// </summary>
    public int? Verse { get; init; }
}
