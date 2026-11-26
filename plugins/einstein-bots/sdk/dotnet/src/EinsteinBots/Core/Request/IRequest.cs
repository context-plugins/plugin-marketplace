using System.Net.Http;

namespace EinsteinBots.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
