using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Response confirming invite cancellation.
/// </summary>
public record CancelInviteResponse
{
    /// <summary>
    /// Success message
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// The invite document ID.
    /// </summary>
    [JsonPropertyName("inviteId")]
    public required string InviteId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
