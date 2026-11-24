using System.Collections.Generic;
using System.Text.Json.Serialization;
using Asana.Core.Models;
using Asana.Models.Enums;

namespace Asana.Models;

public record CustomFieldCompactAsanaStoriesApi
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
    public ResourceSubtype1AsanaStoriesApi? ResourceSubtype { get; init; }

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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
