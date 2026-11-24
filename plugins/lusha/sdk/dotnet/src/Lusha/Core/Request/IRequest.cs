using System.Net.Http;

namespace Lusha.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
