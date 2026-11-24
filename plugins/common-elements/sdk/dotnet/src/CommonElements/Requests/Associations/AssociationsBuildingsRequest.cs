using System;

namespace CommonElements.Requests.Associations;

/// <summary>
/// The inputs of the AssociationsBuildings operation.
/// </summary>
public sealed record AssociationsBuildingsRequest
{
    /// <summary>
    /// Association id.
    /// </summary>
    public required Guid Id { get; init; }
}
