using System.Net.Http;
using AmazonFreeRtos.Core.Extensions;

namespace AmazonFreeRtos.Core.Request;

internal sealed class EmptyBody : IRequest
{
    public static EmptyBody Instance { get; } = new();

    private EmptyBody() { }

    public HttpContent Get() => HttpContent.None;

    public bool CanRetry => true;
}
