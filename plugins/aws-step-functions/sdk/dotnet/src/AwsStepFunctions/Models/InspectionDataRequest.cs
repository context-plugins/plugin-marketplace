using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record InspectionDataRequest
{
    /// <summary>
    /// The protocol used to make the HTTP request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("protocol")]
    public string? Protocol { get; init; }

    /// <summary>
    /// The HTTP method used for the HTTP request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("method")]
    public string? Method { get; init; }

    /// <summary>
    /// The API endpoint used for the HTTP request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    /// <summary>
    /// The request headers associated with the HTTP request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headers")]
    public string? Headers { get; init; }

    /// <summary>
    /// The request body for the HTTP request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("body")]
    public string? Body { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
