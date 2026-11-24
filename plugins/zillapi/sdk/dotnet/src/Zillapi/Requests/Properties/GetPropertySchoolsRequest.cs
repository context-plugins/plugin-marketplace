using System.ComponentModel.DataAnnotations;

namespace Zillapi.Requests.Properties;

/// <summary>
/// The inputs of the GetPropertySchools operation.
/// </summary>
public sealed record GetPropertySchoolsRequest
{
    /// <summary>
    /// Zillow property id (numeric string).
    /// </summary>
    [RegularExpression("^[0-9]+$")]
    public required string Zpid { get; init; }
}
