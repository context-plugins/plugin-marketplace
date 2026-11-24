using System.Net.Http;

namespace Apibara.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
