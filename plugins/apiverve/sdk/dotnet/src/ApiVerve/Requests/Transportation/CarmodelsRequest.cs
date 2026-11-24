namespace ApiVerve.Requests.Transportation;

/// <summary>
/// The inputs of the Carmodels operation.
/// </summary>
public sealed record CarmodelsRequest
{
    /// <summary>
    /// The make (manufacturer) of the car (e.g., Toyota, Honda, Ford)
    /// </summary>
    public required string Make { get; init; }

    /// <summary>
    /// Filter by year (1984-present)
    /// </summary>
    public int? Year { get; init; }

    /// <summary>
    /// Narrow to a model name (e.g., Camry)
    /// </summary>
    public string? Model { get; init; }

    /// <summary>
    /// Narrow to a trim level (e.g., Hybrid)
    /// </summary>
    public string? Trim { get; init; }
}
