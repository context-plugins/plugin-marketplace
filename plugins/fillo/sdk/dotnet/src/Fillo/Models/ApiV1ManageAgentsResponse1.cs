using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageAgentsResponse1
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("revoked")]
    public string Revoked { get; } = "True";

    [JsonPropertyName("alreadyRevoked")]
    public required bool AlreadyRevoked { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
