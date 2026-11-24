using System.Net.Http;

namespace Ortto.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
