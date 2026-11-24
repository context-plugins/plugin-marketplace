using System.Net.Http;

namespace MailerLite.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
