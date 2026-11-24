using System;
using Skribble.Models.Enums;

namespace Skribble.Requests.Reports;

/// <summary>
/// The inputs of the GetSkribbleReport operation.
/// </summary>
public sealed record GetSkribbleReportRequest
{
    /// <summary>
    /// The 'id' provided by the validate operation
    /// </summary>
    public required Guid Id { get; init; }

    /// <summary>
    /// Language of the validation report
    /// </summary>
    public Lang Lang { get; init; } = Lang.En;

    /// <summary>
    /// Attach the ETSI TS 119 102-2 XML validation report as a file attachment to the PDF. When enabled, the XML report is embedded in the PDF and a paperclip annotation is added on the last page. This registers additional usage for the ETSI report endpoint.
    /// </summary>
    public bool AttachEtsiReport { get; init; } = false;

    /// <summary>
    /// IANA timezone name used to render timestamps in the report — the "Generated at" time and each signer's "Time of signature". Defaults to UTC, preserving the previous behaviour when omitted. The rendered zone abbreviation (e.g. <c>UTC</c>, <c>CET</c>, <c>PST</c>) reflects the chosen zone. Browser callers can pass <c>Intl.DateTimeFormat().resolvedOptions().timeZone</c>. The timezone is part of the report cache key, so each distinct timezone (per language and ETSI flag) is rendered, billed and cached once. An unknown or malformed value returns <c>400</c>.
    /// </summary>
    public string TimeZone { get; init; } = "UTC";
}
