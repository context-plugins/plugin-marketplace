namespace CommonElements.Requests.Associations;

/// <summary>
/// The inputs of the AssociationsRisk operation.
/// </summary>
public sealed record AssociationsRiskRequest
{
    /// <summary>
    /// Association ID from the lookup endpoint.
    /// </summary>
    public required string Id { get; init; }
}
