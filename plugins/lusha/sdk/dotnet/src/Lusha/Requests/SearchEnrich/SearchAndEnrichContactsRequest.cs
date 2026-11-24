using Lusha.Models;

namespace Lusha.Requests.SearchEnrich;

/// <summary>
/// The inputs of the SearchAndEnrichContacts operation.
/// </summary>
public sealed record SearchAndEnrichContactsRequest
{
    public required V3ContactsSearchAndEnrichRequest Body { get; init; }
}
