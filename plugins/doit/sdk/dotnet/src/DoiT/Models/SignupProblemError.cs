using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Models;

/// <summary>
/// RFC 9457 problem details for the Signup operations.
/// </summary>
public record SignupProblemError
{
    [JsonPropertyName("type")]
    [Format(FormatKind.Uri)]
    public required string Type { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("status")]
    public required int Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detail")]
    public string? Detail { get; init; }

    /// <summary>
    /// Machine-readable problem code (see each response description).
    /// </summary>
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    [JsonPropertyName("retryable")]
    public required bool Retryable { get; init; }

    /// <summary>
    /// The already-pending request for this domain (signup_already_pending).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signupRequestId")]
    public string? SignupRequestId { get; init; }

    /// <summary>
    /// Where an existing DoiT user or customer should sign in instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signInUrl")]
    [Format(FormatKind.Uri)]
    public string? SignInUrl { get; init; }

    /// <summary>
    /// Where a blocked signup (code signup_blocked) can ask DoiT to review the decision.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appealUrl")]
    [Format(FormatKind.Uri)]
    public string? AppealUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
