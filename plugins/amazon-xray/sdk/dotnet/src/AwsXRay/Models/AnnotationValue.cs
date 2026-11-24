using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

/// <summary>
/// Exactly one member is set.
/// </summary>
public record AnnotationValue
{
    /// <summary>
    /// Value for a Number annotation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NumberValue")]
    public double? NumberValue { get; init; }

    /// <summary>
    /// Value for a Boolean annotation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BooleanValue")]
    public bool? BooleanValue { get; init; }

    /// <summary>
    /// Value for a String annotation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StringValue")]
    public string? StringValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
