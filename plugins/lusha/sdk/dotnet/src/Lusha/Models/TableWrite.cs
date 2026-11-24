using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

/// <summary>
/// Added to a Prospecting, Enrich, Signals, or Lookalike response when <c>tableId</c> is passed on the request. The primary response is unaffected even if the table write fails.
/// </summary>
public record TableWrite
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tableId")]
    public string? TableId { get; init; }

    /// <summary>
    /// Number of new entities added to the table by this call.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("added")]
    public int? Added { get; init; }

    /// <summary>
    /// Number of entities from this call that were already in the table.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alreadyPresent")]
    public int? AlreadyPresent { get; init; }

    /// <summary>
    /// Number of columns auto-created by this call (e.g. a Signals column created on first use).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("columnsCreated")]
    public int? ColumnsCreated { get; init; }

    /// <summary>
    /// Number of rows the column-run touched as part of this call.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rowsProcessed")]
    public int? RowsProcessed { get; init; }

    /// <summary>
    /// Number of those rows that incurred a credit charge.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rowsCharged")]
    public int? RowsCharged { get; init; }

    /// <summary>
    /// Number of those rows that were already paid for in this table and were not re-charged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rowsAlreadyPaidInTable")]
    public int? RowsAlreadyPaidInTable { get; init; }

    /// <summary>
    /// Credits charged specifically for this table write.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditsCharged")]
    public int? CreditsCharged { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
