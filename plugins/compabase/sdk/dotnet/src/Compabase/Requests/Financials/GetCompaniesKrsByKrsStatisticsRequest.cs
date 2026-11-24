namespace Compabase.Requests.Financials;

/// <summary>
/// The inputs of the GetCompaniesKrsByKrsStatistics operation.
/// </summary>
public sealed record GetCompaniesKrsByKrsStatisticsRequest
{
    public required string Krs { get; init; }

    public string Locale { get; init; } = "en";
}
