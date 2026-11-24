using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Celestia.Core.Exceptions;
using Celestia.Core.Models;

namespace Celestia.Core.Authentication;

internal sealed class UnconfiguredAuthScheme(string name) : IAuthScheme
{
    public string Name { get; } = name;

    public ValueTask<AuthOutcome> Apply(HttpRequestMessage request, CancellationToken cancellationToken) =>
        throw AuthSchemeException.Unconfigured(CallContext.For(request), MissingSchemes.Of([[Name]]));
}
