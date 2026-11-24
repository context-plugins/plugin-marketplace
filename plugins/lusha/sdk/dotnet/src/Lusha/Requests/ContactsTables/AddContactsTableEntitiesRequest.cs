using Lusha.Models;

namespace Lusha.Requests.ContactsTables;

/// <summary>
/// The inputs of the AddContactsTableEntities operation.
/// </summary>
public sealed record AddContactsTableEntitiesRequest
{
    /// <summary>
    /// The table's ID.
    /// </summary>
    public required string TableId { get; init; }

    public required EntitiesAddRequest Body { get; init; }
}
