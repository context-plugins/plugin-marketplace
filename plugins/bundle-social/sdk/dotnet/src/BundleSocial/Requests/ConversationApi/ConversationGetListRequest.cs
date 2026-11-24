using BundleSocial.Core.Validation.Attributes;
using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.ConversationApi;

/// <summary>
/// The inputs of the ConversationGetList operation.
/// </summary>
public sealed record ConversationGetListRequest
{
    public required string TeamId { get; init; }

    public PlatformBundleSocialConversationApi? Platform { get; init; }

    public string? SocialAccountId { get; init; }

    public StatusBundleSocialConversationApi? Status { get; init; }

    [Minimum(0)]
    public int? Offset { get; init; } = 0;

    [Minimum(1)]
    [Maximum(500)]
    public int? Limit { get; init; } = 10;

    public string? Cursor { get; init; }
}
