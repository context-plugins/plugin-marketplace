using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record Theme
{
    /// <summary>
    /// Hide the checkout top bar to prevent method switching.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hide_topbar")]
    public bool? HideTopbar { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
