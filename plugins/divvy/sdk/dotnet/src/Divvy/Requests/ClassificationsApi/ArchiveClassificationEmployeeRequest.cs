using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the ArchiveClassificationEmployee operation.
/// </summary>
public sealed record ArchiveClassificationEmployeeRequest
{
    [MinLength(1)]
    public required string Id { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
