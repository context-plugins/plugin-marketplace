using System.Collections.Generic;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Create a custom field
/// </summary>
public record CreateCustomFieldRequestDto
{
    /// <summary>
    /// Custom field name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Custom field description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the custom field can have multiple selected values
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("multiSelect")]
    public bool? MultiSelect { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the custom field can have custom values
    /// </summary>
    [JsonPropertyName("allowCustomValues")]
    public required bool AllowCustomValues { get; init; }

    /// <summary>
    /// Minimum transaction amount where the custom field is required
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minimumAmountForRequirement")]
    public double? MinimumAmountForRequirement { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the custom field is required for all budgets. The default value is <c>false</c>.
    /// </summary>
    [JsonPropertyName("required")]
    public required bool Required { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the custom field applies to all budgets. The default value is <c>false</c>.
    /// </summary>
    [JsonPropertyName("global")]
    public required bool Global { get; init; }

    /// <summary>
    /// List of custom field values
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    public IReadOnlyList<string>? Values { get; init; }

    /// <summary>
    /// List of budgets where the custom field is available. Set the budget ID or UUID values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("selectedBudgetIds")]
    public IReadOnlyList<string>? SelectedBudgetIds { get; init; }

    /// <summary>
    /// List of budgets where the custom field is required. Set the budget ID or UUID values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requiredBudgetIds")]
    public IReadOnlyList<string>? RequiredBudgetIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
