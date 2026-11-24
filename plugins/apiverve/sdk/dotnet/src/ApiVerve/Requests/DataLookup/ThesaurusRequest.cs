namespace ApiVerve.Requests.DataLookup;

/// <summary>
/// The inputs of the Thesaurus operation.
/// </summary>
public sealed record ThesaurusRequest
{
    /// <summary>
    /// The word for which you want to get synonyms
    /// </summary>
    public required string Word { get; init; }
}
