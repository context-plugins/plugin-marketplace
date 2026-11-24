using Applike.Models;

namespace Applike.Requests.Partners;

/// <summary>
/// The inputs of the PostManagementV1Partners operation.
/// </summary>
public sealed record PostManagementV1PartnersRequest
{
    public ListPartnersRequest? Body { get; init; }
}
