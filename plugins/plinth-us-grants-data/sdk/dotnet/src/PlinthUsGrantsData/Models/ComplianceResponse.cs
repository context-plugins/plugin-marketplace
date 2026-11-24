using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Models;

/// <summary>
/// A Charity Check-shaped screen. On an unpaid key the verdicts are present and the evidence
/// fields are blanked — <c>x_plinth.withheld</c> names every one, so a client can tell a blank from a no.
/// </summary>
public record ComplianceResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public int? Code { get; init; } = 200;

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("x_plinth")]
    public XPlinth1? XPlinth { get; init; }

    [JsonPropertyName("ein")]
    public required string Ein { get; init; }

    /// <summary>
    /// The screen itself: BMF status, Pub 78, revocation, sanctions, NTEE, financials.
    /// </summary>
    [JsonPropertyName("compliance")]
    public required object Compliance { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("report_date")]
    public ReportDate? ReportDate { get; init; }

    /// <summary>
    /// Identifies this screen by its contents — a digest of the record, its sources and <c>report_date</c>. Re-deriving it from a retained response reproduces the same value; an altered one does not. Not a signature: anyone can recompute it, so it evidences drift rather than authenticity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("report_id")]
    public ReportId? ReportId { get; init; }

    /// <summary>
    /// When each IRS/Treasury source behind this screen was last pulled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sources")]
    public Sources1? Sources { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
