using System.Net.Http;

namespace Lili.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
