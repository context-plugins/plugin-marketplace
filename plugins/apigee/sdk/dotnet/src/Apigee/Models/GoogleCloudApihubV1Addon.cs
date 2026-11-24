using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Addon resource.
/// </summary>
public record GoogleCloudApihubV1Addon
{
    /// <summary>
    /// Output only. The time at which the addon was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Required. The display name of the addon.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Output only. The time at which the addon was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Optional. The description of the addon.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Output only. The state of the addon.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State2ApigeeProjectsApi? State { get; init; }

    /// <summary>
    /// Identifier. The name of the addon to enable. Format: <c>projects/{project}/locations/{location}/addons/{addon}</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Required. The data source on which the addon operates. This determines which field in the <c>config</c> oneof is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataSource")]
    public DataSource? DataSource { get; init; }

    /// <summary>
    /// Required. The configuration of the addon.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("config")]
    public GoogleCloudApihubV1AddonConfig1? Config { get; init; }

    /// <summary>
    /// Output only. The Vertex AI region where the BoostSpec Gemini model calls run for this API Hub instance. Populated only for the SpecGen addon (<c>system-spec-generation</c>); other addons leave this field empty. <c>gemini-2.5-flash</c> is not available in every API Hub region, so the effective region may differ from the API Hub instance's own region. The value follows these semantics: - <c>""</c>: BoostSpec is disabled in this region (the addon is not SpecGen, or the API Hub instance region has no configured Gemini endpoint or fallback). - Equal to the API Hub instance region: BoostSpec calls run in-region. - Differs from the API Hub instance region: BoostSpec calls run in the specified fallback region. Callers rendering this field can derive the three display states from this single field combined with the API Hub instance region.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("boostSpecGeminiRegionId")]
    public string? BoostSpecGeminiRegionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
