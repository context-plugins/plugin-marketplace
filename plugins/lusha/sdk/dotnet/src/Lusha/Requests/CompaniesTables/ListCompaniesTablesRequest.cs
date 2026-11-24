using Lusha.Models;

namespace Lusha.Requests.CompaniesTables;

/// <summary>
/// The inputs of the ListCompaniesTables operation.
/// </summary>
public sealed record ListCompaniesTablesRequest
{
    public required TableListRequest Body { get; init; }
}
