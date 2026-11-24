using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record AwsOrganizationSettingsItem
{
    /// <summary>
    /// 12-digit account number of the AWS organization's management (payer) account.
    /// </summary>
    [JsonPropertyName("managementAccountId")]
    public required string ManagementAccountId { get; init; }

    /// <summary>
    /// AWS account used for commitment purchases for this AWS organization. Often a member account under the AWS organization, but it may also be the management (payer) account itself. Null if not configured.
    /// </summary>
    [JsonPropertyName("purchaseAccountId")]
    public required string? PurchaseAccountId { get; init; }

    /// <summary>
    /// Commitment settings for each commitment type activated on this AWS organization. Settings values are independent per AWS organization and commitment type.
    /// </summary>
    [JsonPropertyName("services")]
    public required IReadOnlyList<AwsOrganizationServiceSettings> Services { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
