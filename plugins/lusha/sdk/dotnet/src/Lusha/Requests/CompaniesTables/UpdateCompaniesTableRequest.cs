using Lusha.Models;

namespace Lusha.Requests.CompaniesTables;

/// <summary>
/// The inputs of the UpdateCompaniesTable operation.
/// </summary>
public sealed record UpdateCompaniesTableRequest
{
    /// <summary>
    /// The table's ID.
    /// </summary>
    public required string TableId { get; init; }

    public required TableUpdateRequest Body { get; init; }
}
