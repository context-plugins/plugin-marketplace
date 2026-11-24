using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record Dlr
{
    /// <summary>
    /// Optional DLR (Delivery Receipt) callback URL
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_endpoint")]
    public string? CallbackEndpoint { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
