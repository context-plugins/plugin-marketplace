using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using JuriSign.Core.Models;
using JuriSign.Core.Validation;
using JuriSign.Core.Validation.Attributes;
using JuriSign.Models.Enums;

namespace JuriSign.Models;

public record AuthTokenRequest
{
    /// <summary>
    /// Your account email address
    /// </summary>
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    /// <summary>
    /// Your account password
    /// </summary>
    [JsonPropertyName("password")]
    public required string Password { get; init; }

    /// <summary>
    /// Optional device identifier. Tokens with the same device name will be revoked and replaced.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device_name")]
    [MaxLength(100)]
    public string? DeviceName { get; init; }

    /// <summary>
    /// Optional. Restricts the token to the given scopes. <c>sign-requests:read</c> / <c>sign-requests:write</c> also cover the templates and bulk-* endpoints. Omit to receive all 5 scopes (default, unchanged behavior for existing integrations).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scopes")]
    public IReadOnlyList<Scope>? Scopes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
