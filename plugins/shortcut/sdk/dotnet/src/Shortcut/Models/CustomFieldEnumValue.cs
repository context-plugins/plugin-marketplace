using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record CustomFieldEnumValue
{
    /// <summary>
    /// The unique public ID for the Custom Field.
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// A string value within the domain of this Custom Field.
    /// </summary>
    [JsonPropertyName("value")]
    [StringLength(63, MinimumLength = 1)]
    public required string Value { get; init; }

    /// <summary>
    /// An integer indicating the position of this Value with respect to the other CustomFieldEnumValues in the enumeration.
    /// </summary>
    [JsonPropertyName("position")]
    public required long Position { get; init; }

    /// <summary>
    /// A color key associated with this CustomFieldEnumValue.
    /// </summary>
    [JsonPropertyName("color_key")]
    public required string? ColorKey { get; init; }

    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public string EntityType { get; } = "custom-field-enum-value";

    /// <summary>
    /// When true, the CustomFieldEnumValue can be selected for the CustomField.
    /// </summary>
    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }
}
