using Surfe.Models;

namespace Surfe.Requests.People;

/// <summary>
/// The inputs of the StartPeopleEnrichment operation.
/// </summary>
public sealed record StartPeopleEnrichmentRequest
{
    public required PeopleEnrichmentRequest Body { get; init; }
}
