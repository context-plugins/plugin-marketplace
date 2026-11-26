using System.Text.Json.Serialization;
using ForceDream.Core.Models;
using ForceDream.Models.AnyOf;

namespace ForceDream.Models;

/// <summary>
/// The exact fields signed and verified. See x-forcedream-canonicalization for the precise reduced "signable" object this maps to -- it is not simply this whole object.
/// </summary>
public record FdProof
{
    [JsonPropertyName("task_id")]
    public required string TaskId { get; init; }

    [JsonPropertyName("agent_id")]
    public required string AgentId { get; init; }

    [JsonPropertyName("input_hash")]
    public required string InputHash { get; init; }

    [JsonPropertyName("output_hash")]
    public required string OutputHash { get; init; }

    /// <summary>
    /// Real-world value is numeric but may arrive as a JSON string; coerce with Number(x) semantics before canonicalizing.
    /// </summary>
    [JsonPropertyName("cost_pence")]
    public required CostPence CostPence { get; init; }

    [JsonPropertyName("budget_pence")]
    public required BudgetPence BudgetPence { get; init; }

    /// <summary>
    /// When present, the signable includes 10 fields instead of 8.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_cost_hash")]
    public string? ExternalCostHash { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retrieved_count")]
    public RetrievedCount? RetrievedCount { get; init; }

    [JsonPropertyName("started_at")]
    public required StartedAt StartedAt { get; init; }

    /// <summary>
    /// Coerced to a string exactly as JS's String(x) would, not left as a raw number.
    /// </summary>
    [JsonPropertyName("completed_at")]
    public required CompletedAt CompletedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("algorithm")]
    public string? Algorithm { get; init; }

    /// <summary>
    /// Base64-encoded Ed25519 signature over the SHA-256 digest of the canonical signable string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signature")]
    public string? Signature { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key_id")]
    public string? KeyId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("worm_seal")]
    public string? WormSeal { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("proof_id")]
    public string? ProofId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
