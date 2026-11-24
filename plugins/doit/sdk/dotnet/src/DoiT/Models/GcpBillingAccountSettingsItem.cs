using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record GcpBillingAccountSettingsItem
{
    /// <summary>
    /// GCP Billing Account ID.
    /// </summary>
    [JsonPropertyName("billingAccountId")]
    public required string BillingAccountId { get; init; }

    /// <summary>
    /// Settings for each product line and region scope activated on this billing account, ordered <c>compute</c> first, then <c>cloud_sql</c> regions alphabetically.
    /// </summary>
    [JsonPropertyName("services")]
    public required IReadOnlyList<GcpBillingAccountServiceSettings> Services { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
