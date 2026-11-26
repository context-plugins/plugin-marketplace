using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the BulkUpdateClassificationDepartment operation.
/// </summary>
public sealed record BulkUpdateClassificationDepartmentRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    [MinLength(1)]
    [MaxLength(50)]
    public required IReadOnlyList<UpdateClassificationDepartmentWithIdRequestDto> Body { get; init; }
}
