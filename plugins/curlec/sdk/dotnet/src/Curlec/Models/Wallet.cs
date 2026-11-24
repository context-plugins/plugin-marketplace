using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Core.Validation;
using Curlec.Core.Validation.Attributes;
using Curlec.Models.Enums;

namespace Curlec.Models;

/// <summary>
/// Amazon Pay wallet details. Required when account_type=wallet.
/// </summary>
public record Wallet
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provider")]
    public Provider? Provider { get; init; }

    /// <summary>
    /// 10-digit phone with country code, e.g. +919876543210
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    public string? Phone { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public string? Email { get; init; }

    /// <summary>
    /// Wallet holder name. Case-sensitive. Supported: a-z, A-Z, 0-9, space, ', -, _, /, (, ), .
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [StringLength(120, MinimumLength = 4)]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
