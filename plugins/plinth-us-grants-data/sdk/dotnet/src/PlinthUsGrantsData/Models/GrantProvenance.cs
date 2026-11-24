using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Models;

/// <summary>
/// <c>match_prob</c> IS NOW POPULATED ON EVERY RESOLVED ROW, and <c>ein_source</c> says what it means.
/// <para>
/// This previously read "match_prob is null on every row", because it was only ever written on the
/// <c>grant_line</c> tier, which is empty in the published slice. It is now written across the universe:
/// every row with a recipient EIN carries a probability, and every row without one carries null.
/// </para>
/// <para>
/// <c>ein_source</c> remains the field to filter on when you want a specific provenance rather than a
/// threshold — <c>ein_source = 'filed'</c> is the filer-stated subset.
/// </para>
/// <para>
/// WHERE THE NUMBER COMES FROM. Rows resolved by a RULE carry that rule's measured held-out
/// precision — a per-rule estimate applied to its rows, not a posterior. Rows resolved by the
/// MODEL (<c>ein_source='model'</c>) carry a genuine per-row calibrated probability, isotonic-fitted on a
/// held-out validation split and measured to track observed rates within a few tenths of a point.
/// </para>
/// <para>
/// An earlier version of this docstring said a calibrated posterior "needs Splink, which is not
/// wired". That is no longer true: pipeline/match_model.py fits a gradient-boosted matcher on the
/// residual the rules decline, using filer-stated EINs as free ground truth.
/// </para>
/// <para>
/// THE CAVEAT THAT TRAVELS WITH IT. Those labels come from 990/990-EZ Schedule I filers, whose
/// recipients skew larger and better-registered than the 990-PF names the resolver mostly works on,
/// so the figures are an optimistic estimate of deployed precision. An off-corpus 990-PF grantee
/// list scored 0.9876 on the same rules, so the gap is not large — but it is one funder.
/// </para>
/// </summary>
public record GrantProvenance
{
    /// <summary>
    /// P(this recipient EIN is correct), on every resolved row. The GRANULARITY differs and <c>ein_source</c> says which: rows resolved by the model carry a per-row calibrated posterior (isotonic-fitted on held-out validation); rows resolved by a rule carry that rule's measured held-out precision — a per-rule estimate, not a posterior. Null means the row is unresolved, or its provenance predates the field. Filter on it and you keep the rule-resolved majority as well as the model's rows. ⚠️ THE MODEL'S VALUES TOP OUT BELOW 1. Isotonic calibration can only emit values it observed on validation, so model rows span roughly 0.95-0.965 and NOTHING carries a model probability above ~0.965. A filter of <c>match_prob &gt; 0.97</c> therefore returns zero model rows while still returning <c>filed</c> (0.995) and <c>name</c> (0.970) — it reads as a confidence threshold and acts as a provenance filter. Use <c>ein_source</c> if that is what you meant.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("match_prob")]
    public MatchProb? MatchProb { get; init; }

    /// <summary>
    /// Which extraction tier produced the row: <c>universe</c> (lean, from the filing index) or <c>matched</c> (rich, with a confidence). <b>Currently <c>universe</c> on every row.</b>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source_tier")]
    public SourceTier? SourceTier { get; init; }

    /// <summary>
    /// How the recipient EIN was arrived at, with the measured precision each carries in <c>match_prob</c>. Ordered strongest first; the resolver applies them in this order and a later rule only ever sees what the earlier ones declined. <c>filed</c> (0.995) the filer stated it on the return. <c>override_human</c> (0.99) an adjudicated correction. <c>override_keyerror</c> (0.98) a filer-stated EIN that exists in no register and is one identifiable keying slip from the EIN of the organisation the name resolves to — a correction of the filer, not of us. <c>name</c> (0.970) exact normalised name, unique within state. <c>registry-dominant</c> (0.970) an ambiguous alias where one EIN holds &gt;=90% of the distinct funders who file that name. <c>fuzzy</c> (0.961) one edit from a registered name, with the ZIP agreeing. <c>override_llm</c> (0.95) an LLM adjudication of an ambiguous string. <c>registry</c> (0.944) the Schedule I alias registry, gated at 2+ distinct funders. <c>address</c> (0.944) address-as-key with a 2-edit name gate. <c>zip</c> (0.934) same name, disambiguated by recipient ZIP. <c>street</c> (0.834) same name, disambiguated by street — the weakest rule; exclude it if precision matters more than reach. <c>model</c> a per-row calibrated posterior, see <c>match_prob</c>. <c>null</c>: no recipient EIN, or provenance predating this field. Filter to <c>filed</c> for anything load-bearing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ein_source")]
    public EinSource? EinSource { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
