using System.Net.Http;

namespace Basiq.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
