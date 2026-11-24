using System.Net.Http;

namespace Givebutter.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
