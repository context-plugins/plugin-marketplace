using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record Preferences
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("show_default_blocks")]
    public bool? ShowDefaultBlocks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
