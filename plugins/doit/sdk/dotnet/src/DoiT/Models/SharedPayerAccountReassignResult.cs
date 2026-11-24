using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record SharedPayerAccountReassignResult
{
    /// <summary>
    /// Asset ID of the reassigned account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("assetId")]
    public string? AssetId { get; init; }

    /// <summary>
    /// Customer the account was reassigned to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerId")]
    public string? CustomerId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
