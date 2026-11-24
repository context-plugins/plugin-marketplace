using Deliverd.Models;

namespace Deliverd.Requests.Audiences;

/// <summary>
/// The inputs of the PostApiV1AudiencesResolve operation.
/// </summary>
public sealed record PostApiV1AudiencesResolveRequest
{
    public ApiV1AudiencesResolveRequest? Body { get; init; }
}
