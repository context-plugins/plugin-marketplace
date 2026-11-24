using System.Net.Http;

namespace Compabase.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
