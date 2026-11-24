using System.Net.Http;

namespace ReadMe.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
