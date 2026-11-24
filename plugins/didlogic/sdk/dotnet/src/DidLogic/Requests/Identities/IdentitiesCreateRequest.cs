using DidLogic.Models;

namespace DidLogic.Requests.Identities;

/// <summary>
/// The inputs of the IdentitiesCreate operation.
/// </summary>
public sealed record IdentitiesCreateRequest
{
    public required ApiV2IdentitiesRequest Body { get; init; }
}
