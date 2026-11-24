using System.Net.Http;

namespace Applike.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
