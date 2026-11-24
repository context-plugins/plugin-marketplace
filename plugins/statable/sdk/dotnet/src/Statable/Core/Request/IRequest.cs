using System.Net.Http;

namespace Statable.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
