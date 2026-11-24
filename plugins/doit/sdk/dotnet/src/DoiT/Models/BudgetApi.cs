using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Budget details and runtime metrics.
/// </summary>
public record BudgetApi
{
    /// <summary>
    /// List of up to three thresholds defined as a percentage of amount.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alerts")]
    public IReadOnlyList<ExternalBudgetAlert>? Alerts { get; init; }

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
    /// Creation time (in UNIX timestamp).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public long? CreateTime { get; init; }

    /// <summary>
    /// Currency code for monetary values.
    /// </summary>
    [JsonPropertyName("currency")]
    public required Currency Currency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currentUtilization")]
    public double? CurrentUtilization { get; init; }

    /// <summary>
    /// Budget description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Fixed budget end date (in UNIX timestamp)
    /// required: true(if budget type is fixed)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endPeriod")]
    public long? EndPeriod { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("forecastedUtilization")]
    public double? ForecastedUtilization { get; init; }

    /// <summary>
    /// Periodical growth percentage in recurring budgets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("growthPerPeriod")]
    public double? GrowthPerPeriod { get; init; } = 0d;

    /// <summary>
    /// budget ID, identifying the report
    /// in:path
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Budget metric - currently fixed to "cost"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metric")]
    public string? Metric { get; init; } = "cost";

    /// <summary>
    /// Budget Name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Public sharing access level for the budget.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("public")]
    public Public? Public { get; init; }

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
    [JsonPropertyName("scopes")]
    public required IReadOnlyList<ExternalConfigFilter> Scopes { get; init; }

    /// <summary>
    /// Budget start date (in UNIX timestamp).
    /// </summary>
    [JsonPropertyName("startPeriod")]
    public required long StartPeriod { get; init; }

    /// <summary>
    /// Recurring budget interval can be one of: ["day", "week", "month", "quarter" ,"year"]
    /// </summary>
    [JsonPropertyName("timeInterval")]
    public required string TimeInterval { get; init; }

    /// <summary>
    /// budget type can be one of: ["fixed", "recurring"]
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Update time (in UNIX timestamp).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public long? UpdateTime { get; init; }

    /// <summary>
    /// Use the last period's spend as the target amount for recurring budgets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usePrevSpend")]
    public bool? UsePrevSpend { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
