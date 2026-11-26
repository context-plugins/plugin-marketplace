using Bill.Models;

namespace Bill.Requests.Partner;

/// <summary>
/// The inputs of the LoginAsUser operation.
/// </summary>
public sealed record LoginAsUserRequest
{
    public string? SessionId { get; init; }

    public string? AppKey { get; init; }

    public required LoginAsUserRequestDto Body { get; init; }
}
