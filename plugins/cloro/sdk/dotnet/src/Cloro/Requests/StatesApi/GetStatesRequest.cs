using System.ComponentModel.DataAnnotations;

namespace Cloro.Requests.StatesApi;

/// <summary>
/// The inputs of the GetStates operation.
/// </summary>
public sealed record GetStatesRequest
{
    /// <summary>
    /// ISO 3166-1 alpha-2 country code. Only "US" returns results.
    /// </summary>
    [StringLength(2, MinimumLength = 2)]
    [RegularExpression("^[A-Z]{2}$")]
    public required string Country { get; init; }
}
