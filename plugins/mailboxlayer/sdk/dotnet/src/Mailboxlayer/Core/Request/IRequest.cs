using System.Net.Http;

namespace Mailboxlayer.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
