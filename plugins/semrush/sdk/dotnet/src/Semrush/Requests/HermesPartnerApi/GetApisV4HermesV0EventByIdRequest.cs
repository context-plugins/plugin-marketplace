using System;

namespace Semrush.Requests.HermesPartnerApi;

/// <summary>
/// The inputs of the GetApisV4HermesV0EventById operation.
/// </summary>
public sealed record GetApisV4HermesV0EventByIdRequest
{
    /// <summary>
    /// Subscription id
    /// </summary>
    public required Guid Id { get; init; }
}
