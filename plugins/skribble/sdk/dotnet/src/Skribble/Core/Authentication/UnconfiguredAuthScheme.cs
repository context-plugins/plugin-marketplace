using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Skribble.Core.Exceptions;
using Skribble.Core.Models;

namespace Skribble.Core.Authentication;

internal sealed class UnconfiguredAuthScheme(string name) : IAuthScheme
{
    public string Name { get; } = name;

    public ValueTask<AuthOutcome> Apply(HttpRequestMessage request, CancellationToken cancellationToken) =>
        throw AuthSchemeException.Unconfigured(CallContext.For(request), MissingSchemes.Of([[Name]]));
}
