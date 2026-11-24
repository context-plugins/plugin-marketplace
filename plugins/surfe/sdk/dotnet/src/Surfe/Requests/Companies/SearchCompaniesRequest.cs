using Surfe.Models;

namespace Surfe.Requests.Companies;

/// <summary>
/// The inputs of the SearchCompanies operation.
/// </summary>
public sealed record SearchCompaniesRequest
{
    public required CompanySearchRequest Body { get; init; }
}
