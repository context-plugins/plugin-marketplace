using System.Net.Http;

namespace Dynamics365BusinessCentral.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
