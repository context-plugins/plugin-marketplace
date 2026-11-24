using System.Net.Http;

namespace Apigee.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
