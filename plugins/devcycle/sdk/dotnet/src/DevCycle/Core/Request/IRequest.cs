using System.Net.Http;

namespace DevCycle.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
