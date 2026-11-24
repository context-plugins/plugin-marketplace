using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace RelmCrm.Core.Authentication;

internal interface IAuthScheme
{
    ValueTask<AuthOutcome> Apply(HttpRequestMessage request, CancellationToken cancellationToken);
}

internal interface IScopedAuthScheme : IAuthScheme
{
    IAuthScheme ForScopes(ReadOnlySpan<string> scopes);
}

internal interface ICompositeAuthScheme : IRevocableAuthScheme
{
    bool IsConfigured { get; }

    bool IsRevocable { get; }

    IReadOnlyList<IReadOnlyList<string>> MissingAlternatives { get; }
}

internal static class AuthSchemeExtensions
{
    extension(IAuthScheme scheme)
    {
        public bool IsConfigured() => scheme switch
        {
            UnconfiguredAuthScheme => false,
            ICompositeAuthScheme composite => composite.IsConfigured,
            _ => true,
        };

        public IReadOnlyList<IReadOnlyList<string>> MissingAlternatives() => scheme switch
        {
            UnconfiguredAuthScheme unconfigured => [[unconfigured.Name]],
            ICompositeAuthScheme composite => composite.MissingAlternatives,
            _ => [],
        };

        public bool IsRevocable() => scheme switch
        {
            ICompositeAuthScheme composite => composite.IsRevocable,
            _ => scheme is IRevocableAuthScheme,
        };

        public IAuthScheme ForScopes(params ReadOnlySpan<string> scopes) =>
            scheme is IScopedAuthScheme scoped ? scoped.ForScopes(scopes) : scheme;
    }
}
