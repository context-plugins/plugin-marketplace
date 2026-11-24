using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record InspectionDataResponse
{
    /// <summary>
    /// The protocol used to return the HTTP response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("protocol")]
    public string? Protocol { get; init; }

    /// <summary>
    /// The HTTP response status code for the HTTP response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statusCode")]
    public string? StatusCode { get; init; }

    /// <summary>
    /// The message associated with the HTTP status code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statusMessage")]
    public string? StatusMessage { get; init; }

    /// <summary>
    /// The response headers associated with the HTTP response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headers")]
    public string? Headers { get; init; }

    /// <summary>
    /// The HTTP response returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("body")]
    public string? Body { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
