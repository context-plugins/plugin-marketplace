using System.Net.Http;

namespace Crawl4Ai.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
