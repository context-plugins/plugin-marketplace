using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the GetClassificationJob operation.
/// </summary>
public sealed record GetClassificationJobRequest
{
    [MinLength(1)]
    public required string Id { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
