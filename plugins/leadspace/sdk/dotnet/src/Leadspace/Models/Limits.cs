using System.Text.Json.Serialization;
using Leadspace.Core.Models;
using Leadspace.Core.Validation.Attributes;

namespace Leadspace.Models;

public record Limits
{
    /// <summary>
    /// Max leads retrieved per expanded account
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resultPerAccount")]
    [Minimum(1)]
    [Maximum(100)]
    public int? ResultPerAccount { get; init; } = 10;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
