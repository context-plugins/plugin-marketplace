using System.Net.Http;

namespace Postscript.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
