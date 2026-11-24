using Divvy.Models;

namespace Divvy.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the CreateClassificationAccountingClass operation.
/// </summary>
public sealed record CreateClassificationAccountingClassRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required CreateClassificationAccountingClassRequestDto Body { get; init; }
}
