namespace Curlec.Requests.XContacts;

/// <summary>
/// The inputs of the FetchContact operation.
/// </summary>
public sealed record FetchContactRequest
{
    /// <summary>
    /// Unique identifier of the contact (e.g. <c>cont_00000000000001</c>).
    /// </summary>
    public required string ContactId { get; init; }
}
