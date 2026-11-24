using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Basiq.Core.Exceptions;
using Basiq.Core.Models;

namespace Basiq.Core.Authentication;

internal sealed class UnconfiguredAuthScheme(string name) : IAuthScheme
{
    public string Name { get; } = name;

    public ValueTask<AuthOutcome> Apply(HttpRequestMessage request, CancellationToken cancellationToken) =>
        throw AuthSchemeException.Unconfigured(CallContext.For(request), MissingSchemes.Of([[Name]]));
}
