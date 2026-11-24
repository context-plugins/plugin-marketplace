using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// A linked shared-payer management (payer) account that has completed onboarding.
/// </summary>
public record SharedPayerManagementAccount
{
    /// <summary>
    /// AWS account ID of the management (payer) account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payerId")]
    public string? PayerId { get; init; }

    /// <summary>
    /// Display name of the management (payer) account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payerName")]
    public string? PayerName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
