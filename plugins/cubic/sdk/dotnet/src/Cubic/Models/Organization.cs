using System.Text.Json.Serialization;

namespace Cubic.Models;

public record Organization
{
    [JsonPropertyName("organization")]
    public required string OrganizationValue { get; init; }

    [JsonPropertyName("githubAccountId")]
    public required string GithubAccountId { get; init; }

    [JsonPropertyName("canViewBilling")]
    public required bool CanViewBilling { get; init; }

    [JsonPropertyName("canManageSeats")]
    public required bool CanManageSeats { get; init; }

    [JsonPropertyName("canManageRoles")]
    public required bool CanManageRoles { get; init; }

    [JsonPropertyName("canUpdateSubscription")]
    public required bool CanUpdateSubscription { get; init; }

    [JsonPropertyName("canUpdateFlexCapacity")]
    public required bool CanUpdateFlexCapacity { get; init; }
}
