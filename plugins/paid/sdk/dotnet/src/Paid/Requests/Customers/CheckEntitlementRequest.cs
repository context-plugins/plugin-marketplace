using Paid.Models.Enums;

namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the CheckEntitlement operation.
/// </summary>
public sealed record CheckEntitlementRequest
{
    /// <summary>
    /// The customer ID
    /// </summary>
    public required string CustomerId { get; init; }

    /// <summary>
    /// The name of the usage event to check entitlement for
    /// </summary>
    public required string EventName { get; init; }

    /// <summary>
    /// Filter view - 'all' returns all entitlements regardless of status, 'active_only' returns only currently active entitlements with available credits
    /// </summary>
    public CustomersCustomerIdEntitlementGetParametersView View { get; init; } = CustomersCustomerIdEntitlementGetParametersView.ActiveOnly;

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
