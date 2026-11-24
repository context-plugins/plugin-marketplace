using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Advanced API Security provides security profile that scores the following categories.
/// </summary>
public record GoogleCloudApigeeV1ProfileConfigCategory
{
    /// <summary>
    /// Checks to see if you have a mediation policy in place.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mediation")]
    public object? Mediation { get; init; }

    /// <summary>
    /// Checks to see if you have configured mTLS for the target server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mtls")]
    public object? Mtls { get; init; }

    /// <summary>
    /// Checks to see if you have CORS policy in place.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cors")]
    public object? Cors { get; init; }

    /// <summary>
    /// Checks to see if you have a threat protection policy in place.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("threat")]
    public object? Threat { get; init; }

    /// <summary>
    /// Checks for abuse, which includes any requests sent to the API for purposes other than what it is intended for, such as high volumes of requests, data scraping, and abuse related to authorization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("abuse")]
    public object? Abuse { get; init; }

    /// <summary>
    /// Checks to see if you have an authorization policy in place.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authorization")]
    public object? Authorization { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
