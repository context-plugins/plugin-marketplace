using CallNode.Models;

namespace CallNode.Requests.PhoneNumbers;

/// <summary>
/// The inputs of the PurchaseNumber operation.
/// </summary>
public sealed record PurchaseNumberOperationRequest
{
    public required PurchaseNumberRequest Body { get; init; }
}
