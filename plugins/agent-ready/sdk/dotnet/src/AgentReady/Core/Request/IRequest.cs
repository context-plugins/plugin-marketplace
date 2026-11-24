using System.Net.Http;

namespace AgentReady.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
