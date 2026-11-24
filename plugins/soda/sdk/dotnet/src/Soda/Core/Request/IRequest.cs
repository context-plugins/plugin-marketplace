using System.Net.Http;

namespace Soda.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
