namespace Divvy.Requests.Payments;

/// <summary>
/// The inputs of the ListPaymentOptions operation.
/// </summary>
public sealed record ListPaymentOptionsRequest
{
    public required string VendorId { get; init; }

    public required double Amount { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
