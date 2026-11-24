using System.Net.Http;

namespace S1.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
