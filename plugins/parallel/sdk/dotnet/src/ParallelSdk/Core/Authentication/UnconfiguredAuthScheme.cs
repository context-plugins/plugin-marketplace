using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using ParallelSdk.Core.Exceptions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Core.Authentication;

internal sealed class UnconfiguredAuthScheme(string name) : IAuthScheme
{
    public string Name { get; } = name;

    public ValueTask<AuthOutcome> Apply(HttpRequestMessage request, CancellationToken cancellationToken) =>
        throw AuthSchemeException.Unconfigured(CallContext.For(request), MissingSchemes.Of([[Name]]));
}
