using System.Net.Http;

namespace Bill.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
