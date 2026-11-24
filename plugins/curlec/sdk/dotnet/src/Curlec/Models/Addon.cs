using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record Addon
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("item")]
    public ItemRazorpaySubscriptionsApi? Item { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
