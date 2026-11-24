using System.Collections.Generic;
using RocketReach.Models;

namespace RocketReach.Requests.PeopleDataApi;

/// <summary>
/// The inputs of the CreateUniversalPersonBulkLookup operation.
/// </summary>
public sealed record CreateUniversalPersonBulkLookupRequest
{
    /// <summary>
    /// Specify the lookup criteria for up to 100 people.
    /// </summary>
    public IReadOnlyList<UniversalCreditPersonLookupInput>? Queries { get; init; }

    /// <summary>
    /// Add specified contacts to this profile list.
    /// </summary>
    public string ProfileList { get; init; } = "API Bulk Lookup";

    /// <summary>
    /// ID of the webhook to post lookup results upon completion.
    /// </summary>
    public int? WebhookId { get; init; }
}
