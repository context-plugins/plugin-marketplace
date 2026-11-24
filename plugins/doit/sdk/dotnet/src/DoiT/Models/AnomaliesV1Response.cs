using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record AnomaliesV1Response
{
    /// <summary>
    /// Deprecated: use 'allocations' instead. Name of the anomaly's primary allocation. Can be empty even when <c>allocations</c> is not, so it may differ from the first entry of <c>allocations</c>.
    /// </summary>
    [JsonPropertyName("attribution")]
    public required string Attribution { get; init; }

    /// <summary>
    /// Every allocation the anomaly belongs to, primary allocation first. Allocations that no longer exist are left out. Anomalies with a single allocation return a one-item list. Some older anomalies have no allocation recorded and return an empty list.
    /// </summary>
    [JsonPropertyName("allocations")]
    public required IReadOnlyList<AllocationDoiTAnomaliesApi> Allocations { get; init; }

    /// <summary>
    /// Billing account ID
    /// </summary>
    [JsonPropertyName("billingAccount")]
    public required string BillingAccount { get; init; }

    /// <summary>
    /// The difference between the actual cost and the maximum cost in the normal range.
    /// </summary>
    [JsonPropertyName("costOfAnomaly")]
    public required double CostOfAnomaly { get; init; }

    /// <summary>
    /// Observed (actual) cost of the anomaly.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actualCost")]
    public double? ActualCost { get; init; }

    /// <summary>
    /// Maximum cost within the expected normal range.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expectedMaxCost")]
    public double? ExpectedMaxCost { get; init; }

    /// <summary>
    /// Cloud Provider name
    /// </summary>
    [JsonPropertyName("platform")]
    public required string Platform { get; init; }

    /// <summary>
    /// The anomaly's project or account identifier as reported by the provider. For providers whose billing grain is not a cloud project — a user or an organization, for example — this is that identifier, so treat it as an opaque id and use <c>entityLabel</c>/<c>entityName</c> for presentation.
    /// </summary>
    [JsonPropertyName("scope")]
    public required string Scope { get; init; }

    /// <summary>
    /// Connector-declared name for what <c>scope</c> identifies, for example "Project", "Account" or "User". Absent when the provider publishes no display profile.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entityLabel")]
    public string? EntityLabel { get; init; }

    /// <summary>
    /// Human-readable value for <c>scope</c> when the provider publishes one — for example a user's email address where <c>scope</c> is an opaque user id. Absent when unavailable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entityName")]
    public string? EntityName { get; init; }

    /// <summary>
    /// Connector-declared display name for the provider, for example "Anthropic (Analytics API)". Absent when the provider publishes no display profile.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("providerDisplayName")]
    public string? ProviderDisplayName { get; init; }

    /// <summary>
    /// Service name
    /// </summary>
    [JsonPropertyName("serviceName")]
    public required string ServiceName { get; init; }

    /// <summary>
    /// Severity level: <c>information</c>, <c>warning</c>, or <c>critical</c>.
    /// </summary>
    [JsonPropertyName("severityLevel")]
    public required string SeverityLevel { get; init; }

    /// <summary>
    /// Usage start time of the anomaly
    /// </summary>
    [JsonPropertyName("startTime")]
    public required long StartTime { get; init; }

    /// <summary>
    /// End of the anomaly
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public int? EndTime { get; init; }

    /// <summary>
    /// Why the anomaly stopped being active. <c>reverted</c> means the cost returned inside the expected normal range; <c>expired</c> means the anomaly was deactivated without the cost returning inside that range; <c>unknown</c> means the reason could not be determined. Null while the anomaly is still active.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deactivationReason")]
    public DeactivationReason? DeactivationReason { get; init; }

    /// <summary>
    /// Timeframe: Daily or Hourly
    /// </summary>
    [JsonPropertyName("timeFrame")]
    public required string TimeFrame { get; init; }

    /// <summary>
    /// Array of SKU entries contributing to an anomaly.
    /// </summary>
    [JsonPropertyName("top3SKUs")]
    public required IReadOnlyList<AnomalySku> Top3SkUs { get; init; }

    /// <summary>
    /// Whether the anomaly was detected on a single SKU (<c>sku</c>) or at the level of a whole service (<c>service</c>).
    /// </summary>
    [JsonPropertyName("monitorLevel")]
    public required MonitorLevel MonitorLevel { get; init; }

    /// <summary>
    /// Array of resources contributing to an anomaly.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceData")]
    public IReadOnlyList<AnomalyResource>? ResourceData { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status? Status { get; init; }

    /// <summary>
    /// Has the anomaly been acknowledged
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("acknowledged")]
    public bool? Acknowledged { get; init; }

    /// <summary>
    /// When the anomaly was first acknowledged
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("acknowledgedAt")]
    public DateTimeOffset? AcknowledgedAt { get; init; }

    /// <summary>
    /// Email of the user who first acknowledged the anomaly
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("acknowledgedBy")]
    public string? AcknowledgedBy { get; init; }

    /// <summary>
    /// Current review status of the anomaly, as set in the console or through <c>patchAnomaly</c>. Always present; an anomaly nobody has reviewed yet reports <c>NEEDS_REVIEW</c>.
    /// </summary>
    [JsonPropertyName("customerFeedback")]
    public required AnomalyCustomerFeedback CustomerFeedback { get; init; }

    /// <summary>
    /// Chronologically ordered notification dispatch events.
    /// </summary>
    [JsonPropertyName("notifications")]
    public required IReadOnlyList<NotificationEvent> Notifications { get; init; }

    /// <summary>
    /// The first notification sent on each channel (email, Slack, Microsoft Teams) for this anomaly, without reminders, ordered by timestamp. Always present; empty when the anomaly has not been notified.
    /// </summary>
    [JsonPropertyName("initialNotifications")]
    public required IReadOnlyList<NotificationEvent> InitialNotifications { get; init; }

    /// <summary>
    /// IDs of the other related anomalies in the same service around same time. Always the complete group: the filters, time window, and pagination of the request that returned this anomaly do not narrow it, so an ID here may not appear among the anomalies of that same response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedAnomalies")]
    public IReadOnlyList<string>? LinkedAnomalies { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
