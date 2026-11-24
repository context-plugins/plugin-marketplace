using CarsXe.Models.Enums;

namespace CarsXe.Requests.YearMakeModel;

/// <summary>
/// The inputs of the GetYearMakeModelOptions operation.
/// </summary>
public sealed record GetYearMakeModelOptionsRequest
{
    /// <summary>
    /// Return exactly this array when required filters are present. If omitted, the response is inferred automatically from <c>make</c>/<c>model</c>/<c>year</c>.
    /// </summary>
    public Dimension? Dimension { get; init; }

    /// <summary>
    /// Filter to a specific manufacturing year. Required when filtering by <c>model</c> without <c>make</c>.
    /// </summary>
    public string? Year { get; init; }

    /// <summary>
    /// Filter to a specific manufacturer (e.g., Toyota, Ford, Lexus). Required for <c>dimension=models</c>.
    /// </summary>
    public string? Make { get; init; }

    /// <summary>
    /// Filter to a specific model (e.g., Camry, F-150, LX). Required for <c>dimension=trims</c> and for <c>dimension=variants</c> unless both <c>year</c> and <c>make</c> are set.
    /// </summary>
    public string? Model { get; init; }

    /// <summary>
    /// Optional substring filter on trim names. Only applied when querying <c>dimension=trims</c> or <c>dimension=variants</c>.
    /// </summary>
    public string? Trim { get; init; }
}
