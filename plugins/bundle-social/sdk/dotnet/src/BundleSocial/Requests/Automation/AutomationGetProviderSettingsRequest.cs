using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.Automation;

/// <summary>
/// The inputs of the AutomationGetProviderSettings operation.
/// </summary>
public sealed record AutomationGetProviderSettingsRequest
{
    public required string TeamId { get; init; }

    public Platform? Platform { get; init; }

    public string? SocialAccountId { get; init; }

    public Type112? Type { get; init; }

    public Status59? Status { get; init; }

    public double? Offset { get; init; } = 0d;

    public double? Limit { get; init; } = 10d;
}
