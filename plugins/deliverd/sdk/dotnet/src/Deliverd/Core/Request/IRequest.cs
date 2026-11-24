using System.Net.Http;

namespace Deliverd.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
