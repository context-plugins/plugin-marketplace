using System.Net.Http;

namespace Zillapi.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
