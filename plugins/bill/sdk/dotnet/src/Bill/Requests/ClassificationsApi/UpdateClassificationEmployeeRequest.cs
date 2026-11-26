using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the UpdateClassificationEmployee operation.
/// </summary>
public sealed record UpdateClassificationEmployeeRequest
{
    [MinLength(1)]
    public required string Id { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required UpdateClassificationEmployeeRequestDto Body { get; init; }
}
