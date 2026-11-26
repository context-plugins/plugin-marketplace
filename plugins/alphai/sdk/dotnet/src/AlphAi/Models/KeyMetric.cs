using System.Text.Json.Serialization;
using AlphAi.Core.Models;
using AlphAi.Models.Enums;

namespace AlphAi.Models;

public record KeyMetric
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The figure exactly as the filing printed it — this is the string that was verified against the document, so a table in millions arrives as <c>$19,345</c> and a press-release line as <c>$6.76 billion</c>. Use the three companions below to compute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public string? Value { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("basis")]
    public Basis? Basis { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prior_year")]
    public string? PriorYear { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prior_quarter")]
    public string? PriorQuarter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("yoy_change")]
    public string? YoyChange { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("qoq_change")]
    public string? QoqChange { get; init; }

    /// <summary>
    /// <c>value</c> as a number at the face scale it was printed, sign applied (<c>$(5,396)</c> → -5396). Null when <c>value</c> carries no figure. The amount in base units is <c>numeric</c> × the <c>scale</c> multiplier (thousands 1e3, millions 1e6, billions 1e9).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("numeric")]
    public double? Numeric { get; init; }

    /// <summary>
    /// ISO-style currency code (<c>USD</c>, <c>EUR</c>, <c>TWD</c>, <c>CNY</c>, …), <c>pct</c> for a percentage, <c>bp</c> for basis points, null for a plain count (shares, units, multiples).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unit")]
    public string? Unit { get; init; }

    /// <summary>
    /// The multiplier <c>numeric</c> is expressed in. Filled only when something in the filing says it: the printed value (<c>$6.76 billion</c>, <c>$60,801 (In millions)</c>), the metric name, the row's own prior figure, the same amount printed with its unit in the filing's prose, or the filing's table header when it names one scale for its tables. Per-share and percentage figures are <c>ones</c>; a per-unit metric (revenue per customer, a price per ounce) never takes a table's scale. Null means the filing did not say — treat <c>numeric</c> as unscaled at your own risk rather than assume millions. Added 2026-09-12; the rules were tightened and every stored read recomputed on 2026-10-01.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scale")]
    public Scale? Scale { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
