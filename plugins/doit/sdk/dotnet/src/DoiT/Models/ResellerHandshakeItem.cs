using System.Text.Json.Serialization;

namespace DoiT.Models;

public record ResellerHandshakeItem
{
    /// <summary>
    /// DoiT customer ID of the reseller's end customer to issue a handshake for.
    /// </summary>
    [JsonPropertyName("resellerCustomerId")]
    public required string ResellerCustomerId { get; init; }

    /// <summary>
    /// 12-digit AWS account ID of the reseller's program management account (PMA).
    /// </summary>
    [JsonPropertyName("resellerPmaAccountId")]
    public required string ResellerPmaAccountId { get; init; }
}
