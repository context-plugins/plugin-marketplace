namespace ApiVerve.Requests.MathCalculations;

/// <summary>
/// The inputs of the Romannumeralmath operation.
/// </summary>
public sealed record RomannumeralmathRequest
{
    /// <summary>
    /// The first Roman numeral
    /// </summary>
    public required string Roman1 { get; init; }

    /// <summary>
    /// The second Roman numeral
    /// </summary>
    public required string Roman2 { get; init; }

    /// <summary>
    /// Operation to perform
    /// </summary>
    public string? Operation { get; init; }
}
