using System.Net.Http;

namespace Sapling.Core.Request;

internal interface IRequest
{
    HttpContent Get();

    bool CanRetry { get; }
}
