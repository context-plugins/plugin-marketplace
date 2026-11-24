namespace Semrush.Requests.HermesPartnerApi;

/// <summary>
/// The inputs of the GetApisV4HermesV0UserByUserIdSubscriptionById operation.
/// </summary>
public sealed record GetApisV4HermesV0UserByUserIdSubscriptionByIdRequest
{
    /// <summary>
    /// User id
    /// </summary>
    public required int UserId { get; init; }

    /// <summary>
    /// Subscription id
    /// </summary>
    public required int Id { get; init; }
}
