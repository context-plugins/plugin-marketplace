using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageMembersResponse1
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("email")]
    public required string Email { get; init; }

    [JsonPropertyName("removed")]
    public string Removed { get; } = "True";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
