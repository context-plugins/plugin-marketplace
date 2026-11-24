using CarsXe.Models.Enums;

namespace CarsXe.Requests.YearMakeModel;

/// <summary>
/// The inputs of the GetYearMakeModel operation.
/// </summary>
public sealed record GetYearMakeModelRequest
{
    /// <summary>
    /// The manufacturing year of the vehicle (numeric, between 1900 and the current model year plus one).
    /// </summary>
    public required string Year { get; init; }

    /// <summary>
    /// The manufacturer of the vehicle (e.g., Toyota, Ford, BMW).
    /// </summary>
    public required string Make { get; init; }

    /// <summary>
    /// The specific model of the vehicle (e.g., Camry, F-150, X5).
    /// </summary>
    public required string Model { get; init; }

    /// <summary>
    /// The vehicle trim (e.g., XLE, XSE).
    /// </summary>
    public string? Trim { get; init; }

    /// <summary>
    /// Return all trim options available for the year, make and model. Set to <c>1</c> to use.
    /// </summary>
    public AllTrimOptions? AllTrimOptions { get; init; }
}
