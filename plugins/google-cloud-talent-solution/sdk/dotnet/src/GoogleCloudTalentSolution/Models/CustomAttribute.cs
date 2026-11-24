using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// Custom attribute values that are either filterable or non-filterable.
/// </summary>
public record CustomAttribute
{
    /// <summary>
    /// Exactly one of string_values or long_values must be specified. This field is used to perform number range search. (<c>EQ</c>, <c>GT</c>, <c>GE</c>, <c>LE</c>, <c>LT</c>) over filterable <c>long_value</c>. Currently at most 1 long_values is supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("longValues")]
    public IReadOnlyList<string>? LongValues { get; init; }

    /// <summary>
    /// Exactly one of string_values or long_values must be specified. This field is used to perform a string match (<c>CASE_SENSITIVE_MATCH</c> or <c>CASE_INSENSITIVE_MATCH</c>) search. For filterable <c>string_value</c>s, a maximum total number of 200 values is allowed, with each <c>string_value</c> has a byte size of no more than 500B. For unfilterable <c>string_values</c>, the maximum total byte size of unfilterable <c>string_values</c> is 50KB. Empty string isn't allowed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stringValues")]
    public IReadOnlyList<string>? StringValues { get; init; }

    /// <summary>
    /// If the <c>filterable</c> flag is true, the custom field values may be used for custom attribute filters JobQuery.custom_attribute_filter. If false, these values may not be used for custom attribute filters. Default is false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filterable")]
    public bool? Filterable { get; init; }

    /// <summary>
    /// If the <c>keyword_searchable</c> flag is true, the keywords in custom fields are searchable by keyword match. If false, the values are not searchable by keyword match. Default is false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keywordSearchable")]
    public bool? KeywordSearchable { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
