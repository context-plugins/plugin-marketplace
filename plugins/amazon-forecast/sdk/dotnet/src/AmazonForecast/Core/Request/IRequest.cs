using System.Net.Http;

namespace AmazonForecast.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
