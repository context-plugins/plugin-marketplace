using System.Net.Http;

namespace AmazonEbs.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
