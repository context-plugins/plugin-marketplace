using System.Net.Http;

namespace Cosmic.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
