using System.Net.Http;
using Dynamics365BusinessCentral.Core.Extensions;

namespace Dynamics365BusinessCentral.Core.Request;

internal sealed class EmptyBody : IRequest
{
    public static EmptyBody Instance { get; } = new();

    private EmptyBody() { }

    public HttpContent Get() => HttpContent.None;

    public bool CanRetry => true;
}
