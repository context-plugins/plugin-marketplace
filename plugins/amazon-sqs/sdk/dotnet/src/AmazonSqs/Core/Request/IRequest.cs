using System.Net.Http;

namespace AmazonSqs.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
