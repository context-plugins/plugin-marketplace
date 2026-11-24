namespace FlowAccount.Requests.BillingNote;

/// <summary>
/// The inputs of the BillingNoteDetails operation.
/// </summary>
public sealed record BillingNoteDetailsRequest
{
    /// <summary>
    /// Sql DocumentId
    /// </summary>
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
