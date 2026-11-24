using Lusha.Models;

namespace Lusha.Requests.Search;

/// <summary>
/// The inputs of the SearchContacts operation.
/// </summary>
public sealed record SearchContactsRequest
{
    public required V3ContactsSearchRequest Body { get; init; }
}
