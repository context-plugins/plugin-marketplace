using System.Net.Http;

namespace Beehiiv.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
