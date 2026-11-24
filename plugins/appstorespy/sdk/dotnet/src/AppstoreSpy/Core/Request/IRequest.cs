using System.Net.Http;

namespace AppstoreSpy.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
