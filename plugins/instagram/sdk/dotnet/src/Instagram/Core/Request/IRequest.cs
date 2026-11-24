using System.Net.Http;

namespace Instagram.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
