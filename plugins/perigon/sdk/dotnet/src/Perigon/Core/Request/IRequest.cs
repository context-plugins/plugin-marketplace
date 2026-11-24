using System.Net.Http;

namespace Perigon.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
