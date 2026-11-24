using Sapling.Core.Models;

namespace Sapling.Requests.Detection;

/// <summary>
/// The inputs of the SaplingAidetectPdf operation.
/// </summary>
public sealed record SaplingAidetectPdfRequest
{
    public bool ReturnUsageQuery { get; init; } = false;

    /// <summary>
    /// Sapling API key, as an alternative to the "Authorization: Bearer &lt;key&gt;" header.
    /// </summary>
    public string? Key { get; init; }

    /// <summary>
    /// The document to upload.
    /// </summary>
    public required BinaryContent File { get; init; }

    /// <summary>
    /// Optional part carrying a JSON object, e.g. {"key": "&lt;API key&gt;", "return_usage": true}, as an alternative to the query or header credential. Send it as a file part.
    /// </summary>
    public BinaryContent? JsonParams { get; init; }

    /// <summary>
    /// When true, a successful JSON-object response additionally carries "usage": {"characters": &lt;n&gt;} — the billable character count this request submitted (0 for unbilled requests; the 2.5x adjustment for logographic languages is included, so CJK requests report more than their raw length). Repeat texts inside the billing deduplication window are still counted here even though they are not re-charged, so the number is an upper bound on the final charge. Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An existing usage field (such as account/status or completion token usage) is preserved unchanged.
    /// </summary>
    public bool ReturnUsage { get; init; } = false;
}
