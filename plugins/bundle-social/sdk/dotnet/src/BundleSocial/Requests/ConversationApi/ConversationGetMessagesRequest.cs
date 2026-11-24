using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Requests.ConversationApi;

/// <summary>
/// The inputs of the ConversationGetMessages operation.
/// </summary>
public sealed record ConversationGetMessagesRequest
{
    public required string Id { get; init; }

    [Minimum(0)]
    public int? Offset { get; init; } = 0;

    [Minimum(1)]
    [Maximum(500)]
    public int? Limit { get; init; } = 10;

    public string? Cursor { get; init; }
}
