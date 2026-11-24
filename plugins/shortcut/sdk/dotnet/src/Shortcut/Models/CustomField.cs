using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record CustomField
{
    /// <summary>
    /// A string description of the CustomField
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [StringLength(512, MinimumLength = 1)]
    public string? Description { get; init; }

    /// <summary>
    /// A string that represents the icon that corresponds to this custom field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("icon_set_identifier")]
    [StringLength(63, MinimumLength = 1)]
    public string? IconSetIdentifier { get; init; }

    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public string EntityType { get; } = "custom-field";

    /// <summary>
    /// The types of stories this CustomField is scoped to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("story_types")]
    public IReadOnlyList<string>? StoryTypes { get; init; }

    /// <summary>
    /// The name of the Custom Field.
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(63, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// When true, the CustomFieldEnumValues may not be reordered.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fixed_position")]
    public bool? FixedPosition { get; init; }

    /// <summary>
    /// The instant when this CustomField was last updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The unique public ID for the CustomField.
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// A collection of legal values for a CustomField.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    public IReadOnlyList<CustomFieldEnumValue>? Values { get; init; }

    /// <summary>
    /// The type of Custom Field, eg. 'enum'.
    /// </summary>
    [JsonPropertyName("field_type")]
    public string FieldType { get; } = "enum";

    /// <summary>
    /// An integer indicating the position of this Custom Field with respect to the other CustomField
    /// </summary>
    [JsonPropertyName("position")]
    public required long Position { get; init; }

    /// <summary>
    /// The canonical name for a Shortcut-defined field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("canonical_name")]
    public string? CanonicalName { get; init; }

    /// <summary>
    /// When true, the CustomField can be applied to entities in the Workspace.
    /// </summary>
    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    /// <summary>
    /// The instant when this CustomField was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }
}
