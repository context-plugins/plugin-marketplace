using Justtrack.Models;

namespace Justtrack.Requests.PartnerConfigurations;

/// <summary>
/// The inputs of the PutManagementV1PartnerConfigurationByFeature operation.
/// </summary>
public sealed record PutManagementV1PartnerConfigurationByFeatureRequest
{
    public required string Feature { get; init; }

    public UpsertPartnerConfigurationFeaturesRequest? Body { get; init; }
}
