using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonComprehend.Core.Exceptions;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Core.Authentication;

internal sealed class UnconfiguredAuthScheme(string name) : IAuthScheme
{
    public string Name { get; } = name;

    public ValueTask<AuthOutcome> Apply(HttpRequestMessage request, CancellationToken cancellationToken) =>
        throw AuthSchemeException.Unconfigured(CallContext.For(request), MissingSchemes.Of([[Name]]));
}
