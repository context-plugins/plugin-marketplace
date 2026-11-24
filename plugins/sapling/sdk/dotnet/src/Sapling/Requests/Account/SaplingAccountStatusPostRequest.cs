using Sapling.Models;

namespace Sapling.Requests.Account;

/// <summary>
/// The inputs of the SaplingAccountStatusPost operation.
/// </summary>
public sealed record SaplingAccountStatusPostRequest
{
    public ApiV1AccountStatusRequest? Body { get; init; }
}
