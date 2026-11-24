using System.Net.Http;

namespace Cubic.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
