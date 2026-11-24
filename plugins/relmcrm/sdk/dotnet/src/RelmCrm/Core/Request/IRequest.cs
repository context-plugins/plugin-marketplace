using System.Net.Http;

namespace RelmCrm.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
