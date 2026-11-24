using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record UpdateSeatAssignmentRequest
{
    [JsonPropertyName("userExternalId")]
    public required string? UserExternalId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
