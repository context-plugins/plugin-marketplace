using System.Net.Http;

namespace MicrosoftDynamicsNav.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
