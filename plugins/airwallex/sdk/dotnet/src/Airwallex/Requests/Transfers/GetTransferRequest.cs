namespace Airwallex.Requests.Transfers;

/// <summary>
/// The inputs of the GetTransfer operation.
/// </summary>
public sealed record GetTransferRequest
{
    public required string Id { get; init; }
}
