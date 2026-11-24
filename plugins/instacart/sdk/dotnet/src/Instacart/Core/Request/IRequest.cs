using System.Net.Http;

namespace Instacart.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
