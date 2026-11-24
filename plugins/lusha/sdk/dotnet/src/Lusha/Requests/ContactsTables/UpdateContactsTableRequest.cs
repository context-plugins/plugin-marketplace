using Lusha.Models;

namespace Lusha.Requests.ContactsTables;

/// <summary>
/// The inputs of the UpdateContactsTable operation.
/// </summary>
public sealed record UpdateContactsTableRequest
{
    /// <summary>
    /// The table's ID.
    /// </summary>
    public required string TableId { get; init; }

    public required TableUpdateRequest Body { get; init; }
}
