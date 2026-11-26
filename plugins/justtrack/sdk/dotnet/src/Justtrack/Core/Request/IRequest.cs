using System.Net.Http;

namespace Justtrack.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
