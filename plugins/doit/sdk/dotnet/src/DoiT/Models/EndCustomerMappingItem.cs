using System.Text.Json.Serialization;

namespace DoiT.Models;

public record EndCustomerMappingItem
{
    /// <summary>
    /// 12-digit AWS account ID of the end-customer account being mapped.
    /// </summary>
    [JsonPropertyName("ecAccountId")]
    public required string EcAccountId { get; init; }

    /// <summary>
    /// DoiT customer ID to map the end-customer account to.
    /// </summary>
    [JsonPropertyName("ecCustomerId")]
    public required string EcCustomerId { get; init; }

    /// <summary>
    /// Optional CUR export base path for the end-customer account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("curBasePath")]
    public string? CurBasePath { get; init; }
}
