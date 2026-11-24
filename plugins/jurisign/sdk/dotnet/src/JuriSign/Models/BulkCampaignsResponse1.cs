using System.Text.Json.Serialization;
using JuriSign.Core.Models;

namespace JuriSign.Models;

public record BulkCampaignsResponse1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public BulkCampaign? Data { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("skipped_recipients")]
    public int? SkippedRecipients { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
