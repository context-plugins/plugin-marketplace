using Lusha.Models;

namespace Lusha.Requests.CompaniesTables;

/// <summary>
/// The inputs of the CreateCompaniesTable operation.
/// </summary>
public sealed record CreateCompaniesTableRequest
{
    public required TableCreateRequest Body { get; init; }
}
