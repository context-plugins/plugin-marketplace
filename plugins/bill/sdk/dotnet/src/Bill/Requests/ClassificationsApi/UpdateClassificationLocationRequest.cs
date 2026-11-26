using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the UpdateClassificationLocation operation.
/// </summary>
public sealed record UpdateClassificationLocationRequest
{
    [MinLength(1)]
    public required string Id { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required UpdateClassificationLocationRequestDto Body { get; init; }
}
