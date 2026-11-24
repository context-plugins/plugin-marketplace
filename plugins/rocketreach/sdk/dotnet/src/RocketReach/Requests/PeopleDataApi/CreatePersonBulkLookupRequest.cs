using System.Collections.Generic;
using RocketReach.Models;

namespace RocketReach.Requests.PeopleDataApi;

/// <summary>
/// The inputs of the CreatePersonBulkLookup operation.
/// </summary>
public sealed record CreatePersonBulkLookupRequest
{
    /// <summary>
    /// List of profile lookup queries for between 10 and 100 profiles
    /// </summary>
    public IReadOnlyList<ProfileMatch>? Queries { get; init; }

    /// <summary>
    /// Name of a profile list to add looked up profiles to upon completion
    /// </summary>
    public string ProfileList { get; init; } = "API Bulk Lookup";

    /// <summary>
    /// Webhook ID to post lookup results to upon completion. Find your webhook ID <see href="https://rocketreach.co/account?section=nav_gen_api">here</see>.
    /// </summary>
    public int? WebhookId { get; init; }
}
