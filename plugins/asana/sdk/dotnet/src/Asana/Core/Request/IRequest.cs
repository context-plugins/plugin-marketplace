using System.Net.Http;

namespace Asana.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
