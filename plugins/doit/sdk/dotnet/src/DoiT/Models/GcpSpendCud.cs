using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// GCP spend-based Committed Use Discount. Mirrors the stored provider document verbatim
/// (raw values, e.g. <c>state</c> "Active", <c>term</c> "P1Y", <c>commitmentAmount</c> as a plain double).
/// </summary>
public record GcpSpendCud
{
    /// <summary>
    /// Hourly commitment amount.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commitmentAmount")]
    public double? CommitmentAmount { get; init; }

    /// <summary>
    /// Unit for <c>commitmentAmount</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commitmentUnit")]
    public string? CommitmentUnit { get; init; }

    /// <summary>
    /// Provider-assigned ID of the pricing model this CUD's discount is applied through.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consumptionModelId")]
    public string? ConsumptionModelId { get; init; }

    /// <summary>
    /// CUD ID (provider-assigned).
    /// </summary>
    [JsonPropertyName("cudId")]
    public required string CudId { get; init; }

    /// <summary>
    /// Provider-assigned ID of the product family (<c>cudProductName</c>) this CUD applies to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cudProductId")]
    public string? CudProductId { get; init; }

    /// <summary>
    /// Product family name (e.g. <c>Compute Flexible</c>, <c>Cloud Run</c>, <c>BigQuery</c>).
    /// </summary>
    [JsonPropertyName("cudProductName")]
    public required string CudProductName { get; init; }

    /// <summary>
    /// Raw provider CUD type label.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cudProductType")]
    public string? CudProductType { get; init; }

    /// <summary>
    /// When the CUD term ends. Null when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public DateTimeOffset? EndTime { get; init; }

    /// <summary>
    /// Provider resource path this CUD's discount is scoped to (typically the billing account).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entitlementScope")]
    public string? EntitlementScope { get; init; }

    /// <summary>
    /// Timestamp of the BigQuery CUD export row this item was read from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exportDate")]
    public DateTimeOffset? ExportDate { get; init; }

    /// <summary>
    /// Realized savings in the last full calendar month.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastMonthSavings")]
    public double? LastMonthSavings { get; init; }

    /// <summary>
    /// Utilization in the last full calendar month, as a fraction from 0 to 1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastMonthUtilization")]
    public double? LastMonthUtilization { get; init; }

    /// <summary>
    /// Provider commitment display name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Region in raw provider form (<c>us-central1</c>), or <c>global</c> for cross-region spend CUDs. Not the <c>lower_snake_case</c> wire form used by the <c>region</c> query parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region")]
    public string? Region { get; init; }

    /// <summary>
    /// When the CUD term started. Null when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// Raw provider commitment state.
    /// </summary>
    [JsonPropertyName("state")]
    public required string State { get; init; }

    /// <summary>
    /// Normalized coverage sub-type token (<c>UPPER_SNAKE</c>) identifying the product family within the product line.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subType")]
    public string? SubType { get; init; }

    /// <summary>
    /// Raw provider commitment term (ISO-8601 duration).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("term")]
    public string? Term { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
