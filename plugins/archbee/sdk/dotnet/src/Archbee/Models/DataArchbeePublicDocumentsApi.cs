using System.Text.Json.Serialization;
using Archbee.Core.Models;

namespace Archbee.Models;

public record DataArchbeePublicDocumentsApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public bool? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
