namespace ApiVerve.Requests.DataLookup;

/// <summary>
/// The inputs of the Dictionary operation.
/// </summary>
public sealed record DictionaryRequest
{
    /// <summary>
    /// The word for which you want to get the definition (e.g., apple)
    /// </summary>
    public required string Word { get; init; }
}
