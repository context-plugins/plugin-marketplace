using System.Text.Json.Serialization;
using Archbee.Core.Models;

namespace Archbee.Models;

public record DataArchbeePublicApiReferenceApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("result")]
    public string? Result { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("importedContent")]
    public string? ImportedContent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
