using System.Net.Http;

namespace OddsRelay.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
