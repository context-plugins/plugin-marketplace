using Lusha.Models;

namespace Lusha.Requests.ContactsTables;

/// <summary>
/// The inputs of the RemoveContactsTableEntities operation.
/// </summary>
public sealed record RemoveContactsTableEntitiesRequest
{
    /// <summary>
    /// The table's ID.
    /// </summary>
    public required string TableId { get; init; }

    public required EntitiesRemoveRequest Body { get; init; }
}
