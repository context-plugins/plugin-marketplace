using System;

namespace Dynamics365BusinessCentral.Requests.Features;

/// <summary>
/// The inputs of the DeactivateFeature operation.
/// </summary>
public sealed record DeactivateFeatureRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required string FeatureId { get; init; }
}
