namespace Curlec.Requests.Documents;

/// <summary>
/// The inputs of the FetchDocumentContent operation.
/// </summary>
public sealed record FetchDocumentContentRequest
{
    /// <summary>
    /// Document ID. Exactly 14 alphanumeric characters.
    /// </summary>
    public required string Id { get; init; }
}
