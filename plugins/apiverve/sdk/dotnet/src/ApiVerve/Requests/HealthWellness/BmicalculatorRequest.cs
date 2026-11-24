namespace ApiVerve.Requests.HealthWellness;

/// <summary>
/// The inputs of the Bmicalculator operation.
/// </summary>
public sealed record BmicalculatorRequest
{
    /// <summary>
    /// Weight in kg (metric) or lbs (imperial)
    /// </summary>
    public required double Weight { get; init; }

    /// <summary>
    /// Height in cm (metric) or inches (imperial)
    /// </summary>
    public required double Height { get; init; }

    /// <summary>
    /// Unit system for weight and height
    /// </summary>
    public required string Unit { get; init; }

    /// <summary>
    /// Age in years (required for BMR/TDEE calculations)
    /// </summary>
    public double? Age { get; init; }

    /// <summary>
    /// Gender (required for BMR/TDEE calculations)
    /// </summary>
    public string? Gender { get; init; }

    /// <summary>
    /// Activity level (required for TDEE/calorie calculations)
    /// </summary>
    public string? ActivityLevel { get; init; }
}
