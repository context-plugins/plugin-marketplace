using System.Net.Http;

namespace AmazonSwf.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
