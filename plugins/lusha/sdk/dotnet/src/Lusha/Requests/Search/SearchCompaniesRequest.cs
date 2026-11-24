using Lusha.Models;

namespace Lusha.Requests.Search;

/// <summary>
/// The inputs of the SearchCompanies operation.
/// </summary>
public sealed record SearchCompaniesRequest
{
    public required V3CompaniesSearchRequest Body { get; init; }
}
