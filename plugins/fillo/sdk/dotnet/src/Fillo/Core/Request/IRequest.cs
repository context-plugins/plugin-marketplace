using System.Net.Http;

namespace Fillo.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
