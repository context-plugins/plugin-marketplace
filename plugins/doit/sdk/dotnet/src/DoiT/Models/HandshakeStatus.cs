using System.Text.Json.Serialization;

namespace DoiT.Models;

/// <summary>
/// Per-AWS-Organizations-handshake-state counts across all tenants mapped to a PMA.
/// </summary>
public record HandshakeStatus
{
    [JsonPropertyName("total")]
    public required int Total { get; init; }

    [JsonPropertyName("requested")]
    public required int Requested { get; init; }

    [JsonPropertyName("open")]
    public required int Open { get; init; }

    [JsonPropertyName("accepted")]
    public required int Accepted { get; init; }

    [JsonPropertyName("declined")]
    public required int Declined { get; init; }

    [JsonPropertyName("canceled")]
    public required int Canceled { get; init; }

    [JsonPropertyName("expired")]
    public required int Expired { get; init; }
}
