using Deliverd.Models;

namespace Deliverd.Requests.Collections;

/// <summary>
/// The inputs of the PostApiV1Collections operation.
/// </summary>
public sealed record PostApiV1CollectionsRequest
{
    public ApiV1CollectionsRequest? Body { get; init; }
}
