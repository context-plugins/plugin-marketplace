using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Runtime configuration for Spec Generation add-on.
/// </summary>
public record GoogleCloudApigeeV1RuntimeSpecGenerationAddonConfig2
{
    /// <summary>
    /// Full Pub/Sub topic path in the Apigee Runtime Tenant Project where the Schema Inferring Engine publishes inferred ApiObservation messages. Format: projects/{project}/topics/{topic}. Same sentinel semantics as raw_observations_pubsub_topic. Default: empty string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiObservationsPubsubTopic")]
    public string? ApiObservationsPubsubTopic { get; init; }

    /// <summary>
    /// Whether the Spec Generation add-on is active for this environment. Default: false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    /// <summary>
    /// Full Pub/Sub topic path in the Apigee Runtime Tenant Project where the message processor publishes captured RawObservation messages. Format: projects/{project}/topics/{topic}. Empty string is the "not configured" sentinel; the consumer short-circuits publishing when empty. Default: empty string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rawObservationsPubsubTopic")]
    public string? RawObservationsPubsubTopic { get; init; }

    /// <summary>
    /// Fraction of eligible transactions to capture, in [0.0, 1.0]. The consumer enforces an internal upper-bound clamp independently of this field. Default: 0.0 (omitted from JSON per proto3 default-scalar-omission; the consumer's field initializer supplies the effective 0.01 fallback).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("samplingRate")]
    public double? SamplingRate { get; init; }

    /// <summary>
    /// ISO-8601 timestamp until which Spec Generation remains active (e.g. "2026-12-31T23:59:59Z"). Empty string is the canonical "not configured" sentinel and MUST be treated by the consumer as "expired" (short-circuit before parsing). Default: empty string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabledUntil")]
    public string? EnabledUntil { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
