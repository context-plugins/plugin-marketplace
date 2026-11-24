using System.Net.Http;

namespace CommonElements.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
