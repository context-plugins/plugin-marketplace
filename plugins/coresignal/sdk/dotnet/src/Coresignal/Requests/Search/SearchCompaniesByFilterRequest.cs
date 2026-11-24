using Coresignal.Models;

namespace Coresignal.Requests.Search;

/// <summary>
/// The inputs of the SearchCompaniesByFilter operation.
/// </summary>
public sealed record SearchCompaniesByFilterRequest
{
    public required CompanyFilter Body { get; init; }
}
