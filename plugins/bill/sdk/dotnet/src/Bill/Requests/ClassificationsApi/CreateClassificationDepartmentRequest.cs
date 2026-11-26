using Bill.Models;

namespace Bill.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the CreateClassificationDepartment operation.
/// </summary>
public sealed record CreateClassificationDepartmentRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required CreateClassificationDepartmentRequestDto Body { get; init; }
}
