using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ItemBundleSocialOrganizationApi
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("type")]
    public required Type1BundleSocialOrganizationApi Type { get; init; }

    [JsonPropertyName("username")]
    public required string? Username { get; init; }

    [JsonPropertyName("displayName")]
    public required string? DisplayName { get; init; }

    [JsonPropertyName("messagesUsed")]
    public required double MessagesUsed { get; init; }

    [JsonPropertyName("messagesLimit")]
    public required double MessagesLimit { get; init; }

    [JsonPropertyName("automationRunsUsed")]
    public required double AutomationRunsUsed { get; init; }

    [JsonPropertyName("automationRunsLimit")]
    public required double AutomationRunsLimit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
