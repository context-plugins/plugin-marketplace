using Compabase.Core.Validation.Attributes;

namespace Compabase.Requests.Registers;

/// <summary>
/// The inputs of the GetCompaniesKrsByKrsGpw operation.
/// </summary>
public sealed record GetCompaniesKrsByKrsGpwRequest
{
    /// <summary>
    /// KRS input is normalized by stripping non-digits and left-padding to 10 digits.
    /// </summary>
    public required string Krs { get; init; }

    /// <summary>
    /// Comma-separated extras. Supported values <c>series</c>, <c>intraday</c>.
    /// </summary>
    public string? Include { get; init; }

    /// <summary>
    /// Daily bars when <c>include</c> contains <c>series</c>. Ignored otherwise.
    /// </summary>
    [Minimum(0)]
    [Maximum(2000)]
    public int SeriesLimit { get; init; } = 250;
}
