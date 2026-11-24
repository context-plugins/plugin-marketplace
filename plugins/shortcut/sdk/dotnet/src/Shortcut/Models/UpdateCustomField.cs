using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record UpdateCustomField
{
    /// <summary>
    /// Indicates whether the Field is enabled for the Workspace. Only enabled fields can be applied to Stories.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    /// <summary>
    /// A collection of objects representing reporting periods for years.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [StringLength(63, MinimumLength = 1)]
    public string? Name { get; init; }

    /// <summary>
    /// A collection of EnumValue objects representing the values in the domain of some Custom Field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    public IReadOnlyList<UpdateCustomFieldEnumValue>? Values { get; init; }

    /// <summary>
    /// A frontend-controlled string that represents the icon for this custom field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("icon_set_identifier")]
    [StringLength(63, MinimumLength = 1)]
    public string? IconSetIdentifier { get; init; }

    /// <summary>
    /// A description of the purpose of this field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The ID of the CustomField we want to move this CustomField before.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("before_id")]
    public Guid? BeforeId { get; init; }

    /// <summary>
    /// The ID of the CustomField we want to move this CustomField after.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("after_id")]
    public Guid? AfterId { get; init; }
}
