using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record NotificationChannelConfig
{
    [JsonPropertyName("Sns")]
    public required SnsChannelConfig Sns { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Filters")]
    public NotificationFilterConfig? Filters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
