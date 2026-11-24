using PlinthUsGrantsData.Core.Validation.Attributes;
using PlinthUsGrantsData.Models.Enums;

namespace PlinthUsGrantsData.Requests.Resolve;

/// <summary>
/// The inputs of the GetApiV1Search operation.
/// </summary>
public sealed record GetApiV1SearchRequest
{
    /// <summary>
    /// Search text. Fewer than 2 characters returns an empty result set.
    /// </summary>
    public required string Q { get; init; }

    /// <summary>
    /// Which register to search: <c>us</c> (IRS, the default) or <c>ca</c> (CRA). Case-insensitive. One register per query, because <c>revenue</c> is the filing's own figure and the two currencies are never combined. Any other value is a 400, as is a value that contradicts the namespace of an organization key passed as <c>q</c>.
    /// </summary>
    public JurisdictionEnum Jurisdiction { get; init; } = JurisdictionEnum.Us;

    /// <summary>
    /// Narrow to a two-letter region code — a US state, or a province or territory under <c>jurisdiction=ca</c>. Case-insensitive; anything else is reported in x_plinth.warnings rather than applied as a filter that cannot match.
    /// </summary>
    public string? State { get; init; }

    /// <summary>
    /// Rows to return. Capped at 50 — this endpoint resolves names, it does not page the corpus.
    /// </summary>
    [Maximum(50)]
    public int Limit { get; init; } = 20;

    /// <summary>
    /// Lowest total revenue, whole units of the filing's own currency — US dollars, or Canadian dollars under <c>jurisdiction=ca</c>, which is stated back in x_plinth.warnings. Applied server-side, so it cannot drop matches past the cut.
    /// </summary>
    public int? Min { get; init; }

    /// <summary>
    /// Highest total revenue, in the same currency as <c>min</c>.
    /// </summary>
    public int? Max { get; init; }

    /// <summary>
    /// strict=1 turns any parameter this endpoint does not accept into a 400 instead of a warning.
    /// </summary>
    public string? Strict { get; init; }

    /// <summary>
    /// Return a canned example response instead of querying the index — keyless, unmetered, and the only way to see this envelope without sending a real <c>q</c>. <c>?example=1</c> is the plain case; <c>?example=list</c> names the others. Every example body carries <c>x_plinth.example</c>.
    /// </summary>
    public string? Example { get; init; }
}
