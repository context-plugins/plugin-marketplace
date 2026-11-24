using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// One group within a bucket.
/// <para>
/// The dimension fields matching the requested ``group_by`` dimensions are
/// set; all are None for ungrouped queries. ``api_key_id``/``user_id`` may be
/// set with a None name (deleted user, key created before attribution); a
/// None ``api_key_id`` group under ``group_by=api_key`` collects
/// Clerk-session (non-key) usage. Under ``group_by=model``, QA analysis
/// inference forms one ``qa_analysis`` group whose ``model`` is the HUD QA
/// label rather than the model it ran on.
/// </para>
/// </summary>
public record InferenceUsageGroup
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("api_key_id")]
    public ApiKeyId? ApiKeyId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("api_key_name")]
    public ApiKeyName? ApiKeyName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("api_key_is_default")]
    public bool? ApiKeyIsDefault { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("api_key_owner")]
    public ApiKeyOwner? ApiKeyOwner { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("byok")]
    public bool? Byok { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("byok_credential_id")]
    public ByokCredentialId? ByokCredentialId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("byok_name")]
    public ByokName? ByokName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("byok_scope")]
    public ByokScope1? ByokScope { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("byok_owner")]
    public ByokOwner? ByokOwner { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    public ModelHudPlatformUsageApi? Model { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("qa_analysis")]
    public bool? QaAnalysis { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("user_id")]
    public UserId? UserId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("user_name")]
    public UserName? UserName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("route")]
    public Route? Route { get; init; }

    [JsonPropertyName("requests")]
    public required int Requests { get; init; }

    [JsonPropertyName("input_tokens")]
    public required int InputTokens { get; init; }

    [JsonPropertyName("output_tokens")]
    public required int OutputTokens { get; init; }

    [JsonPropertyName("cached_input_tokens")]
    public required int CachedInputTokens { get; init; }

    [JsonPropertyName("cost")]
    public required double Cost { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
