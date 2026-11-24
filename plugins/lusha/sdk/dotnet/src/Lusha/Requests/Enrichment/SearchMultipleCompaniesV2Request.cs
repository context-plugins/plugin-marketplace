using Lusha.Models;

namespace Lusha.Requests.Enrichment;

/// <summary>
/// The inputs of the SearchMultipleCompaniesV2 operation.
/// </summary>
public sealed record SearchMultipleCompaniesV2Request
{
    public required CompaniesBulkRequest Body { get; init; }
}
