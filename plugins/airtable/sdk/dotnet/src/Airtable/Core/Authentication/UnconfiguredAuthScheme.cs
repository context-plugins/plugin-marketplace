using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Airtable.Core.Exceptions;
using Airtable.Core.Models;

namespace Airtable.Core.Authentication;

internal sealed class UnconfiguredAuthScheme(string name) : IAuthScheme
{
    public string Name { get; } = name;

    public ValueTask<AuthOutcome> Apply(HttpRequestMessage request, CancellationToken cancellationToken) =>
        throw AuthSchemeException.Unconfigured(CallContext.For(request), MissingSchemes.Of([[Name]]));
}
