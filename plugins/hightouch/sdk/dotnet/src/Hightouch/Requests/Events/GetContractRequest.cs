namespace Hightouch.Requests.Events;

/// <summary>
/// The inputs of the GetContract operation.
/// </summary>
public sealed record GetContractRequest
{
    /// <summary>
    /// The id of the contract
    /// </summary>
    public required string ContractId { get; init; }
}
