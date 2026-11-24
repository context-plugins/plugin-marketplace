using System.Net.Http;

namespace Buildkite.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
