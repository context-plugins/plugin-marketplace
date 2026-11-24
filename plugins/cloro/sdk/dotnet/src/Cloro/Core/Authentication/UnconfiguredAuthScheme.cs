using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Cloro.Core.Exceptions;
using Cloro.Core.Models;

namespace Cloro.Core.Authentication;

internal sealed class UnconfiguredAuthScheme(string name) : IAuthScheme
{
    public string Name { get; } = name;

    public ValueTask<AuthOutcome> Apply(HttpRequestMessage request, CancellationToken cancellationToken) =>
        throw AuthSchemeException.Unconfigured(CallContext.For(request), MissingSchemes.Of([[Name]]));
}
