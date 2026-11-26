using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the BulkCreateClassificationItem operation.
/// </summary>
public sealed record BulkCreateClassificationItemRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    [MinLength(1)]
    [MaxLength(50)]
    public required IReadOnlyList<CreateClassificationItemRequestDto> Body { get; init; }
}
