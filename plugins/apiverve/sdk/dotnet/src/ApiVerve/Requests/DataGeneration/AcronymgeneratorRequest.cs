namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Acronymgenerator operation.
/// </summary>
public sealed record AcronymgeneratorRequest
{
    /// <summary>
    /// The phrase to generate an acronym from (must contain at least 2 words)
    /// </summary>
    public required string Text { get; init; }
}
