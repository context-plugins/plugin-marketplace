using System.Net.Http;

namespace Hud.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
