using Lusha.Models;

namespace Lusha.Requests.CompaniesTables;

/// <summary>
/// The inputs of the RemoveCompaniesTableEntities operation.
/// </summary>
public sealed record RemoveCompaniesTableEntitiesRequest
{
    /// <summary>
    /// The table's ID.
    /// </summary>
    public required string TableId { get; init; }

    public required EntitiesRemoveRequest Body { get; init; }
}
