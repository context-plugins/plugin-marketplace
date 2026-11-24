namespace Compabase.Requests.Companies;

/// <summary>
/// The inputs of the GetCompaniesKrsByKrs operation.
/// </summary>
public sealed record GetCompaniesKrsByKrsRequest
{
    /// <summary>
    /// KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS must contain exactly 10 digits; otherwise request fails with <c>400 INVALID_KRS</c>.
    /// </summary>
    public required string Krs { get; init; }
}
