namespace CommonElements.Requests.Associations;

/// <summary>
/// The inputs of the AssociationsBuildingSafety operation.
/// </summary>
public sealed record AssociationsBuildingSafetyRequest
{
    /// <summary>
    /// Association UUID.
    /// </summary>
    public required string Id { get; init; }
}
