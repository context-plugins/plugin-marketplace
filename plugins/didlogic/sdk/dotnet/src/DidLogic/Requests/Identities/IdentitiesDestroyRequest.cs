namespace DidLogic.Requests.Identities;

/// <summary>
/// The inputs of the IdentitiesDestroy operation.
/// </summary>
public sealed record IdentitiesDestroyRequest
{
    /// <summary>
    /// Identity ID from identities_index, identities_create
    /// </summary>
    public required int Id { get; init; }
}
