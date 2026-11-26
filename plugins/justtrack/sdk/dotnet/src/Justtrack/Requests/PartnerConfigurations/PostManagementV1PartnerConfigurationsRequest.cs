using Justtrack.Models;

namespace Justtrack.Requests.PartnerConfigurations;

/// <summary>
/// The inputs of the PostManagementV1PartnerConfigurations operation.
/// </summary>
public sealed record PostManagementV1PartnerConfigurationsRequest
{
    public ListPartnerConfigurationsRequest? Body { get; init; }
}
