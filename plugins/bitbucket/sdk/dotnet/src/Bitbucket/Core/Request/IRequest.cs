using System.Net.Http;

namespace Bitbucket.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
