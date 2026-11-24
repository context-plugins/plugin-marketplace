using System.Net.Http;

namespace Rendex.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
