using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record UpdateCustomViewRequest
{
    /// <summary>
    /// New human-readable view name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// New description; pass null to clear it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Full replacement of the view's query list. Each SQL is re-validated (SELECT-only) exactly like createCustomView. For changing one or two queries, prefer <c>queryUpserts</c>/<c>queryRemovals</c> instead. Cannot be combined with them.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queries")]
    public IReadOnlyList<CustomViewQuery>? Queries { get; init; }

    /// <summary>
    /// Replacement render bundle. Re-validated (size cap, self-contained, paid:data listener) exactly like createCustomView. For small changes, prefer <c>bundleEdits</c> instead. Cannot be combined with <c>bundleEdits</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("renderBundle")]
    public string? RenderBundle { get; init; }

    /// <summary>
    /// PREFERRED for revisions: exact search-and-replace edits applied in order to the stored render bundle, so you send only the changed text instead of re-transmitting the whole bundle. The edited result passes the same validation as a full replacement. Cannot be combined with <c>renderBundle</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bundleEdits")]
    public IReadOnlyList<RenderBundleEdit>? BundleEdits { get; init; }

    /// <summary>
    /// PREFERRED for revisions: per-query changes — each entry replaces the stored query with the same id, or is appended as a new query. Queries not mentioned are left unchanged. Cannot be combined with <c>queries</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queryUpserts")]
    public IReadOnlyList<CustomViewQuery>? QueryUpserts { get; init; }

    /// <summary>
    /// Ids of stored queries to remove (applied before <c>queryUpserts</c>). Rejected if an id does not exist. Cannot be combined with <c>queries</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queryRemovals")]
    public IReadOnlyList<string>? QueryRemovals { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
