using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageSyncTokensResponse2
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("revoked")]
    public string Revoked { get; } = "True";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
