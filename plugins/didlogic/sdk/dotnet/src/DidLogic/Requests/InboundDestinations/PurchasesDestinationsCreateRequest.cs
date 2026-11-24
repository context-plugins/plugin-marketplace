using DidLogic.Models;

namespace DidLogic.Requests.InboundDestinations;

/// <summary>
/// The inputs of the PurchasesDestinationsCreate operation.
/// </summary>
public sealed record PurchasesDestinationsCreateRequest
{
    /// <summary>
    /// Purchased number id or number from numbers_index, purchases_index: the phone <b>number</b> (e.g. <c>43800327987</c>) or the numeric <b>inventory id</b> (e.g. <c>21869</c>). Both resolve the same DID.
    /// </summary>
    public required string PurchaseId { get; init; }

    public required ApiV1PurchasesDestinationsRequest Body { get; init; }
}
