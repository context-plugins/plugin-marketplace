using Bill.Models;

namespace Bill.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the CreateClassificationJob operation.
/// </summary>
public sealed record CreateClassificationJobRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required CreateClassificationJobRequestDto Body { get; init; }
}
