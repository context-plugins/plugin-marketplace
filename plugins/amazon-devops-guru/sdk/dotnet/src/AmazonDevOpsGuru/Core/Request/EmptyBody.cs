using System.Net.Http;
using AmazonDevOpsGuru.Core.Extensions;

namespace AmazonDevOpsGuru.Core.Request;

internal sealed class EmptyBody : IRequest
{
    public static EmptyBody Instance { get; } = new();

    private EmptyBody() { }

    public HttpContent Get() => HttpContent.None;

    public bool CanRetry => true;
}
