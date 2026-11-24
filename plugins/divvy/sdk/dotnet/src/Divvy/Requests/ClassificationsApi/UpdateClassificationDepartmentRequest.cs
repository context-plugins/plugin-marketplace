using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the UpdateClassificationDepartment operation.
/// </summary>
public sealed record UpdateClassificationDepartmentRequest
{
    [MinLength(1)]
    public required string Id { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required UpdateClassificationDepartmentRequestDto Body { get; init; }
}
