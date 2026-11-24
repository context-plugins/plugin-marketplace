using System.Net.Http;

namespace GoogleCloudEventarc.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
