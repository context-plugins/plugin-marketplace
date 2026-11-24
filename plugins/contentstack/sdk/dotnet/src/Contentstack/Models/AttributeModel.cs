using System;
using System.Text.Json.Serialization;
using Contentstack.Core.Models;
using Contentstack.Models.Enums;

namespace Contentstack.Models;

/// <summary>
/// A user attribute definition used in audience segment rules.
/// </summary>
public record AttributeModel
{
    /// <summary>
    /// Unique identifier of the attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// Display name of the attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Machine-readable key used to reference this attribute in rules and SDKs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    public string? Key { get; init; }

    /// <summary>
    /// Data type of the attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data_type")]
    public DataTypeEnum? DataType { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when the attribute was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
