using System.Net.Http;

namespace Unbounce.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
