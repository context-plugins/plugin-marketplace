using Lusha.Models;

namespace Lusha.Requests.ProspectingSearchEnrich;

/// <summary>
/// The inputs of the EnrichProspectingContacts operation.
/// </summary>
public sealed record EnrichProspectingContactsRequest
{
    public required ContactEnrichRequest Body { get; init; }
}
