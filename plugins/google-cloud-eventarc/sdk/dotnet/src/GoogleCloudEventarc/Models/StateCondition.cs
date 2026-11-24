using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;
using GoogleCloudEventarc.Models.Enums;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// A condition that is part of the trigger state computation.
/// </summary>
public record StateCondition
{
    /// <summary>
    /// Human-readable message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    /// <summary>
    /// The canonical code of the condition.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public Code? Code { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
