namespace FlowAccount.Requests.CreditNote;

/// <summary>
/// The inputs of the CreditNoteChangeStatusByKey operation.
/// </summary>
public sealed record CreditNoteChangeStatusByKeyRequest
{
    public required long DocumentId { get; init; }

    public required string? StatusKey { get; init; }

    public required string Culture { get; init; }
}
