using System.Net.Http;

namespace FinixApiReference.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
