using System.Net.Http;

namespace TranscriptFetch.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
