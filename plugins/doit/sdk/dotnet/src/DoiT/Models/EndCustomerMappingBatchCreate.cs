using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record EndCustomerMappingBatchCreate
{
    [JsonPropertyName("dpmaId")]
    public required string DpmaId { get; init; }

    /// <summary>
    /// 12-digit AWS account ID of the reseller's program management account.
    /// </summary>
    [JsonPropertyName("resellerPmaAccountId")]
    public required string ResellerPmaAccountId { get; init; }

    /// <summary>
    /// Batch items. Duplicate <c>ecAccountId</c> or <c>ecCustomerId</c> values within the batch are rejected.
    /// </summary>
    [JsonPropertyName("items")]
    [MinLength(1)]
    [MaxLength(100)]
    public required IReadOnlyList<EndCustomerMappingItem> Items { get; init; }
}
