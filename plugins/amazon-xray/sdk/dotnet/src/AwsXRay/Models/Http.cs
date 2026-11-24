using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record Http
{
    /// <summary>
    /// The request URL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HttpURL")]
    public string? HttpUrl { get; init; }

    /// <summary>
    /// The response status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HttpStatus")]
    public int? HttpStatus { get; init; }

    /// <summary>
    /// The request method.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HttpMethod")]
    public string? HttpMethod { get; init; }

    /// <summary>
    /// The request's user agent string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UserAgent")]
    public string? UserAgent { get; init; }

    /// <summary>
    /// The IP address of the requestor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClientIp")]
    public string? ClientIp { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
