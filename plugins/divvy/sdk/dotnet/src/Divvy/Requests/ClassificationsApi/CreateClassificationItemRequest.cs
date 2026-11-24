using Divvy.Models;

namespace Divvy.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the CreateClassificationItem operation.
/// </summary>
public sealed record CreateClassificationItemRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required CreateClassificationItemRequestDto Body { get; init; }
}
