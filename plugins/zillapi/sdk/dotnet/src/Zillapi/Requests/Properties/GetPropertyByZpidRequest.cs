using System.ComponentModel.DataAnnotations;

namespace Zillapi.Requests.Properties;

/// <summary>
/// The inputs of the GetPropertyByZpid operation.
/// </summary>
public sealed record GetPropertyByZpidRequest
{
    /// <summary>
    /// Zillow property id (numeric string).
    /// </summary>
    [RegularExpression("^[0-9]+$")]
    public required string Zpid { get; init; }

    /// <summary>
    /// Comma-separated dotted-path field projection.
    /// </summary>
    public string? Fields { get; init; }
}
