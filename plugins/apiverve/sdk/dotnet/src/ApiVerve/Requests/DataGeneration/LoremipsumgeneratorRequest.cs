namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Loremipsumgenerator operation.
/// </summary>
public sealed record LoremipsumgeneratorRequest
{
    /// <summary>
    /// The number of paragraphs to generate
    /// </summary>
    public int? Paragraphs { get; init; }

    /// <summary>
    /// Start the text with 'Lorem ipsum dolor sit amet'
    /// </summary>
    public bool? Startwithlorem { get; init; }

    /// <summary>
    /// The maximum length of the generated text (0 for no limit)
    /// </summary>
    public int? Maxlength { get; init; }
}
