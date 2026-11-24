using System.Net.Http;

namespace Semrush.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
