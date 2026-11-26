using System;

namespace Dynamics365BusinessCentral.Requests.Features;

/// <summary>
/// The inputs of the ListFeatures operation.
/// </summary>
public sealed record ListFeaturesRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }
}
