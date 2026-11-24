using System.Net.Http;

namespace SalesforceServiceCloud.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
