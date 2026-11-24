using System.Net.Http;

namespace CloudKit.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
