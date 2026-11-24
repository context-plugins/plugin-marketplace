using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Models;
using CircleCi.Models.Enums;

namespace CircleCi.Models;

public record CheckoutKeyCircleCiRestApiV1SshKeyApi
{
    /// <summary>
    /// The public SSH key
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("public_key")]
    public string? PublicKey { get; init; }

    /// <summary>
    /// The type of checkout key
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeCircleciProjectApi? Type { get; init; }

    /// <summary>
    /// The MD5 fingerprint of the key
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fingerprint")]
    public string? Fingerprint { get; init; }

    /// <summary>
    /// Whether this is the preferred key
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("preferred")]
    public bool? Preferred { get; init; }

    /// <summary>
    /// The login associated with the key
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("login")]
    public string? Login { get; init; }

    /// <summary>
    /// When the key was created
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("time")]
    public DateTimeOffset? Time { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
