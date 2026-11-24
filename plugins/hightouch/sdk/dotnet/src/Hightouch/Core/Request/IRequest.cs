using System.Net.Http;

namespace Hightouch.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
