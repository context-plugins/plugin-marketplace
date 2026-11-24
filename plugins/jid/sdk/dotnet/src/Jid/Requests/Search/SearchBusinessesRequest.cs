using System.ComponentModel.DataAnnotations;

namespace Jid.Requests.Search;

/// <summary>
/// The inputs of the SearchBusinesses operation.
/// </summary>
public sealed record SearchBusinessesRequest
{
    [StringLength(200, MinimumLength = 2)]
    public required string Q { get; init; }

    /// <summary>
    /// ISO 3166-1 alpha-2. FR also searches the French SIRENE register live.
    /// </summary>
    [RegularExpression("^[A-Za-z]{2}$")]
    public string? Country { get; init; }
}
