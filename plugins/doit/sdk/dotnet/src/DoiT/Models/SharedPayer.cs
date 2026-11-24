using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// A shared payer linked to the reseller, with its account-mapping progress.
/// </summary>
public record SharedPayer
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

    /// <summary>
    /// Number of AWS accounts under this payer, including the payer's own management account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkedAccounts")]
    public int? LinkedAccounts { get; init; }

    /// <summary>
    /// Number of those accounts already reassigned to an end customer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mappedAssets")]
    public int? MappedAssets { get; init; }

    /// <summary>
    /// Same as <c>linkedAccounts</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalAssets")]
    public int? TotalAssets { get; init; }

    /// <summary>
    /// Whether the payer has finished onboarding. A payer still mid-onboarding has no accounts yet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed")]
    public bool? Completed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
