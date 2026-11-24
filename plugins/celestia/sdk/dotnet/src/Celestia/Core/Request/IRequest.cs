using System.Net.Http;

namespace Celestia.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
