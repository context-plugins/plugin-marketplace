using System.Net.Http;

namespace AmazonDevOpsGuru.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
