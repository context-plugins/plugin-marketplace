using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageMembersInvitesResponse1
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("cancelled")]
    public string Cancelled { get; } = "True";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
