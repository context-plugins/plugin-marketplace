using System.Net.Http;

namespace CallNode.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
