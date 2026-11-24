using System.Text.Json.Serialization;
using Ortto.Core.Models;

namespace Ortto.Models;

public record Account
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fields")]
    public object? Fields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
