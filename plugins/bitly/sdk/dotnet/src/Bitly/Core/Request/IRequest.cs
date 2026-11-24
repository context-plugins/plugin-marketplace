using System.Net.Http;

namespace Bitly.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
