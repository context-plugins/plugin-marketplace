using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.Automation;

/// <summary>
/// The inputs of the AutomationGetFlows operation.
/// </summary>
public sealed record AutomationGetFlowsRequest
{
    public required string TeamId { get; init; }

    public StatusBundleSocialAutomationApi? Status { get; init; }

    public PlatformScope? PlatformScope { get; init; }

    public string? SocialAccountId { get; init; }

    public double? Offset { get; init; } = 0d;

    public double? Limit { get; init; } = 10d;
}
