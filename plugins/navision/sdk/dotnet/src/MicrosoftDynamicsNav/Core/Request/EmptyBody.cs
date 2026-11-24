using System.Net.Http;
using MicrosoftDynamicsNav.Core.Extensions;

namespace MicrosoftDynamicsNav.Core.Request;

internal sealed class EmptyBody : IRequest
{
    public static EmptyBody Instance { get; } = new();

    private EmptyBody() { }

    public HttpContent Get() => HttpContent.None;

    public bool CanRetry => true;
}
