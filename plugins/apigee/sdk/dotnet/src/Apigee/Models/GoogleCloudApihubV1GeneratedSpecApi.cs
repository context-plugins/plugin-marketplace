using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// An API the pipeline is tracking for spec generation.
/// </summary>
public record GoogleCloudApihubV1GeneratedSpecApi
{
    /// <summary>
    /// Output only. Human-readable display name; server-derived.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Output only. The time at which the resource was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Output only. The time at which the most recent spec was generated. Unset while <c>state == SPEC_API_REGISTERED</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastSpecGeneratedTime")]
    public string? LastSpecGeneratedTime { get; init; }

    /// <summary>
    /// Output only. The time at which the resource was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Output only. The full resource name of the associated catalog API. Format: <c>projects/{project}/locations/{location}/apis/{api}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("api")]
    public string? Api { get; init; }

    /// <summary>
    /// Output only. Where the pipeline observed this API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public GoogleCloudApihubV1GeneratedSpecApiSource2? Source { get; init; }

    /// <summary>
    /// Output only. The full resource name of the associated catalog Spec; populated only when <c>state == SPEC_ASSOCIATED</c>. Format: <c>projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spec")]
    public string? Spec { get; init; }

    /// <summary>
    /// Output only. The full resource name of the associated catalog Deployment. Format: <c>projects/{project}/locations/{location}/deployments/{deployment}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deployment")]
    public string? Deployment { get; init; }

    /// <summary>
    /// Output only. The full resource name of the associated catalog Version. Format: <c>projects/{project}/locations/{location}/apis/{api}/versions/{version}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public string? Version { get; init; }

    /// <summary>
    /// Output only. The current lifecycle state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State1ApigeeProjectsApi? State { get; init; }

    /// <summary>
    /// Identifier. The full resource name. The trailing segment is the pipeline-generated identifier. Format: <c>projects/{project}/locations/{location}/generatedSpecApis/{generated_spec_api}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
