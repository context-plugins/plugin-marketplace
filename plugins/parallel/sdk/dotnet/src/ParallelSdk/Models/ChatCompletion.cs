using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Chat completion response.
/// </summary>
public record ChatCompletion
{
    /// <summary>
    /// The id of the chat completion.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("choices")]
    public required IReadOnlyList<Choice> Choices { get; init; }

    [JsonPropertyName("created")]
    public required int Created { get; init; }

    [JsonPropertyName("model")]
    public required string Model { get; init; }

    [JsonPropertyName("object")]
    public string Object { get; } = "chat.completion";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("moderation")]
    public Moderation11? Moderation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("service_tier")]
    public ServiceTier1? ServiceTier { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("system_fingerprint")]
    public SystemFingerprint? SystemFingerprint { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usage")]
    public Usage? Usage { get; init; }

    /// <summary>
    /// Basis for the chat completion, including citations and reasoning supporting the output.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("basis")]
    public IReadOnlyList<FieldBasis>? Basis { get; init; }

    /// <summary>
    /// Identifier for this interaction. Pass as previous_interaction_id for follow-ups.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("interaction_id")]
    public InteractionId? InteractionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
