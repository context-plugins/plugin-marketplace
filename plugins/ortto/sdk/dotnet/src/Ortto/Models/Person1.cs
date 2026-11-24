using System.Text.Json.Serialization;
using Ortto.Core.Models;

namespace Ortto.Models;

public record Person1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contact_id")]
    public string? ContactId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
