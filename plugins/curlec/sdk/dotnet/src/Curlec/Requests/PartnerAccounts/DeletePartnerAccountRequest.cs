namespace Curlec.Requests.PartnerAccounts;

/// <summary>
/// The inputs of the DeletePartnerAccount operation.
/// </summary>
public sealed record DeletePartnerAccountRequest
{
    /// <summary>
    /// Account ID with prefix acc_
    /// </summary>
    public required string AccountId { get; init; }
}
