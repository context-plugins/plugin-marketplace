using System.Net.Http;

namespace ApiVerve.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
