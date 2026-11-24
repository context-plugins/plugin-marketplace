using Compabase.Core.Validation.Attributes;

namespace Compabase.Requests.Companies;

/// <summary>
/// The inputs of the GetCompaniesKrsByKrsGroup operation.
/// </summary>
public sealed record GetCompaniesKrsByKrsGroupRequest
{
    /// <summary>
    /// KRS input is normalized by stripping non-digits and left-padding to 10 digits.
    /// </summary>
    public required string Krs { get; init; }

    /// <summary>
    /// Max group companies per list.
    /// </summary>
    [Maximum(200)]
    public int Limit { get; init; } = 50;
}
