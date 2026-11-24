namespace Divvy.Requests.VendorCredits;

/// <summary>
/// The inputs of the BulkArchiveVendorCredit operation.
/// </summary>
public sealed record BulkArchiveVendorCreditRequest
{
    public required string Ids { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
