using Applike.Models;

namespace Applike.Requests.PartnerConfigurations;

/// <summary>
/// The inputs of the PostManagementV1PartnerConfigurationByFeature operation.
/// </summary>
public sealed record PostManagementV1PartnerConfigurationByFeatureRequest
{
    public required string Feature { get; init; }

    public ListPartnerConfigurationFeaturesRequest? Body { get; init; }
}
