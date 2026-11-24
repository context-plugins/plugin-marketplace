using System.Net.Http;

namespace DoiT.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
