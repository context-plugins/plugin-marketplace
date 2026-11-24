using System.Text.Json.Serialization;
using ReadMe.Core.Models;

namespace ReadMe.Models;

/// <summary>
/// HAR-formatted log entry submitted by a ReadMe Metrics SDK.
/// </summary>
public record MetricsRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group")]
    public Group? Group { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientIPAddress")]
    public string? ClientIpAddress { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("development")]
    public bool? Development { get; init; }

    /// <summary>
    /// HAR request object
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("request")]
    public object? Request { get; init; }

    /// <summary>
    /// HAR response object
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("response")]
    public object? Response { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
