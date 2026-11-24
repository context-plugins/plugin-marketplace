using System.Net.Http;

namespace JuriSign.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
