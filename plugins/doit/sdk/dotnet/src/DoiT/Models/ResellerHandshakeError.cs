using System.Text.Json.Serialization;

namespace DoiT.Models;

public record ResellerHandshakeError
{
    /// <summary>
    /// Stable machine-readable error code for this item.
    /// </summary>
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    /// <summary>
    /// Human-readable explanation of the failure.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }
}
