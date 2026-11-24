using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

/// <summary>
/// A single row. <c>id</c> is the <b>encrypted</b> Lusha ID (<c>v{N}.…</c>) — <c>personId</c> for contacts, <c>lushaCompanyId</c> for companies — in the same format used across V3, so it round-trips directly into Add Entities, Remove Entities, and Enrich. Internal fields (<c>accountId</c>, <c>companyLid</c>, <c>lushaCompanyId</c>, <c>personId</c>, <c>companyDetails</c>) are not returned. Remaining per-row fields under <c>columns</c> are owned by the Workspace service; this shape is representative, not an exhaustive schema.
/// </summary>
public record TableEntity
{
    /// <summary>
    /// Encrypted Lusha ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("columns")]
    public IReadOnlyList<EntityColumnValue>? Columns { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
