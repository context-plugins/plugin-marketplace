using System.Net.Http;

namespace FlowAccount.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
