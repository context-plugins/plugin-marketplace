namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Placeholdertext operation.
/// </summary>
public sealed record PlaceholdertextRequest
{
    /// <summary>
    /// The style of placeholder text
    /// </summary>
    public string? Style { get; init; }

    /// <summary>
    /// Number of paragraphs to generate
    /// </summary>
    public int? Paragraphs { get; init; }

    /// <summary>
    /// Number of sentences per paragraph
    /// </summary>
    public int? Sentences { get; init; }
}
