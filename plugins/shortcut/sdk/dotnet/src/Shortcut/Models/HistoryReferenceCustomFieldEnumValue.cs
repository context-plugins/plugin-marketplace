using System;
using System.Text.Json.Serialization;
using Shortcut.Models.AnyOf;

namespace Shortcut.Models;

/// <summary>
/// A reference to a CustomField value asserted on a Story.
/// </summary>
public record HistoryReferenceCustomFieldEnumValue
{
    /// <summary>
    /// The ID of the entity referenced.
    /// </summary>
    [JsonPropertyName("id")]
    public required Id Id { get; init; }

    /// <summary>
    /// The type of entity referenced.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The custom-field enum value as a string.
    /// </summary>
    [JsonPropertyName("string_value")]
    public required string? StringValue { get; init; }

    /// <summary>
    /// Whether or not the custom-field enum value is enabled.
    /// </summary>
    [JsonPropertyName("enum_value_enabled")]
    public required bool? EnumValueEnabled { get; init; }

    /// <summary>
    /// The public-id of the parent custom-field of this enum value.
    /// </summary>
    [JsonPropertyName("field_id")]
    public required Guid FieldId { get; init; }

    /// <summary>
    /// The type variety of the parent custom-field of this enum value.
    /// </summary>
    [JsonPropertyName("field_type")]
    public required string FieldType { get; init; }

    /// <summary>
    /// The name as it is displayed to the user of the parent custom-field of this enum value.
    /// </summary>
    [JsonPropertyName("field_name")]
    public required string FieldName { get; init; }

    /// <summary>
    /// Whether or not the custom-field is enabled.
    /// </summary>
    [JsonPropertyName("field_enabled")]
    public required bool FieldEnabled { get; init; }
}
