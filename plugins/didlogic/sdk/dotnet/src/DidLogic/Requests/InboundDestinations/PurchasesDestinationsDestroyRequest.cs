namespace DidLogic.Requests.InboundDestinations;

/// <summary>
/// The inputs of the PurchasesDestinationsDestroy operation.
/// </summary>
public sealed record PurchasesDestinationsDestroyRequest
{
    /// <summary>
    /// Purchased number id or number from numbers_index, purchases_index: the phone <b>number</b> (e.g. <c>43800327987</c>) or the numeric <b>inventory id</b> (e.g. <c>21869</c>). Both resolve the same DID.
    /// </summary>
    public required string PurchaseId { get; init; }

    /// <summary>
    /// Destination id from purchases_destinations_index, purchases_destinations_create
    /// </summary>
    public required int Id { get; init; }
}
