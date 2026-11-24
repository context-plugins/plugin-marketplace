using ApiVerve.Models;

namespace ApiVerve.Requests.Security;

/// <summary>
/// The inputs of the Hmac operation.
/// </summary>
public sealed record HmacRequest
{
    public required V1HmacRequest Body { get; init; }
}
