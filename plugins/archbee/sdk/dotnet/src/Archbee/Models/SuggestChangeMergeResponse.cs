using System.Text.Json.Serialization;
using Archbee.Core.Models;

namespace Archbee.Models;

public record SuggestChangeMergeResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
