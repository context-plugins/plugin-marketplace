using PlinthUsGrantsData.Models.AnyOf;
using PlinthUsGrantsData.Models.Enums;

namespace PlinthUsGrantsData.Requests.GrantsApi;

/// <summary>
/// The inputs of the GetApiV1GrantsFunders operation.
/// </summary>
public sealed record GetApiV1GrantsFundersRequest
{
    /// <summary>
    /// EIN of the grantmaker. Any format — hyphens and missing leading zeros are normalized. Comma-separate for several.
    /// </summary>
    public FunderId? FunderId { get; init; }

    /// <summary>
    /// EIN of the recipient organization. Same normalization as funder_id. Comma-separate for several.
    /// </summary>
    public RecipId? RecipId { get; init; }

    /// <summary>
    /// Accepted for Candid compatibility. Only <c>ein</c> is valid — Candid's proprietary organization keys mean nothing here, so any other value is a 400 pointing at /api/search rather than a silently wrong filter.
    /// </summary>
    public IdType1? IdType { get; init; }

    /// <summary>
    /// Filing fiscal year. A single year, a comma-separated list, or a <c>2019-2023</c> range.
    /// </summary>
    public YearPlinthUsDataGrantsApi? Year { get; init; }

    /// <summary>
    /// Lowest fiscal year to include (open-ended alternative to <c>year</c>).
    /// </summary>
    public MinYear? MinYear { get; init; }

    /// <summary>
    /// Highest fiscal year to include.
    /// </summary>
    public MaxYear? MaxYear { get; init; }

    /// <summary>
    /// Cause area of the RECIPIENT. Accepts an NTEE major-group letter (T), a full NTEE code (T31) or a cause label (Philanthropy); comma-separate for several. NOT a Candid PCS code — a PCS-shaped value is rejected rather than silently matching nothing. Only grants resolved to an EIN carry a classification, so this filter excludes unmatched grant lines (~33% of dollars).
    /// </summary>
    public Subject? Subject { get; init; }

    /// <summary>
    /// Place filter. <b>Whose place it is comes from <c>location_type</c>, which defaults to the RECIPIENT</b> — so on /grants/funders, <c>location=MA</c> returns funders that gave TO Massachusetts, not funders based there (which is why a Seattle foundation can appear). Set <c>location_type=funder</c> for the other reading. How the value itself is read comes from <c>geo_id_type</c> (default: two-letter US state). Comma-separate for several.
    /// </summary>
    public Location1? Location { get; init; }

    /// <summary>
    /// How <c>location</c> is interpreted: state (default) | zip | city | county_fips | country. GeoNames ids are not resolved.
    /// </summary>
    public GeoIdType1? GeoIdType { get; init; }

    /// <summary>
    /// Whose geography <c>location</c> refers to: recipient (default) | funder | area_served. <c>area_served</c> means the funder demonstrably gives there — see the response note for exactly what it covers.
    /// </summary>
    public LocationType1? LocationType { get; init; }

    /// <summary>
    /// Recipient country for cross-border giving, as the FIPS-10-4 code the 990 foreign-address block carries (IN=India, UK=United Kingdom — NOT ISO).
    /// </summary>
    public CountryVariantQgdleu? Country { get; init; }

    /// <summary>
    /// Free-text keyword search over the grant's as-filed purpose text and the recipient's name. ⚠️ Purpose coverage varies sharply between filers — many report none at all, and for those funders this is a recipient-name search only, which a caller searching for a THEME will read as a real absence. Every response says so in <c>x_plinth.warnings</c>; check <c>description</c> on the rows to see which you got. <b>Requires a narrowing filter</b> — one of year, funder_id, recip_id, location, country, subject, funder_type or an amount range. There is no text index behind this, so an unnarrowed search reads every purpose string in the corpus and times out; narrowed, it typically returns in a few seconds. Sending it alone is a 400, immediately, rather than a timeout later.
    /// </summary>
    public Query? Query { get; init; }

    /// <summary>
    /// Support strategy, derived from the filing's own purpose wording (general_operating, program, capital, endowment, scholarship, fellowship, research, capacity_building, matching, emergency_relief, equipment, sponsorship). Approximate by construction — it finds grants that SAY so.
    /// </summary>
    public Support? Support { get; init; }

    /// <summary>
    /// private_foundation | public_charity | daf_or_passthrough. Separates institutional money from donor-advised pass-through.
    /// </summary>
    public FunderType1? FunderType { get; init; }

    /// <summary>
    /// Drop structurally distorting flows, comma-separated: daf | individuals | related_party. Nothing is excluded by default — together these are 50.9% of corpus dollars, so a total that omits them and a total that keeps them are different claims and the caller has to be the one making it. On /grants/summary, <c>x_plinth.excluded</c> prices each class against your own filter.
    /// </summary>
    public Exclude? Exclude { get; init; }

    /// <summary>
    /// Set to 1/true to drop donor-advised-fund sponsors and other pass-through vehicles. <b>Reach for this whenever you rank by dollars.</b> DAF sponsors (Fidelity Charitable, Schwab Charitable, National Philanthropic Trust and similar) report enormous grant totals because money passes through them from individual donors — so any amount-ranked list is topped by them unless you say otherwise, which answers a different question from 'which foundations give the most'. Exactly equivalent to <c>exclude=daf</c>, and kept because the amount-ranked caveat names it; <c>exclude=</c> additionally drops the two distortions that survive it (grants to individuals, and transfers inside one economic entity).
    /// </summary>
    public ExcludeDaf? ExcludeDaf { get; init; }

    /// <summary>
    /// Minimum grant amount, whole dollars.
    /// </summary>
    public MinAmt? MinAmt { get; init; }

    /// <summary>
    /// Maximum grant amount, whole dollars.
    /// </summary>
    public MaxAmt? MaxAmt { get; init; }

    /// <summary>
    /// Keep only rows whose recipient EIN carries <c>x_plinth.match_prob</c> at or above this value (0 to 1). Rows with no recipient EIN carry no probability and are excluded. ⚠️ Model-resolved rows top out near 0.965 (isotonic calibration only emits values it observed), so a threshold above that drops every <c>model</c> row while keeping the rule-resolved ones: it reads as a confidence cut and acts as a provenance filter, and the response says so in <c>x_plinth.warnings</c>. For provenance, say so with <c>ein_source</c>.
    /// </summary>
    public MinMatchProb? MinMatchProb { get; init; }

    /// <summary>
    /// Keep only rows whose recipient EIN came from these resolution rules, comma-separated. Strongest first, with each rule's measured held-out precision: filed (0.995), override_human (0.99), override_keyerror (0.98), name (0.97), registry-dominant (0.97), fuzzy (0.961), override_llm (0.95), address (0.944), registry (0.944), zip (0.934), street (0.834), model (per-row, see match_prob). <c>filed</c> is the filer-stated subset, the one to use for anything load-bearing. Rows with no recipient EIN are excluded.
    /// </summary>
    public EinSource1? EinSource { get; init; }

    /// <summary>
    /// Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the currency the filing was made in and are never converted, so every total is a single-jurisdiction total. <c>x_plinth.dataset</c> names the source, licence and currency behind the answer. Distinct from <c>country</c>, which is where the RECIPIENT sits.
    /// </summary>
    public Jurisdiction? Jurisdiction { get; init; }

    /// <summary>
    /// Set to 1/true to turn any unsupported or unusable parameter into a 400 instead of a warning. Use it in a migration test suite so a dropped filter fails loudly.
    /// </summary>
    public Strict? Strict { get; init; }

    /// <summary>
    /// json (default) or xml.
    /// </summary>
    public Format1? Format { get; init; }

    /// <summary>
    /// NOT SUPPORTED. PCS population (who a grant benefits) is Candid-only classification work; 990 filings do not carry it and we do not infer it. Approximate with <c>subject</c> plus <c>query</c>, and expect lower precision.
    /// </summary>
    public Population? Population { get; init; }

    /// <summary>
    /// NOT SUPPORTED. PCS transaction type. Effectively every row here is a cash grant as reported on Schedule I / Part XIV.
    /// </summary>
    public Transaction? Transaction { get; init; }

    /// <summary>
    /// NOT SUPPORTED. There are no government grantmakers to include or exclude: this corpus is built from Form 990 filings, and government agencies do not file them. <c>include_gov=false</c> is therefore already the state of the data. Use /api/premier gov_funding, or the gov_funding_* tables over /api/sql, for money flowing FROM government.
    /// </summary>
    public IncludeGov? IncludeGov { get; init; }

    /// <summary>
    /// NOT SUPPORTED. No per-row change timestamp. The dataset is versioned as a whole — read <c>x_plinth.dataset</c> on any response, or GET /api/meta, and re-sync when the build stamp moves.
    /// </summary>
    public LastUpdated? LastUpdated { get; init; }

    /// <summary>
    /// NOT SUPPORTED. Candid/GuideStar profile participation level. Nothing equivalent exists outside Candid's own platform.
    /// </summary>
    public ProfileLevels? ProfileLevels { get; init; }

    /// <summary>
    /// 1-based page number. Default 1.
    /// </summary>
    public Page? Page { get; init; }

    /// <summary>
    /// Maximum rows to return.
    /// </summary>
    public Limit? Limit { get; init; }

    /// <summary>
    /// Sort field. amount and count are available everywhere; the name/geography fields vary by endpoint. An unavailable field is reported in x_plinth.warnings, never silently swapped.
    /// </summary>
    public SortBy? SortBy { get; init; }

    /// <summary>
    /// asc or desc. Default desc.
    /// </summary>
    public SortOrder11? SortOrder { get; init; }

    /// <summary>
    /// Return a canned example instead of querying the corpus. <b>Needs no API key and is not metered.</b> <c>1</c> is the plain success case; <c>list</c> enumerates what each named case demonstrates. The organizations in an example are invented — only the shape is real.
    /// </summary>
    public Example1? Example { get; init; }
}
