using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// DTO representing a custom field response.
/// </summary>
public record CustomFieldResponseDto
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
    /// Custom field description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public CustomFieldType? Type { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the custom field can have multiple selected values
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("multiSelect")]
    public bool? MultiSelect { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the custom field can have custom values
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowCustomValues")]
    public bool? AllowCustomValues { get; init; }

    /// <summary>
    /// Minimum transaction amount where the custom field is required
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minimumAmountForRequirement")]
    public double? MinimumAmountForRequirement { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the custom field is required for all budgets. The default value is <c>false</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("required")]
    public bool? Required { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the custom field applies to all budgets. The default value is <c>false</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("global")]
    public bool? Global { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the custom field is retired
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retired")]
    public bool? Retired { get; init; }

    /// <summary>
    /// Created date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdTime")]
    public DateTimeOffset? CreatedTime { get; init; }

    /// <summary>
    /// List of BILL-generated ID values of budgets where the custom field is available
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("selectedBudgetIds")]
    public IReadOnlyList<string>? SelectedBudgetIds { get; init; }

    /// <summary>
    /// List of BILL-generated UUID values of budgets where the custom field is available
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("selectedBudgetUuids")]
    public IReadOnlyList<string>? SelectedBudgetUuids { get; init; }

    /// <summary>
    /// List of BILL-generated ID values of budgets where the custom field is required
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requiredBudgetIds")]
    public IReadOnlyList<string>? RequiredBudgetIds { get; init; }

    /// <summary>
    /// List of BILL-generated UUID values of budgets where the custom field is required
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requiredBudgetUuids")]
    public IReadOnlyList<string>? RequiredBudgetUuids { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
