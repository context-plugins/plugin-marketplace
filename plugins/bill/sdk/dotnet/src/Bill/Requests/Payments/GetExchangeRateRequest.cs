namespace Bill.Requests.Payments;

/// <summary>
/// The inputs of the GetExchangeRate operation.
/// </summary>
public sealed record GetExchangeRateRequest
{
    public required string VendorId { get; init; }

    public required double Amount { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
