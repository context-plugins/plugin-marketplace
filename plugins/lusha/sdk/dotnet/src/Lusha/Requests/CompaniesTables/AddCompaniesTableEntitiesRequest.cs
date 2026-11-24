using Lusha.Models;

namespace Lusha.Requests.CompaniesTables;

/// <summary>
/// The inputs of the AddCompaniesTableEntities operation.
/// </summary>
public sealed record AddCompaniesTableEntitiesRequest
{
    /// <summary>
    /// The table's ID.
    /// </summary>
    public required string TableId { get; init; }

    public required EntitiesAddRequest Body { get; init; }
}
