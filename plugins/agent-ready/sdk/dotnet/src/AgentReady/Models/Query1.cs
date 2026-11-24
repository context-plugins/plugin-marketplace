using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using AgentReady.Core.Models;
using AgentReady.Models.Enums;

namespace AgentReady.Models;

public record Query1
{
    [JsonPropertyName("q")]
    [StringLength(2000, MinimumLength = 1)]
    public required string Q { get; init; }

    /// <summary>
    /// Optional filter mapping to an Agent Ready corpus type. 'any' (default) searches everything.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("itemType")]
    public ItemType? ItemType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("site")]
    public string? Site { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
