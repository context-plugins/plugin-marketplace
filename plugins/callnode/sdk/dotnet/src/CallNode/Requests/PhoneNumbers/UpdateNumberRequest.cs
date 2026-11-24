using CallNode.Models;

namespace CallNode.Requests.PhoneNumbers;

/// <summary>
/// The inputs of the UpdateNumber operation.
/// </summary>
public sealed record UpdateNumberRequest
{
    /// <summary>
    /// The number's <c>id</c>, or the E.164 number itself (URL-encode the <c>+</c>, e.g. <c>%2B18285551234</c>).
    /// </summary>
    public required string Id { get; init; }

    public required ApiV1NumbersRequest Body { get; init; }
}
