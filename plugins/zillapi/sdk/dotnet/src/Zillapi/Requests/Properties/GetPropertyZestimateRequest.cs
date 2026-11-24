using System.ComponentModel.DataAnnotations;

namespace Zillapi.Requests.Properties;

/// <summary>
/// The inputs of the GetPropertyZestimate operation.
/// </summary>
public sealed record GetPropertyZestimateRequest
{
    /// <summary>
    /// Zillow property id (numeric string).
    /// </summary>
    [RegularExpression("^[0-9]+$")]
    public required string Zpid { get; init; }
}
