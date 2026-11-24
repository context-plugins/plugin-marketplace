using System;
using Paid.Models;

namespace Paid.Requests.PricingApi;

/// <summary>
/// The inputs of the UpdatePricing operation.
/// </summary>
public sealed record UpdatePricingOperationRequest
{
    public required Guid ProductAttributeId { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public UpdatePricingRequest? Body { get; init; }
}
