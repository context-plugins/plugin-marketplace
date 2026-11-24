using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

public record User
{
    /// <summary>
    /// This field is set as <c>true</c> if you can make online payments
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payOnline")]
    public bool? PayOnline { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
