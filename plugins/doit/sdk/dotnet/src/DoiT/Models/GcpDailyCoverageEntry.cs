using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// One day of CUD coverage breakdown. Money fields are wrapped objects (<c>{amount, currency}</c>). Which cost properties are present depends on the product line of the enclosing entry — <c>compute</c> rows carry every property except <c>cloudSql</c>; <c>cloud_sql</c> rows carry only <c>cloudSql</c> and <c>onDemand</c>. A property that belongs to the product line is present even when the amount is <c>0.00</c>.
/// </summary>
public record GcpDailyCoverageEntry
{
    /// <summary>
    /// Calendar day (UTC) for this coverage row in format YYYY-MM-DD.
    /// </summary>
    [JsonPropertyName("date")]
    public required DateTimeOffset Date { get; init; }

    /// <summary>
    /// Spend covered by Compute Flexible CUDs for the day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("computeFlexible")]
    public Money? ComputeFlexible { get; init; }

    /// <summary>
    /// Spend covered by Cloud Run CUDs for the day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cloudRun")]
    public Money? CloudRun { get; init; }

    /// <summary>
    /// Spend covered by BigQuery CUDs for the day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bigQuery")]
    public Money? BigQuery { get; init; }

    /// <summary>
    /// Spend covered by Bigtable CUDs for the day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bigtable")]
    public Money? Bigtable { get; init; }

    /// <summary>
    /// Spend covered by Cloud SQL CUDs for the day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cloudSql")]
    public Money? CloudSql { get; init; }

    /// <summary>
    /// Spend covered by Cloud Firestore CUDs for the day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cloudFirestore")]
    public Money? CloudFirestore { get; init; }

    /// <summary>
    /// Spend covered by Cloud Spanner CUDs for the day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cloudSpanner")]
    public Money? CloudSpanner { get; init; }

    /// <summary>
    /// Spend covered by Memorystore for Redis CUDs for the day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("memorystoreForRedis")]
    public Money? MemorystoreForRedis { get; init; }

    /// <summary>
    /// Spend covered by AlloyDB CUDs for the day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alloyDb")]
    public Money? AlloyDb { get; init; }

    /// <summary>
    /// Spend covered by Google Cloud Backup and DR for Oracle CUDs for the day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("backupForOracle")]
    public Money? BackupForOracle { get; init; }

    /// <summary>
    /// Spend covered by Kafka CUDs for the day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kafka")]
    public Money? Kafka { get; init; }

    /// <summary>
    /// Spend covered by resource-based (vCPU / memory) CUDs for the day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceBased")]
    public Money? ResourceBased { get; init; }

    /// <summary>
    /// On-demand spend not covered by any CUD for the day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("onDemand")]
    public Money? OnDemand { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
