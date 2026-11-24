using System.Net.Http;

namespace Stoplight.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
