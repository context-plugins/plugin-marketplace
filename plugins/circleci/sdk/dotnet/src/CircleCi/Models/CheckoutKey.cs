using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Models;
using CircleCi.Models.Enums;

namespace CircleCi.Models;

public record CheckoutKey
{
    /// <summary>
    /// The public SSH key
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("public-key")]
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
    /// Whether this is the preferred checkout key
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("preferred")]
    public bool? Preferred { get; init; }

    /// <summary>
    /// When the key was created
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created-at")]
    public DateTimeOffset? CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
