using System.Net.Http;
using AwsStorageGateway.Core.Extensions;

namespace AwsStorageGateway.Core.Request;

internal sealed class EmptyBody : IRequest
{
    public static EmptyBody Instance { get; } = new();

    private EmptyBody() { }

    public HttpContent Get() => HttpContent.None;

    public bool CanRetry => true;
}
