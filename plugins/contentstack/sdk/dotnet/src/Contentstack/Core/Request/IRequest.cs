using System.Net.Http;

namespace Contentstack.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
