using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// A representation of the FilteringAttribute resource. Filtering attributes are per event type.
/// </summary>
public record FilteringAttribute
{
    /// <summary>
    /// Output only. If true, the attribute accepts matching expressions in the Eventarc PathPattern format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pathPatternSupported")]
    public bool? PathPatternSupported { get; init; }

    /// <summary>
    /// Output only. If true, the triggers for this provider should always specify a filter on these attributes. Trigger creation will fail otherwise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("required")]
    public bool? Required { get; init; }

    /// <summary>
    /// Output only. Attribute used for filtering the event type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attribute")]
    public string? Attribute { get; init; }

    /// <summary>
    /// Output only. Description of the purpose of the attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
