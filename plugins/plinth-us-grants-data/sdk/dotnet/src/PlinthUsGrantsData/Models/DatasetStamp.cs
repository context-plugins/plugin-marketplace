using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Models;

/// <summary>
/// Provenance of the slice that answered. <c>version</c> is the sync signal — poll it, re-pull when it moves.
/// </summary>
public record DatasetStamp
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public Source? Source { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refresh")]
    public Refresh? Refresh { get; init; }

    /// <summary>
    /// How often we LOOK for a new IRS release, as distinct from how often the IRS publishes one.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("polled")]
    public Polled? Polled { get; init; }

    /// <summary>
    /// Why a figure is dated to a fiscal year rather than to today.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reporting_lag")]
    public ReportingLag? ReportingLag { get; init; }

    /// <summary>
    /// Grants PAID versus grants approved — the reconciliation that catches people comparing a total here to a funder's own published giving figure. Read it before filing a discrepancy.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("basis")]
    public Basis? Basis { get; init; }

    /// <summary>
    /// Opaque build stamp of the data slice. Changes only when the data does.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public VersionModel? Version { get; init; }

    /// <summary>
    /// ISO 8601 timestamp the slice was built.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("generated_at")]
    public GeneratedAt? GeneratedAt { get; init; }

    /// <summary>
    /// Licence the source data is published under, where it carries one. Absent for public-domain sources.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("license")]
    public License? License { get; init; }

    /// <summary>
    /// Attribution the source licence obliges you to reproduce. Present it verbatim wherever you show figures from this jurisdiction.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attribution")]
    public Attribution? Attribution { get; init; }

    /// <summary>
    /// Currency of every amount in the response, when it is not US dollars. Amounts are never converted — they are the filing's own figures.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public CurrencyVariantXduiyl? Currency { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
