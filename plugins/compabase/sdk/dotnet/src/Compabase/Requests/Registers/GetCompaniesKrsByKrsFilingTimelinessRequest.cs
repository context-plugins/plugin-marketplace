namespace Compabase.Requests.Registers;

/// <summary>
/// The inputs of the GetCompaniesKrsByKrsFilingTimeliness operation.
/// </summary>
public sealed record GetCompaniesKrsByKrsFilingTimelinessRequest
{
    /// <summary>
    /// KRS input is normalized by stripping non-digits and left-padding to 10 digits.
    /// </summary>
    public required string Krs { get; init; }
}
