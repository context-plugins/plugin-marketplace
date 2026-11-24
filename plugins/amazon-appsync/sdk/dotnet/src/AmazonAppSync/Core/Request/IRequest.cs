using System.Net.Http;

namespace AmazonAppSync.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
