namespace DidLogic.Requests.InboundDestinations;

/// <summary>
/// The inputs of the PurchasesDestinationsIndex operation.
/// </summary>
public sealed record PurchasesDestinationsIndexRequest
{
    /// <summary>
    /// Purchased number id or number from numbers_index, purchases_index: the phone <b>number</b> (e.g. <c>43800327987</c>) or the numeric <b>inventory id</b> (e.g. <c>21869</c>). Both resolve the same DID.
    /// </summary>
    public required string PurchaseId { get; init; }
}
