using System.Net.Http;

namespace GoogleAnalytics.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
