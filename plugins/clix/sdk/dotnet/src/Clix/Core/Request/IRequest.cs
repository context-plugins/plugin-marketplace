using System.Net.Http;

namespace Clix.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
