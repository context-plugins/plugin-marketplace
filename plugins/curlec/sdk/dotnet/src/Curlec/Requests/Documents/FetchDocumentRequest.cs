namespace Curlec.Requests.Documents;

/// <summary>
/// The inputs of the FetchDocument operation.
/// </summary>
public sealed record FetchDocumentRequest
{
    /// <summary>
    /// Document ID (doc_*). Exactly 14 alphanumeric characters.
    /// </summary>
    public required string Id { get; init; }
}
