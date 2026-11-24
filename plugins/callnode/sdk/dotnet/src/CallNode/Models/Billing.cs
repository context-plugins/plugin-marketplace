using System;
using System.Text.Json.Serialization;
using CallNode.Core.Models;

namespace CallNode.Models;

/// <summary>
/// On the send response only - how the message was priced.
/// </summary>
public record Billing
{
    /// <summary>
    /// to + cc + bcc.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipients")]
    public int? Recipients { get; init; }

    /// <summary>
    /// How many of them fell inside the plan's included allowance this period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includedRecipients")]
    public int? IncludedRecipients { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billableRecipients")]
    public int? BillableRecipients { get; init; }

    /// <summary>
    /// The marginal rate applied.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("perRecipientUsd")]
    public double? PerRecipientUsd { get; init; }

    /// <summary>
    /// The amount charged (the quote
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimatedCostUsd")]
    public double? EstimatedCostUsd { get; init; }

    /// <summary>
    /// Included recipients left this period after this message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includedRemaining")]
    public int? IncludedRemaining { get; init; }

    /// <summary>
    /// When the volume window resets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("periodEndsAt")]
    public DateTimeOffset? PeriodEndsAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
