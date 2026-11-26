using System;
using Dynamics365BusinessCentral.Models;

namespace Dynamics365BusinessCentral.Requests.Features;

/// <summary>
/// The inputs of the ActivateFeature operation.
/// </summary>
public sealed record ActivateFeatureRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required string FeatureId { get; init; }

    public CompaniesApiFeaturesApiMicrosoftNavActivateRequest? Body { get; init; }
}
