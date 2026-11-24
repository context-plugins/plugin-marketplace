namespace FlowAccount.Requests.BillingNote;

/// <summary>
/// The inputs of the BillingNoteDelete operation.
/// </summary>
public sealed record BillingNoteDeleteRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
