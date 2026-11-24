using System.Text.Json.Serialization;

namespace Cubic.Models;

public record MemberUpdateResult
{
    [JsonPropertyName("githubUserId")]
    public required string GithubUserId { get; init; }

    [JsonPropertyName("before")]
    public required Before Before { get; init; }

    [JsonPropertyName("after")]
    public required After After { get; init; }

    [JsonPropertyName("changed")]
    public required bool Changed { get; init; }

    [JsonPropertyName("availableSeats")]
    public required double AvailableSeats { get; init; }

    [JsonPropertyName("purchasedQuantityChanged")]
    public string PurchasedQuantityChanged { get; } = "False";
}
