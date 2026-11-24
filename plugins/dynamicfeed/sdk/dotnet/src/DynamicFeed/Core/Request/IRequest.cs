using System.Net.Http;

namespace DynamicFeed.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
