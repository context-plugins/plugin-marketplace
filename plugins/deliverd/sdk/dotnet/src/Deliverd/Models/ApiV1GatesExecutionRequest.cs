using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1GatesExecutionRequest
{
    /// <summary>
    /// <c>started</c> claims a use before you act; <c>completed</c> or <c>failed</c> reports the outcome. Reporting <c>completed</c> without a <c>claimId</c> claims and reports in one
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phase")]
    public Phase4? Phase { get; init; } = Phase4.Completed;

    /// <summary>
    /// The id of your <c>started</c> receipt, when this finishes it
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("claimId")]
    public Guid? ClaimId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executedAt")]
    public DateTimeOffset? ExecutedAt { get; init; }

    /// <summary>
    /// The sha256 of what you acted on. Required when the permission names an artifact
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("artifactSha256")]
    [RegularExpression("^[0-9a-fA-F]{64}$")]
    public string? ArtifactSha256 { get; init; }

    /// <summary>
    /// Where it landed. Must be where it was authorised to
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destination")]
    public Destination9? Destination { get; init; }

    /// <summary>
    /// What the act produced: a provider reference, a URL. Recorded as your report, not as verified fact
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("result")]
    public IReadOnlyDictionary<string, object>? Result { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detail")]
    [MaxLength(1000)]
    public string? Detail { get; init; }

    /// <summary>
    /// Who you are, when you ask through a person's connection. Registered on first sight and bound to that person. An agent key already says who it is
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agent")]
    public AgentDeliverdDevGatesApi? Agent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
