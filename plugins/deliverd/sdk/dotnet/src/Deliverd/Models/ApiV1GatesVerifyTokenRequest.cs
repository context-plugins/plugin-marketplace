using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1GatesVerifyTokenRequest
{
    /// <summary>
    /// The <c>decisionToken</c> the gate carried
    /// </summary>
    [JsonPropertyName("token")]
    [StringLength(8192, MinimumLength = 1)]
    public required string Token { get; init; }

    /// <summary>
    /// The action you are about to perform
    /// </summary>
    [JsonPropertyName("action")]
    [RegularExpression("^[a-z][a-z0-9_]*(\\.[a-z][a-z0-9_]*)+$")]
    public required string Action { get; init; }

    /// <summary>
    /// The input you are about to perform it with
    /// </summary>
    [JsonPropertyName("input")]
    public required IReadOnlyDictionary<string, object> Input { get; init; }

    /// <summary>
    /// Where it lands. Required when the gate named a destination
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destination")]
    public Destination13? Destination { get; init; }

    /// <summary>
    /// The sha256 of what you are sending. Required when the gate named an artifact
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("artifactSha256")]
    [RegularExpression("^[0-9a-f]{64}$")]
    public string? ArtifactSha256 { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
