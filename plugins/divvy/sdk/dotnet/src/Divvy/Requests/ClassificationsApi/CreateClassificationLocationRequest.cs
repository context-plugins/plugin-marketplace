using Divvy.Models;

namespace Divvy.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the CreateClassificationLocation operation.
/// </summary>
public sealed record CreateClassificationLocationRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required CreateClassificationLocationRequestDto Body { get; init; }
}
