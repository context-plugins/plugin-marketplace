using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// ConfigVariableTemplate represents a configuration variable template present in a Plugin Config.
/// </summary>
public record GoogleCloudApihubV1ConfigVariableTemplate
{
    /// <summary>
    /// Optional. Flag represents that this <c>ConfigVariable</c> must be provided for a PluginInstance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("required")]
    public bool? Required { get; init; }

    /// <summary>
    /// Optional. Description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Optional. Enum options. To be populated if <c>ValueType</c> is <c>ENUM</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enumOptions")]
    public IReadOnlyList<GoogleCloudApihubV1ConfigValueOption>? EnumOptions { get; init; }

    /// <summary>
    /// Required. ID of the config variable. Must be unique within the configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Optional. Multi select options. To be populated if <c>ValueType</c> is <c>MULTI_SELECT</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("multiSelectOptions")]
    public IReadOnlyList<GoogleCloudApihubV1ConfigValueOption>? MultiSelectOptions { get; init; }

    /// <summary>
    /// Optional. Regular expression in RE2 syntax used for validating the <c>value</c> of a <c>ConfigVariable</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validationRegex")]
    public string? ValidationRegex { get; init; }

    /// <summary>
    /// Required. Type of the parameter: string, int, bool etc.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("valueType")]
    public ValueTypeEnum? ValueType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
