using System.Net.Http;

namespace Surfe.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
