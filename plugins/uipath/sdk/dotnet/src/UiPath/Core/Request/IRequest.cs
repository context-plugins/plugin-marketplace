using System.Net.Http;

namespace UiPath.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
