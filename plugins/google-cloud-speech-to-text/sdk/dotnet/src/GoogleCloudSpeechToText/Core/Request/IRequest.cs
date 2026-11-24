using System.Net.Http;

namespace GoogleCloudSpeechToText.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
