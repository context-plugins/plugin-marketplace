using System.Net.Http;

namespace Upstox.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
