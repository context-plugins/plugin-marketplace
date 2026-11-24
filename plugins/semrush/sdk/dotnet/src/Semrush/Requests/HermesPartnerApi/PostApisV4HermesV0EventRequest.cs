using Semrush.Models;

namespace Semrush.Requests.HermesPartnerApi;

/// <summary>
/// The inputs of the PostApisV4HermesV0Event operation.
/// </summary>
public sealed record PostApisV4HermesV0EventRequest
{
    public CreateEventRequest? Body { get; init; }
}
