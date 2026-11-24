using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Request body for creating or updating a budget.
/// </summary>
public record BudgetCreateUpdateRequest
{
    /// <summary>
    /// List of up to three thresholds defined as a percentage of the amount.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alerts")]
    public IReadOnlyList<BudgetCreateUpdateAlert>? Alerts { get; init; }

    /// <summary>
    /// Budget period amount
    /// required: true(if usePrevSpend is false)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public double? Amount { get; init; }

    /// <summary>
    /// List of seasonal amounts for recurring budgets with different amounts per period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seasonalAmounts")]
    public IReadOnlyList<double>? SeasonalAmounts { get; init; }

    /// <summary>
    /// List of permitted users to view/edit the report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("collaborators")]
    public IReadOnlyList<Collaborator>? Collaborators { get; init; }

    /// <summary>
    /// Currency code for monetary values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public Currency? Currency { get; init; }

    /// <summary>
    /// Budget description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; } = "";

    /// <summary>
    /// Fixed budget end date
    /// required: true(if budget type is fixed)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endPeriod")]
    public long? EndPeriod { get; init; }

    /// <summary>
    /// Periodical growth percentage in recurring budget
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("growthPerPeriod")]
    public double? GrowthPerPeriod { get; init; } = 0d;

    /// <summary>
    /// Budget metric
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metric")]
    public Metric? Metric { get; init; } = Metric.Cost;

    /// <summary>
    /// Budget Name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("public")]
    public Public1? Public { get; init; }

    /// <summary>
    /// List of emails to notify when reaching alert threshold.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipients")]
    public IReadOnlyList<string>? Recipients { get; init; }

    /// <summary>
    /// List of Slack channels to notify when reaching alert threshold.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipientsSlackChannels")]
    public IReadOnlyList<SlackChannel>? RecipientsSlackChannels { get; init; }

    /// <summary>
    /// The filters selected define the scope of the budget.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scopes")]
    public IReadOnlyList<ExternalConfigFilter>? Scopes { get; init; }

    /// <summary>
    /// Budget start Date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startPeriod")]
    public long? StartPeriod { get; init; }

    /// <summary>
    /// Recurring budget interval can be one of: ["day", "week", "month", "quarter", "year"]
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeInterval")]
    public string? TimeInterval { get; init; }

    /// <summary>
    /// budget type can be one of: ["fixed", "recurring"]
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// Use the last period's spend as the target amount for recurring budgets
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usePrevSpend")]
    public bool? UsePrevSpend { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
