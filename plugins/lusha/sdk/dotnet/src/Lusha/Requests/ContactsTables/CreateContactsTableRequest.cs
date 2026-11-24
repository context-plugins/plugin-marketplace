using Lusha.Models;

namespace Lusha.Requests.ContactsTables;

/// <summary>
/// The inputs of the CreateContactsTable operation.
/// </summary>
public sealed record CreateContactsTableRequest
{
    public required TableCreateRequest Body { get; init; }
}
