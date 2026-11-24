using BundleSocial.Core.Validation.Attributes;
using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.Automation;

/// <summary>
/// The inputs of the AutomationGetFlowExecutions operation.
/// </summary>
public sealed record AutomationGetFlowExecutionsRequest
{
    public required string Id { get; init; }

    public required string TeamId { get; init; }

    public string? FlowVersionId { get; init; }

    public string? TriggerId { get; init; }

    public string? SocialAccountId { get; init; }

    public Platform? Platform { get; init; }

    public Status31? Status { get; init; }

    public string? ConversationId { get; init; }

    public string? FetchedCommentId { get; init; }

    [Minimum(0)]
    public int? Offset { get; init; } = 0;

    [Minimum(1)]
    [Maximum(500)]
    public int? Limit { get; init; } = 10;

    public string? Cursor { get; init; }
}
