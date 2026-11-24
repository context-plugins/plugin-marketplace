namespace CallNode.Requests.PhoneNumbers;

/// <summary>
/// The inputs of the ReleaseNumber operation.
/// </summary>
public sealed record ReleaseNumberRequest
{
    /// <summary>
    /// The number's <c>id</c>, or the E.164 number itself (URL-encode the <c>+</c>, e.g. <c>%2B18285551234</c>).
    /// </summary>
    public required string Id { get; init; }
}
