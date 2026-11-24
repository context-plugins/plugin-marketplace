namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Imeigenerator operation.
/// </summary>
public sealed record ImeigeneratorRequest
{
    /// <summary>
    /// Filter by manufacturer brand (e.g., Samsung, Apple, Nokia)
    /// </summary>
    public string? Brand { get; init; }

    /// <summary>
    /// Number of IMEIs to generate
    /// </summary>
    public int? Count { get; init; }
}
