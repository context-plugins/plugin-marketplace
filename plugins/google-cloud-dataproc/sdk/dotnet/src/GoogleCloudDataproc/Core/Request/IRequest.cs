using System.Net.Http;

namespace GoogleCloudDataproc.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
