using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record SharedPayerAccountReassignRequest
{
    /// <summary>
    /// Customer to reassign the account to: <c>{customerId}</c> (the reseller itself) or a T3 end customer within its hierarchy.
    /// </summary>
    [JsonPropertyName("customerId")]
    public required string CustomerId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
