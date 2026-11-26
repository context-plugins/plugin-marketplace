using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Update a custom field (Description added)
/// </summary>
public record UpdateCustomFieldRequestDto
{
    /// <summary>
    /// Minimum transaction amount where the custom field is required
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minimumAmountForRequirement")]
    public double? MinimumAmountForRequirement { get; init; }

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

    /// <summary>
    /// Set as <c>true</c> if the custom field can have custom values
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowCustomValues")]
    public bool? AllowCustomValues { get; init; }

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
