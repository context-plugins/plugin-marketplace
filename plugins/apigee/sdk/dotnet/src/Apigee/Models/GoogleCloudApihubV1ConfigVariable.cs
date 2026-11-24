using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// ConfigVariable represents a additional configuration variable present in a PluginInstance Config or AuthConfig, based on a ConfigVariableTemplate.
/// </summary>
public record GoogleCloudApihubV1ConfigVariable
{
    /// <summary>
    /// Optional. The config variable value in case of config variable of type integer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intValue")]
    public string? IntValue { get; init; }

    /// <summary>
    /// Optional. The config variable value in case of config variable of type multi string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("multiStringValues")]
    public GoogleCloudApihubV1MultiStringValues2? MultiStringValues { get; init; }

    /// <summary>
    /// Optional. The config variable value in case of config variable of type string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stringValue")]
    public string? StringValue { get; init; }

    /// <summary>
    /// Optional. The config variable value in case of config variable of type multi select.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("multiSelectValues")]
    public GoogleCloudApihubV1MultiSelectValues2? MultiSelectValues { get; init; }

    /// <summary>
    /// Optional. The config variable value in case of config variable of type boolean.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("boolValue")]
    public bool? BoolValue { get; init; }

    /// <summary>
    /// Optional. The config variable value in case of config variable of type secret.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secretValue")]
    public GoogleCloudApihubV1Secret5? SecretValue { get; init; }

    /// <summary>
    /// Optional. The config variable value in case of config variable of type multi integer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("multiIntValues")]
    public GoogleCloudApihubV1MultiIntValues2? MultiIntValues { get; init; }

    /// <summary>
    /// Output only. Key will be the id to uniquely identify the config variable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    public string? Key { get; init; }

    /// <summary>
    /// Optional. The config variable value in case of config variable of type enum.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enumValue")]
    public GoogleCloudApihubV1ConfigValueOption1? EnumValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
