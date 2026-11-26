using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the BulkCreateClassificationAccountingClass operation.
/// </summary>
public sealed record BulkCreateClassificationAccountingClassRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    [MinLength(1)]
    [MaxLength(50)]
    public required IReadOnlyList<CreateClassificationAccountingClassRequestDto> Body { get; init; }
}
