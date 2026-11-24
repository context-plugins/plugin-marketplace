using System.Net.Http;

namespace MrScraper.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
