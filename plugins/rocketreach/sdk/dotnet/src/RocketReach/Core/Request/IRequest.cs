using System.Net.Http;

namespace RocketReach.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
