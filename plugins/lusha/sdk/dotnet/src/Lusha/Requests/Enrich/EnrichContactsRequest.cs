using Lusha.Models;

namespace Lusha.Requests.Enrich;

/// <summary>
/// The inputs of the EnrichContacts operation.
/// </summary>
public sealed record EnrichContactsRequest
{
    public required V3ContactsEnrichRequest Body { get; init; }
}
