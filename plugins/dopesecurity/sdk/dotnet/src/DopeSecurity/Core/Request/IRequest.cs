using System.Net.Http;

namespace DopeSecurity.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
