using System.Net.Http;

namespace LastDatabase.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
