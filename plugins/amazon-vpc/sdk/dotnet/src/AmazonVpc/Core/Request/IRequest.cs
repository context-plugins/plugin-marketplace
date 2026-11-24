using System.Net.Http;

namespace AmazonVpc.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
