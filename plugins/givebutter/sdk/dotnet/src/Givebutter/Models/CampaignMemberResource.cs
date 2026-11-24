using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record CampaignMemberResource
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("first_name")]
    public required string FirstName { get; init; }

    [JsonPropertyName("last_name")]
    public required string LastName { get; init; }

    [JsonPropertyName("display_name")]
    public required string DisplayName { get; init; }

    [JsonPropertyName("email")]
    public required string Email { get; init; }

    [JsonPropertyName("phone")]
    public required string Phone { get; init; }

    [JsonPropertyName("picture")]
    public required string Picture { get; init; }

    [JsonPropertyName("raised")]
    public required double Raised { get; init; }

    [JsonPropertyName("goal")]
    public required int Goal { get; init; }

    [JsonPropertyName("donors")]
    public required int Donors { get; init; }

    [JsonPropertyName("items")]
    public required int Items { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required string UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
