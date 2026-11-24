using System.Net.Http;

namespace Curlec.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
