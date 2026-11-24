using System.Net.Http;

namespace GoogleTranslate.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
