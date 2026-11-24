using System.Net.Http;

namespace FirefliesAi.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
