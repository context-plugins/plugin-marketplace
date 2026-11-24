using System.Collections.Generic;
using System.Text.Json.Serialization;
using RocketReach.Core.Models;

namespace RocketReach.Models;

public record UniversalCreditApiBulkLookupQuery
{
    /// <summary>
    /// Specify the lookup criteria for up to 100 people.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queries")]
    public IReadOnlyList<UniversalCreditPersonLookupInput>? Queries { get; init; }

    /// <summary>
    /// Add specified contacts to this profile list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("profile_list")]
    public string? ProfileList { get; init; } = "API Bulk Lookup";

    /// <summary>
    /// ID of the webhook to post lookup results upon completion.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhook_id")]
    public int? WebhookId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
