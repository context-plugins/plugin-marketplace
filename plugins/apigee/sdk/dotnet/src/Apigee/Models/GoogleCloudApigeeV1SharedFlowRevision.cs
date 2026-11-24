using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The metadata describing a shared flow revision.
/// </summary>
public record GoogleCloudApigeeV1SharedFlowRevision
{
    /// <summary>
    /// The resource files included in this shared flow revision.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceFiles")]
    public GoogleCloudApigeeV1ResourceFiles2? ResourceFiles { get; init; }

    /// <summary>
    /// The resource ID of the parent shared flow.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The version of the configuration schema to which this shared flow conforms. The only supported value currently is majorVersion 4 and minorVersion 0. This setting may be used in the future to enable evolution of the shared flow format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("configurationVersion")]
    public GoogleCloudApigeeV1ConfigVersion2? ConfigurationVersion { get; init; }

    /// <summary>
    /// A Key-Value map of metadata about this shared flow revision.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entityMetaDataAsProperties")]
    public IReadOnlyDictionary<string, string>? EntityMetaDataAsProperties { get; init; }

    /// <summary>
    /// Description of the shared flow revision.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// A list of the resources included in this shared flow revision formatted as "{type}://{name}".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resources")]
    public IReadOnlyList<string>? Resources { get; init; }

    /// <summary>
    /// The resource ID of this revision.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revision")]
    public string? Revision { get; init; }

    /// <summary>
    /// The string "Application"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// A textual description of the shared flow revision.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contextInfo")]
    public string? ContextInfo { get; init; }

    /// <summary>
    /// A list of the shared flow names included in this shared flow revision.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sharedFlows")]
    public IReadOnlyList<string>? SharedFlows { get; init; }

    /// <summary>
    /// The human readable name of this shared flow.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Time at which this shared flow revision was created, in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public string? CreatedAt { get; init; }

    /// <summary>
    /// A list of policy names included in this shared flow revision.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("policies")]
    public IReadOnlyList<string>? Policies { get; init; }

    /// <summary>
    /// Time at which this shared flow revision was most recently modified, in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModifiedAt")]
    public string? LastModifiedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
