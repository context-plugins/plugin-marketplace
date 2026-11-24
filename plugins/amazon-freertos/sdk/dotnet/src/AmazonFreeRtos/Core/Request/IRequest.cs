using System.Net.Http;

namespace AmazonFreeRtos.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
