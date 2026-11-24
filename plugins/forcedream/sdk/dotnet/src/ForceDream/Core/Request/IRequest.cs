using System.Net.Http;

namespace ForceDream.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
