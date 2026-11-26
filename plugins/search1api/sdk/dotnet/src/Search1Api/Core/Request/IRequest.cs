using System.Net.Http;

namespace Search1Api.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
