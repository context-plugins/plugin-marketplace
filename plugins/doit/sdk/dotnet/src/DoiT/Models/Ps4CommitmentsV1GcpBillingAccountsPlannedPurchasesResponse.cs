using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse
{
    [JsonPropertyName("items")]
    public required IReadOnlyList<GcpPlannedPurchaseByService> Items { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageToken")]
    public string? PageToken { get; init; }

    /// <summary>
    /// Number of service groups in <c>items</c> for this response.
    /// </summary>
    [JsonPropertyName("rowCount")]
    public required long RowCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
