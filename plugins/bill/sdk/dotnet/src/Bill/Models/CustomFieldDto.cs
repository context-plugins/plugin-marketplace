using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Transaction custom field response.
/// </summary>
public record CustomFieldDto
{
    /// <summary>
    /// BILL-generated ID of the custom field
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// BILL-generated UUID of the custom field
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uuid")]
    public string? Uuid { get; init; }

    /// <summary>
    /// Custom field name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Custom field note
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    public string? Note { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the custom field is required
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isRequired")]
    public bool? IsRequired { get; init; }

    /// <summary>
    /// List of selected values for this custom field.
    /// <para>
    /// <b>NOTE</b>: In the response, you get up to 20 selected values for a custom field. Use <c>GET /v3/spend/custom-fields/{customFieldId}/values</c> to get the complete list of selected values.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("selectedValues")]
    public IReadOnlyList<CustomFieldValueDto>? SelectedValues { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
