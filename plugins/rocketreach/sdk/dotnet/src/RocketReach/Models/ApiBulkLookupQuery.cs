using System.Collections.Generic;
using System.Text.Json.Serialization;
using RocketReach.Core.Models;

namespace RocketReach.Models;

public record ApiBulkLookupQuery
{
    /// <summary>
    /// List of profile lookup queries for between 10 and 100 profiles
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queries")]
    public IReadOnlyList<ProfileMatch>? Queries { get; init; }

    /// <summary>
    /// Name of a profile list to add looked up profiles to upon completion
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("profile_list")]
    public string? ProfileList { get; init; } = "API Bulk Lookup";

    /// <summary>
    /// Webhook ID to post lookup results to upon completion. Find your webhook ID <see href="https://rocketreach.co/account?section=nav_gen_api">here</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhook_id")]
    public int? WebhookId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
