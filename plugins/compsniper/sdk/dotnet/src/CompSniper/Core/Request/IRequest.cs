using System.Net.Http;

namespace CompSniper.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
