using System.Net.Http;

namespace AmazonTranscribe.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
