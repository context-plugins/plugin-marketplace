using System.Net.Http;

namespace ParallelSdk.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
