using System.Net.Http;

namespace Coresignal.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
