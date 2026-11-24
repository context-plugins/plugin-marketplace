using Deliverd.Models;

namespace Deliverd.Requests.Drafts;

/// <summary>
/// The inputs of the PostApiV1Drafts operation.
/// </summary>
public sealed record PostApiV1DraftsRequest
{
    public ApiV1DraftsRequest? Body { get; init; }
}
