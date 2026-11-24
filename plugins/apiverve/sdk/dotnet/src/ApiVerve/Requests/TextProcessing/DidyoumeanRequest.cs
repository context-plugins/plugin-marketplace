namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Didyoumean operation.
/// </summary>
public sealed record DidyoumeanRequest
{
    /// <summary>
    /// The text you want to check for spelling mistakes
    /// </summary>
    public required string Query { get; init; }
}
