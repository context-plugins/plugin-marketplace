namespace FlowAccount.Requests.BillingNote;

/// <summary>
/// The inputs of the BillingNoteChangeStatusByKey operation.
/// </summary>
public sealed record BillingNoteChangeStatusByKeyRequest
{
    public required long DocumentId { get; init; }

    public required string? StatusKey { get; init; }

    public required string Culture { get; init; }
}
