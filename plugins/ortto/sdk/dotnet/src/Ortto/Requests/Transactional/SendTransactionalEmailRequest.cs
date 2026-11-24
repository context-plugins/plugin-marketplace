using Ortto.Models;

namespace Ortto.Requests.Transactional;

/// <summary>
/// The inputs of the SendTransactionalEmail operation.
/// </summary>
public sealed record SendTransactionalEmailRequest
{
    public required TransactionalSendRequest Body { get; init; }
}
