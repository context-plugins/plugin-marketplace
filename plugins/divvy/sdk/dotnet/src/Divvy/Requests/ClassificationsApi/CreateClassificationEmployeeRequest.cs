using Divvy.Models;

namespace Divvy.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the CreateClassificationEmployee operation.
/// </summary>
public sealed record CreateClassificationEmployeeRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required CreateClassificationEmployeeRequestDto Body { get; init; }
}
