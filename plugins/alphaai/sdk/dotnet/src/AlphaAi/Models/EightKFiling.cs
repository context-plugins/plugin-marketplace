using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;
using AlphaAi.Core.Validation;
using AlphaAi.Core.Validation.Attributes;

namespace AlphaAi.Models;

/// <summary>
/// Structured SEC 8-K filing: what the filing itself says, next to the AI read of it. One news row fronts one filing.
/// </summary>
public record EightKFiling
{
    /// <summary>
    /// Every item code the filing carries, in the filing's order (<c>["5.02", "9.01"]</c>). <c>?item=</c> matches any of them. Empty for a filing SEC served no document for (header-only).
    /// </summary>
    [JsonPropertyName("items")]
    public required IReadOnlyList<string> Items { get; init; }

    /// <summary>
    /// The item that drove the row's <c>category</c> (<c>2.02</c> → <c>earnings</c>, <c>2.01</c> → <c>mergers_acquisitions</c>, the rest → <c>corporate_actions</c>). <c>null</c> when the filing lists no items.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primary_item")]
    public string? PrimaryItem { get; init; }

    /// <summary>
    /// SEC accession number of the filing — the id to cite.
    /// </summary>
    [JsonPropertyName("accession_number")]
    public required string AccessionNumber { get; init; }

    /// <summary>
    /// When EDGAR accepted the filing (UTC).
    /// </summary>
    [JsonPropertyName("filed_at")]
    public required DateTimeOffset FiledAt { get; init; }

    /// <summary>
    /// The filing's own "date of report" — the date of the event it reports, which can precede <c>filed_at</c> by up to four business days. <c>null</c> when the header carries none.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_date")]
    public DateTimeOffset? EventDate { get; init; }

    /// <summary>
    /// The press-release exhibit (EX-99.x) the summary was built from, on sec.gov. <c>null</c> when the filing has no such exhibit (the summary then reads the cover document).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exhibit_url")]
    [Format(FormatKind.Uri)]
    public string? ExhibitUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
