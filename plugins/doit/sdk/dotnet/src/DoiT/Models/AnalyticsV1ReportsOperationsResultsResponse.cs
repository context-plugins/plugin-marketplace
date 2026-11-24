using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation;
using DoiT.Core.Validation.Attributes;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record AnalyticsV1ReportsOperationsResultsResponse
{
    /// <summary>
    /// The report's id. Present only when the operation was started against a saved report (run by id); omitted for ad hoc runs against an inline config.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The report's current name, looked up at read time (not a snapshot from when the operation started). Present only when the operation was started against a saved report (run by id) and the report still exists; omitted for ad hoc runs against an inline config.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportName")]
    public string? ReportName { get; init; }

    /// <summary>
    /// Email address of the report owner, looked up at read time. Present only when the operation was started against a saved report (run by id) and the report still exists; omitted for ad hoc runs against an inline config.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner")]
    public string? Owner { get; init; }

    /// <summary>
    /// Present only when the operation was started against a saved report (run by id) and the report still exists; omitted for ad hoc runs against an inline config.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type9DoiTReportsApi? Type { get; init; }

    /// <summary>
    /// The creation time of the report, in milliseconds since the epoch. Present only when the operation was started against a saved report (run by id) and the report still exists; omitted for ad hoc runs against an inline config.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public long? CreateTime { get; init; }

    /// <summary>
    /// The time when the report was last updated, in milliseconds since the epoch, looked up at read time. Present only when the operation was started against a saved report (run by id) and the report still exists; omitted for ad hoc runs against an inline config.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public long? UpdateTime { get; init; }

    /// <summary>
    /// The URL of the report in DoiT console. Present only when the operation was started against a saved report (run by id) and the report still exists; omitted for ad hoc runs against an inline config.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("urlUI")]
    public string? UrlUi { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("result")]
    public ResultDoiTReportsApi? Result { get; init; }

    /// <summary>
    /// Signed URL the rendered file can be downloaded from. Present only when the fileOutput parameter was supplied and the file was rendered. Never a variant of the response — the result property above is returned either way, so a render that fails leaves result intact and omits fileOutput rather than failing the call. The URL is valid for 7 days; request the endpoint again for a fresh one.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fileOutput")]
    [Format(FormatKind.Uri)]
    public string? FileOutput { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
