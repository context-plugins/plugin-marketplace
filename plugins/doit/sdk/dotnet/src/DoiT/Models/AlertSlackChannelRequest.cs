using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Slack destination selected for an alert. Exactly one of the two shapes is valid: a shared channel (<c>shared: true</c>, <c>workspace</c> omitted), or a workspace channel (<c>shared: false</c> or omitted, <c>workspace</c> required). Any other combination is rejected with <c>validation_failed</c>. Identity is id plus workspace/shared context. customerId defaults to the authenticated customer; an explicit mismatch is rejected. Service accounts can add public/shared destinations; new private destinations require a user credential with channel visibility.
/// </summary>
public record AlertSlackChannelRequest
{
    [JsonPropertyName("id")]
    [MinLength(1)]
    public required string Id { get; init; }

    /// <summary>
    /// Connected workspace name returned by discovery. Required for a non-shared channel.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workspace")]
    public string? Workspace { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shared")]
    public bool? Shared { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerId")]
    [MinLength(1)]
    public string? CustomerId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
