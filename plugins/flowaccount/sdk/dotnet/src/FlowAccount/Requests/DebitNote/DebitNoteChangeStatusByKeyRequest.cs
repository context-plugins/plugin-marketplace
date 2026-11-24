namespace FlowAccount.Requests.DebitNote;

/// <summary>
/// The inputs of the DebitNoteChangeStatusByKey operation.
/// </summary>
public sealed record DebitNoteChangeStatusByKeyRequest
{
    public required long DocumentId { get; init; }

    public required string? StatusKey { get; init; }

    public required string Culture { get; init; }
}
