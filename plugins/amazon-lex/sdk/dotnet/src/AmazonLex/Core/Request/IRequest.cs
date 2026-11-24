using System.Net.Http;

namespace AmazonLex.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
