using System.Net.Http;

namespace BetterStack.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
