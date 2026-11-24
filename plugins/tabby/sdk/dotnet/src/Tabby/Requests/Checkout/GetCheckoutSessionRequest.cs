using System;

namespace Tabby.Requests.Checkout;

/// <summary>
/// The inputs of the GetCheckoutSession operation.
/// </summary>
public sealed record GetCheckoutSessionRequest
{
    /// <summary>
    /// ID of the session.
    /// </summary>
    public required Guid Id { get; init; }
}
