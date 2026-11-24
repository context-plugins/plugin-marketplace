using System.Net.Http;

namespace GoogleCloudDatastream.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
