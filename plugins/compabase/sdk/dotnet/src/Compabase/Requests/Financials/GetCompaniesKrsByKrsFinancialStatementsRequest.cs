namespace Compabase.Requests.Financials;

/// <summary>
/// The inputs of the GetCompaniesKrsByKrsFinancialStatements operation.
/// </summary>
public sealed record GetCompaniesKrsByKrsFinancialStatementsRequest
{
    /// <summary>
    /// KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS must contain exactly 10 digits; otherwise request fails with <c>400 INVALID_KRS</c>.
    /// </summary>
    public required string Krs { get; init; }
}
