using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the RestoreClassificationLocation operation.
/// </summary>
public sealed record RestoreClassificationLocationRequest
{
    [MinLength(1)]
    public required string Id { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
