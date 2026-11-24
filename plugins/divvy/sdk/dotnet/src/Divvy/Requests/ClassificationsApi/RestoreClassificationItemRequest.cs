using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the RestoreClassificationItem operation.
/// </summary>
public sealed record RestoreClassificationItemRequest
{
    [MinLength(1)]
    public required string Id { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
