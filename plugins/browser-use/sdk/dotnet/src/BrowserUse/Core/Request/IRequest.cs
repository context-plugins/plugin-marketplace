using System.Net.Http;

namespace BrowserUse.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
