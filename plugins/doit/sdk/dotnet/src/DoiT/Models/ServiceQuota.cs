using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record ServiceQuota
{
    /// <summary>
    /// Cloud provider that owns the quota.
    /// </summary>
    [JsonPropertyName("cloudProvider")]
    public required CloudProviderDoiTServiceQuotasApi CloudProvider { get; init; }

    [JsonPropertyName("resource")]
    public required ServiceQuotaResource Resource { get; init; }

    /// <summary>
    /// Cloud service associated with the quota.
    /// </summary>
    [JsonPropertyName("service")]
    public required string Service { get; init; }

    /// <summary>
    /// Provider quota or metric name.
    /// </summary>
    [JsonPropertyName("quota")]
    public required string Quota { get; init; }

    /// <summary>
    /// Cloud region associated with the quota. Omitted for global quotas.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region")]
    public string? Region { get; init; }

    /// <summary>
    /// Current quota limit.
    /// </summary>
    [JsonPropertyName("limit")]
    public required double Limit { get; init; }

    /// <summary>
    /// Current measured quota usage.
    /// </summary>
    [JsonPropertyName("usage")]
    public required double Usage { get; init; }

    /// <summary>
    /// Usage divided by limit, expressed as a percentage.
    /// </summary>
    [JsonPropertyName("utilizationPercent")]
    public required double UtilizationPercent { get; init; }

    /// <summary>
    /// Normalized utilization status. Warning begins at 80 percent; exceeded begins at 100 percent.
    /// </summary>
    [JsonPropertyName("status")]
    public required StatusDoiTServiceQuotasApi Status { get; init; }

    /// <summary>
    /// Time when DoiT last updated the provider snapshot.
    /// </summary>
    [JsonPropertyName("observedAt")]
    public required DateTimeOffset ObservedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
