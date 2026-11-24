using System.Text.Json.Serialization;
using MrScraper.Core.Models;

namespace MrScraper.Models;

public record GetApiV1ResultsResultidResponse
{
    /// <summary>
    /// HTTP status returned by the MrScraper service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status_code")]
    public int? StatusCode { get; init; }

    /// <summary>
    /// Parsed JSON or response text supplied by the service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public object? Data { get; init; }

    /// <summary>
    /// Response headers with credential-bearing headers filtered out.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headers")]
    public object? Headers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
