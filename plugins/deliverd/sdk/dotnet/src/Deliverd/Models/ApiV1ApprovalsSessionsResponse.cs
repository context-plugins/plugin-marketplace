using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1ApprovalsSessionsResponse
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("object")]
    public string Object { get; } = "decision_session";

    [JsonPropertyName("approvalId")]
    public required Guid ApprovalId { get; init; }

    [JsonPropertyName("approver")]
    public required Approver Approver { get; init; }

    [JsonPropertyName("mode")]
    public required Mode Mode { get; init; }

    [JsonPropertyName("origin")]
    public required string? Origin { get; init; }

    [JsonPropertyName("returnUrl")]
    public required string? ReturnUrl { get; init; }

    /// <summary>
    /// Returned once, when the session is made.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    /// <summary>
    /// Returned once, when the session is made.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientSecret")]
    public string? ClientSecret { get; init; }

    [JsonPropertyName("status")]
    public required Status7 Status { get; init; }

    [JsonPropertyName("decision")]
    public required Decision? Decision { get; init; }

    [JsonPropertyName("approvalStatus")]
    public required ApprovalStatus ApprovalStatus { get; init; }

    [JsonPropertyName("expiresAt")]
    public required string ExpiresAt { get; init; }

    [JsonPropertyName("verifiedAt")]
    public required string? VerifiedAt { get; init; }

    [JsonPropertyName("completedAt")]
    public required string? CompletedAt { get; init; }

    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
