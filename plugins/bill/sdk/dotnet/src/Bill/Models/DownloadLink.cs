using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

public record DownloadLink
{
    /// <summary>
    /// CSV format
    /// </summary>
    [JsonPropertyName("csv")]
    public required string Csv { get; init; }

    /// <summary>
    /// PDF format
    /// </summary>
    [JsonPropertyName("pdf")]
    public required string Pdf { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
