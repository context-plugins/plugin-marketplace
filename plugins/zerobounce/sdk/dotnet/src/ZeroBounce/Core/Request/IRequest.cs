using System.Net.Http;

namespace ZeroBounce.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
