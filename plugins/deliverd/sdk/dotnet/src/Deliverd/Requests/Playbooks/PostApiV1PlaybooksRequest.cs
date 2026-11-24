using Deliverd.Models;

namespace Deliverd.Requests.Playbooks;

/// <summary>
/// The inputs of the PostApiV1Playbooks operation.
/// </summary>
public sealed record PostApiV1PlaybooksRequest
{
    public ApiV1PlaybooksRequest? Body { get; init; }
}
