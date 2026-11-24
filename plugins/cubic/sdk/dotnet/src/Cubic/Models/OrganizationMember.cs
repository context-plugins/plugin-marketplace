using System.Text.Json.Serialization;
using Cubic.Models.AnyOf;
using Cubic.Models.Enums;

namespace Cubic.Models;

public record OrganizationMember
{
    [JsonPropertyName("githubUserId")]
    public required string GithubUserId { get; init; }

    [JsonPropertyName("githubLogin")]
    public required GithubLogin GithubLogin { get; init; }

    [JsonPropertyName("workEmail")]
    public required WorkEmail WorkEmail { get; init; }

    [JsonPropertyName("role")]
    public required Role Role { get; init; }

    [JsonPropertyName("seat")]
    public required bool Seat { get; init; }

    [JsonPropertyName("isBot")]
    public required bool IsBot { get; init; }
}
