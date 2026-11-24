using System.Net.Http;

namespace AtlassianCompass.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
