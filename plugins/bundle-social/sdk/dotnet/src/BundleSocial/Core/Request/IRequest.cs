using System.Net.Http;

namespace BundleSocial.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
