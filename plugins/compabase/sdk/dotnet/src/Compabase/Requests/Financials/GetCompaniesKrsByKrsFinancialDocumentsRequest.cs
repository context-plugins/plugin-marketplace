using Compabase.Core.Validation.Attributes;

namespace Compabase.Requests.Financials;

/// <summary>
/// The inputs of the GetCompaniesKrsByKrsFinancialDocuments operation.
/// </summary>
public sealed record GetCompaniesKrsByKrsFinancialDocumentsRequest
{
    public required string Krs { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 25;

    [Minimum(0)]
    public int Offset { get; init; } = 0;
}
