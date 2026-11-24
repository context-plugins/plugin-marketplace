using System.Collections.Generic;
using System.Text.Json.Serialization;
using Asana.Core.Models;
using Asana.Models.Enums;

namespace Asana.Models;

public record CustomFieldResponse
{
    /// <summary>
    /// Globally unique identifier of the resource, as a string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gid")]
    public string? Gid { get; init; }

    /// <summary>
    /// The base type of this resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource_type")]
    public string? ResourceType { get; init; }

    /// <summary>
    /// The name of the custom field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The type of the custom field. Must be one of the given values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource_subtype")]
    public ResourceSubtypeAsanaCustomFieldSettingsApi? ResourceSubtype { get; init; }

    /// <summary>
    /// *Deprecated: new integrations should prefer the resource_subtype field.* The type of the custom field. Must be one of the given values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeEnum? Type { get; init; }

    /// <summary>
    /// *Conditional*. Only relevant for custom fields of type <c>enum</c>. This array specifies the possible values which an <c>enum</c> custom field can adopt. To modify the enum options, refer to <see href="/docs/create-an-enum-option">working with enum options</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enum_options")]
    public IReadOnlyList<EnumOption>? EnumOptions { get; init; }

    /// <summary>
    /// *Conditional*. Determines if the custom field is enabled or not.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    /// <summary>
    /// *Conditional*. Only relevant for custom fields of type <c>date</c>. This object reflects the chosen date (and optionally, time) value of a <c>date</c> custom field. If no date is selected, the value of <c>date_value</c> will be <c>null</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("date_value")]
    public DateValue? DateValue { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enum_value")]
    public EnumOption? EnumValue { get; init; }

    /// <summary>
    /// *Conditional*. Only relevant for custom fields of type <c>multi_enum</c>. This object is the chosen values of a <c>multi_enum</c> custom field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("multi_enum_values")]
    public IReadOnlyList<EnumOption>? MultiEnumValues { get; init; }

    /// <summary>
    /// *Conditional*. This number is the value of a <c>number</c> custom field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("number_value")]
    public double? NumberValue { get; init; }

    /// <summary>
    /// *Conditional*. This string is the value of a <c>text</c> custom field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text_value")]
    public string? TextValue { get; init; }

    /// <summary>
    /// A string representation for the value of the custom field. Integrations that don't require the underlying type should use this field to read values. Using this field will future-proof an app against new custom field types.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("display_value")]
    public string? DisplayValue { get; init; }

    /// <summary>
    /// <see href="/docs/input-output-options">Opt In</see>. The description of the custom field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Only relevant for custom fields of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive.
    /// For percentage format, this may be unintuitive, as a value of 0.25 has a precision of 0, while a value of 0.251 has a precision of 1. This is due to 0.25 being displayed as 25%.
    /// The identifier format will always have a precision of 0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("precision")]
    public int? Precision { get; init; }

    /// <summary>
    /// The format of this custom field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("format")]
    public Format? Format { get; init; }

    /// <summary>
    /// ISO 4217 currency code to format this custom field. This will be null if the <c>format</c> is not <c>currency</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency_code")]
    public string? CurrencyCode { get; init; }

    /// <summary>
    /// This is the string that appears next to the custom field value. This will be null if the <c>format</c> is not <c>custom</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_label")]
    public string? CustomLabel { get; init; }

    /// <summary>
    /// Only relevant for custom fields with <c>custom</c> format. This depicts where to place the custom label. This will be null if the <c>format</c> is not <c>custom</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_label_position")]
    public CustomLabelPosition? CustomLabelPosition { get; init; }

    /// <summary>
    /// This flag describes whether this custom field is available to every container in the workspace. Before project-specific custom fields, this field was always true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_global_to_workspace")]
    public bool? IsGlobalToWorkspace { get; init; }

    /// <summary>
    /// *Conditional*. This flag describes whether a follower of a task with this field should receive inbox notifications from changes to this field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("has_notifications_enabled")]
    public bool? HasNotificationsEnabled { get; init; }

    /// <summary>
    /// *Conditional*. A unique identifier to associate this field with the template source of truth.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("asana_created_field")]
    public AsanaCreatedField? AsanaCreatedField { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_by")]
    public UserCompact? CreatedBy { get; init; }

    /// <summary>
    /// *Conditional*. Only relevant for custom fields of type <c>people</c>. This array of <see href="/docs/user-compact">compact user</see> objects reflects the values of a <c>people</c> custom field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("people_value")]
    public IReadOnlyList<UserCompact>? PeopleValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
