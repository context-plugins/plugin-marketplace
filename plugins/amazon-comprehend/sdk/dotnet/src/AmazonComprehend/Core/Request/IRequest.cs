using System.Net.Http;

namespace AmazonComprehend.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
