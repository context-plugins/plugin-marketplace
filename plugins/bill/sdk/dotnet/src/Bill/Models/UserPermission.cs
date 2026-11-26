using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// User level permission response DTO.
/// </summary>
public record UserPermission
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
