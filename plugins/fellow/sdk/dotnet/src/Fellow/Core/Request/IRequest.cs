using System.Net.Http;

namespace Fellow.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
