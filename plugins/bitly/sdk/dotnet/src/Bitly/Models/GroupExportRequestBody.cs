using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitly.Core.Models;
using Bitly.Models.Enums;

namespace Bitly.Models;

public record GroupExportRequestBody
{
    /// <summary>
    /// Which export shape to produce.
    /// </summary>
    [JsonPropertyName("export_type")]
    public required ExportType ExportType { get; init; }

    /// <summary>
    /// Fully qualified bitlinks (e.g. "bit.ly/abc"). Used by export_type link_engagements_batch when
    /// the caller already knows the exact links. Mutually exclusive with filter (provide one or the other).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bitlinks")]
    public IReadOnlyList<string>? Bitlinks { get; init; }

    /// <summary>
    /// Start of the metrics date range (Unix seconds, UTC). Clamped to the caller's tier data window.
    /// For link_engagements_batch, required together with unix_to unless the tier max-history default applies.
    /// For links_list or qr_codes_list, used when include_metrics is true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unix_from")]
    public int? UnixFrom { get; init; }

    /// <summary>
    /// End of the metrics date range (Unix seconds, UTC). See unix_from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unix_to")]
    public int? UnixTo { get; init; }

    /// <summary>
    /// Search constraints used to resolve links or QR codes for export. Required for links_list and qr_codes_list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filter")]
    public GroupExportFilter? Filter { get; init; }

    /// <summary>
    /// When true on links_list or qr_codes_list, append clicks, scans, and button_clicks columns and apply
    /// the 200-row cap. Requires unix_from and unix_to (or tier-default window behavior where applicable).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("include_metrics")]
    public bool? IncludeMetrics { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
