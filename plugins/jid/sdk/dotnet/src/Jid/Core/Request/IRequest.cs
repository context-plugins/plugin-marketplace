using System.Net.Http;

namespace Jid.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
