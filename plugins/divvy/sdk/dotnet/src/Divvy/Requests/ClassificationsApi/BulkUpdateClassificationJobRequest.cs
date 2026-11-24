using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the BulkUpdateClassificationJob operation.
/// </summary>
public sealed record BulkUpdateClassificationJobRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    [MinLength(1)]
    [MaxLength(50)]
    public required IReadOnlyList<UpdateClassificationJobWithIdRequestDto> Body { get; init; }
}
