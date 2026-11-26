using System;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// BillingPeriod response Dto.
/// </summary>
public record BillingPeriodDto
{
    /// <summary>
    /// Billing period start date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startDate")]
    public DateTimeOffset? StartDate { get; init; }

    /// <summary>
    /// Billing period end date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endDate")]
    public DateTimeOffset? EndDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
