using System.ComponentModel.DataAnnotations;

namespace RocketReach.Requests.CompanyDataApi;

/// <summary>
/// The inputs of the CreateCompanyLookup operation.
/// </summary>
public sealed record CreateCompanyLookupRequest
{
    /// <summary>
    /// Domain of the desired company to lookup (preferred).
    /// </summary>
    [MinLength(1)]
    public string? Domain { get; init; }

    /// <summary>
    /// RocketReach internal unique company ID
    /// </summary>
    public int? Id { get; init; }

    /// <summary>
    /// LinkedIn URL of the desired company to lookup.
    /// </summary>
    [MinLength(1)]
    [RegularExpression("")]
    public string? LinkedinUrl { get; init; }

    /// <summary>
    /// Name of the desired company to lookup.
    /// </summary>
    [MinLength(1)]
    public string? Name { get; init; }

    /// <summary>
    /// Stock ticker of the desired company to lookup.
    /// </summary>
    [MinLength(1)]
    public string? Ticker { get; init; }
}
