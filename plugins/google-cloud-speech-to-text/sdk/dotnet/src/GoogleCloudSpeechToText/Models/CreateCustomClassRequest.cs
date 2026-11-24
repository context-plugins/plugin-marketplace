using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// Message sent by the client for the <c>CreateCustomClass</c> method.
/// </summary>
public record CreateCustomClassRequest
{
    /// <summary>
    /// Required. The custom class to create.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customClass")]
    public CustomClass2? CustomClass { get; init; }

    /// <summary>
    /// Required. The ID to use for the custom class, which will become the final component of the custom class' resource name. This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a letter or a number, and be 4-63 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customClassId")]
    public string? CustomClassId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
