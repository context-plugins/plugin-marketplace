using System.Net.Http;
using AmazonRekognition.Core.Extensions;

namespace AmazonRekognition.Core.Request;

internal sealed class EmptyBody : IRequest
{
    public static EmptyBody Instance { get; } = new();

    private EmptyBody() { }

    public HttpContent Get() => HttpContent.None;

    public bool CanRetry => true;
}
