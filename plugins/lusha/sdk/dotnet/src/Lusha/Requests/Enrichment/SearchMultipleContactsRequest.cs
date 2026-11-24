using Lusha.Models;

namespace Lusha.Requests.Enrichment;

/// <summary>
/// The inputs of the SearchMultipleContacts operation.
/// </summary>
public sealed record SearchMultipleContactsRequest
{
    /// <summary>
    /// The list of contacts to enrich
    /// </summary>
    public required SearchBulkContactsRequest Body { get; init; }
}
