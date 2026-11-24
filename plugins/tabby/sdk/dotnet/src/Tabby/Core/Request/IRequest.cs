using System.Net.Http;

namespace Tabby.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
