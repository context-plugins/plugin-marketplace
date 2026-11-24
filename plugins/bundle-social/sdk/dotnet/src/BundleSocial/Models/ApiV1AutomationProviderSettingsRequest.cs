using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.AnyOf;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ApiV1AutomationProviderSettingsRequest
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    [JsonPropertyName("platform")]
    public required Platform Platform { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("config")]
    public Config2? Config { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status61? Status { get; init; } = Status61.Draft;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
