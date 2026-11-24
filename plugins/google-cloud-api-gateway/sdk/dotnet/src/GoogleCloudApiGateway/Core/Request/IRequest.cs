using System.Net.Http;

namespace GoogleCloudApiGateway.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
