using Ortto.Models;

namespace Ortto.Requests.Transactional;

/// <summary>
/// The inputs of the SendTransactionalSms operation.
/// </summary>
public sealed record SendTransactionalSmsRequest
{
    public required TransactionalSendSmsRequest Body { get; init; }
}
