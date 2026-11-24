using System.Net.Http;

namespace GoogleSearchConsole.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
