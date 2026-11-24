using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

public record Datum1ReportingReportsApi
{
    /// <summary>
    /// Application-specific error code, expressed as a string value.
    /// </summary>
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    /// <summary>
    /// Title of the error
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public TitleReportingReportsApi? Title { get; init; }

    /// <summary>
    /// Type of the response, always "error"
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Connection source has to be web or open banking.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detail")]
    public string? Detail { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
