using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the BulkUpdateClassificationLocation operation.
/// </summary>
public sealed record BulkUpdateClassificationLocationRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    [MinLength(1)]
    [MaxLength(50)]
    public required IReadOnlyList<UpdateClassificationLocationWithIdRequestDto> Body { get; init; }
}
