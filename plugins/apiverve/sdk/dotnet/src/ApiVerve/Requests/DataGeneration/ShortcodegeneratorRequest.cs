namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Shortcodegenerator operation.
/// </summary>
public sealed record ShortcodegeneratorRequest
{
    /// <summary>
    /// Number of codes to generate
    /// </summary>
    public int? Count { get; init; }

    /// <summary>
    /// Length of each code
    /// </summary>
    public int? Length { get; init; }

    /// <summary>
    /// Character set
    /// </summary>
    public string? Charset { get; init; }
}
