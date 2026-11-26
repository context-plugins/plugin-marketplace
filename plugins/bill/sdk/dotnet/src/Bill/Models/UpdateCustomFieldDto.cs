using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Set custom fields in transactions \&amp; reimbursements.
/// </summary>
public record UpdateCustomFieldDto
{
    /// <summary>
    /// BILL-generated ID or UUID of the custom field
    /// </summary>
    [JsonPropertyName("customFieldId")]
    public required string CustomFieldId { get; init; }

    /// <summary>
    /// List of selected custom field values. Set the custom field value ID or UUID values.
    /// <para>
    /// <b>Note</b>: Clear the <c>selectedValues</c> array to clear all the custom field selected values.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("selectedValues")]
    public IReadOnlyList<string>? SelectedValues { get; init; }

    /// <summary>
    /// Updated custom field note.
    /// <para>
    /// <b>Note</b>: This field is available only for custom fields with <c>type</c> set as <c>NOTE</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    public string? Note { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
