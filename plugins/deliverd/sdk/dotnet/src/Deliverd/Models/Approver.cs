using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record Approver
{
    [JsonPropertyName("type")]
    public required TypeEnum Type { get; init; }

    [JsonPropertyName("email")]
    public required string Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
