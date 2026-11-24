using System.Net.Http;

namespace DidLogic.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
