using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record Relationship
{
    /// <summary>
    /// True if the stakeholder is a company director.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("director")]
    public bool? Director { get; init; }

    /// <summary>
    /// True if the stakeholder is an executive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executive")]
    public bool? Executive { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
