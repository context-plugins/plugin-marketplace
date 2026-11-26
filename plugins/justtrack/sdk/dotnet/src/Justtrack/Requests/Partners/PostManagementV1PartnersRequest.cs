using Justtrack.Models;

namespace Justtrack.Requests.Partners;

/// <summary>
/// The inputs of the PostManagementV1Partners operation.
/// </summary>
public sealed record PostManagementV1PartnersRequest
{
    public ListPartnersRequest? Body { get; init; }
}
