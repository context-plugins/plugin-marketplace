using System.Net.Http;

namespace Leadspace.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
