using System.Net.Http;

namespace CodeQr.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
