using System.Net.Http;

namespace BrowserStack.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
