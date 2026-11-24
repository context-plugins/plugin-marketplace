using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the BulkCreateClassificationEmployee operation.
/// </summary>
public sealed record BulkCreateClassificationEmployeeRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    [MinLength(1)]
    [MaxLength(50)]
    public required IReadOnlyList<CreateClassificationEmployeeRequestDto> Body { get; init; }
}
