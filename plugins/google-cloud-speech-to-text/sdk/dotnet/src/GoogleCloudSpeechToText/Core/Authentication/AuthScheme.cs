using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleCloudSpeechToText.Core.Exceptions;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Core.Authentication;

internal static class AuthScheme
{
    public static IAuthScheme None { get; } = new NoneScheme();

    public static IAuthScheme All(params IReadOnlyList<IAuthScheme> schemes) => new AllScheme(NonEmpty(schemes));

    public static IAuthScheme Any(params IReadOnlyList<IAuthScheme> schemes) => new AnyScheme(NonEmpty(schemes));

    extension(IAuthScheme scheme)
    {
        public IAuthScheme OrAnonymous() => new AnonymousFallbackScheme(scheme);
    }

    private static IReadOnlyList<IAuthScheme> NonEmpty(IReadOnlyList<IAuthScheme> schemes)
    {
        if (schemes is null or [])
            throw new ArgumentException("Must provide at least one scheme.", nameof(schemes));
        if (schemes.Any(s => s is null))
            throw new ArgumentException("All schemes must be non-null.", nameof(schemes));

        return schemes;
    }

    private sealed class NoneScheme : IAuthScheme
    {
        public ValueTask<AuthOutcome> Apply(HttpRequestMessage request, CancellationToken cancellationToken) => new(AuthOutcome.Applied);
    }

    /// <summary>
    /// Represents a set of schemes that must all apply (AND logic). A member with no credentials
    /// configured fails the call with <see cref="AuthSchemeException"/> before anything is applied;
    /// a member whose credential provider returns nothing ends the sequence with its unsatisfied
    /// <see cref="AuthOutcome"/>.
    /// </summary>
    private sealed class AllScheme : ICompositeAuthScheme
    {
        private readonly IReadOnlyList<IAuthScheme> _schemes;
        private readonly bool _isConfigured;
        private readonly bool _isRevocable;

        public AllScheme(IReadOnlyList<IAuthScheme> schemes)
        {
            _schemes = schemes;
            _isConfigured = schemes.All(s => s.IsConfigured());
            _isRevocable = _isConfigured && schemes.Any(s => s.IsRevocable());
        }

        bool ICompositeAuthScheme.IsConfigured => _isConfigured;

        bool ICompositeAuthScheme.IsRevocable => _isRevocable;

        IReadOnlyList<IReadOnlyList<string>> ICompositeAuthScheme.MissingAlternatives =>
            _isConfigured
                ? []
                : [[.. _schemes.SelectMany(s => s.MissingAlternatives()).SelectMany(alternative => alternative)]];

        public async ValueTask<AuthOutcome> Apply(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            if (!_isConfigured)
                throw AuthSchemeException.Unconfigured(CallContext.For(request), MissingSchemes.Of(this.MissingAlternatives()));

            foreach (var scheme in _schemes)
            {
                var outcome = await scheme.Apply(request, cancellationToken).ConfigureAwait(false);
                if (!outcome.IsApplied)
                    return outcome;
            }

            return AuthOutcome.Applied;
        }

        public async ValueTask Invalidate(HttpRequestMessage rejected, CancellationToken cancellationToken)
        {
            foreach (var scheme in _schemes.OfType<IRevocableAuthScheme>())
                await scheme.Invalidate(rejected, cancellationToken).ConfigureAwait(false);
        }
    }

    /// <summary>
    /// Represents multiple alternative schemes (OR logic).
    /// Schemes with no credentials configured are not candidates and are skipped; the first
    /// configured scheme that applies wins. A scheme whose credential provider returns nothing is
    /// unsatisfied and skipped as well; a scheme that throws has failed, and once every candidate
    /// was tried the call throws <see cref="AuthSchemeException"/> carrying the failures and naming
    /// any unsatisfied scheme. With no failure and nothing applied, the unsatisfied schemes are
    /// returned as the <see cref="AuthOutcome"/> for the engine to report, and with nothing
    /// configured at all the call throws <see cref="AuthSchemeException"/> naming the schemes it
    /// accepts.
    /// </summary>
    private sealed class AnyScheme : ICompositeAuthScheme
    {
        private readonly IReadOnlyList<IAuthScheme> _schemes;
        private readonly bool _isConfigured;
        private readonly bool _isRevocable;

        public AnyScheme(IReadOnlyList<IAuthScheme> schemes)
        {
            _schemes = schemes;
            _isConfigured = schemes.Any(s => s.IsConfigured());
            _isRevocable = schemes.Any(s => s.IsRevocable());
        }

        bool ICompositeAuthScheme.IsConfigured => _isConfigured;

        bool ICompositeAuthScheme.IsRevocable => _isRevocable;

        IReadOnlyList<IReadOnlyList<string>> ICompositeAuthScheme.MissingAlternatives =>
            _isConfigured ? [] : [.. _schemes.SelectMany(s => s.MissingAlternatives())];

        public async ValueTask<AuthOutcome> Apply(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            var failures = new List<Exception>();
            var unsatisfied = new List<string>();

            foreach (var scheme in _schemes)
            {
                if (!scheme.IsConfigured())
                    continue;

                try
                {
                    var outcome = await scheme.Apply(request, cancellationToken).ConfigureAwait(false);
                    if (!outcome.TryGetUnsatisfied(out var schemes))
                        return outcome;

                    unsatisfied.AddRange(schemes);
                }
                catch (OperationCanceledException) when (cancellationToken.IsCancellationRequested)
                {
                    throw;
                }
                catch (Exception ex)
                {
                    failures.Add(ex);
                }
            }

            if (failures.Count > 0)
                throw AuthSchemeException.Failed(CallContext.For(request), failures, unsatisfied);

            if (unsatisfied.Count > 0)
                return AuthOutcome.Unsatisfied(unsatisfied);

            throw AuthSchemeException.Unconfigured(CallContext.For(request), MissingSchemes.Of(this.MissingAlternatives()));
        }

        public async ValueTask Invalidate(HttpRequestMessage rejected, CancellationToken cancellationToken)
        {
            foreach (var scheme in _schemes.OfType<IRevocableAuthScheme>())
                await scheme.Invalidate(rejected, cancellationToken).ConfigureAwait(false);
        }
    }

    private sealed class AnonymousFallbackScheme(IAuthScheme scheme) : ICompositeAuthScheme
    {
        bool ICompositeAuthScheme.IsConfigured => true;

        bool ICompositeAuthScheme.IsRevocable => scheme.IsRevocable();

        IReadOnlyList<IReadOnlyList<string>> ICompositeAuthScheme.MissingAlternatives => [];

        public ValueTask<AuthOutcome> Apply(HttpRequestMessage request, CancellationToken cancellationToken) =>
            scheme.IsConfigured() ? scheme.Apply(request, cancellationToken) : new ValueTask<AuthOutcome>(AuthOutcome.Applied);

        public ValueTask Invalidate(HttpRequestMessage rejected, CancellationToken cancellationToken) =>
            scheme is IRevocableAuthScheme revocable ? revocable.Invalidate(rejected, cancellationToken) : default;
    }
}
