using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Givebutter.Core.ErrorResponse;
using Givebutter.Core.Models;
using Givebutter.Models;

namespace Givebutter.Errors;

public sealed class SsoCampaignsShowError : ApiError
{
    private readonly Optional<AuthenticationException1> _authenticationException1Value;

    private SsoCampaignsShowError(Optional<AuthenticationException1> authenticationException1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _authenticationException1Value = authenticationException1Value;
    }

    private static SsoCampaignsShowError AsAuthenticationException1(AuthenticationException1 value) =>
        new(Optional<AuthenticationException1>.Some(value), default);

    private static SsoCampaignsShowError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetAuthenticationException1([NotNullWhen(true)] out AuthenticationException1? value) =>
        _authenticationException1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<AuthenticationException1, TResult> onAuthenticationException1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAuthenticationException1(out var authenticationException1Value) => onAuthenticationException1(
                authenticationException1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SsoCampaignsShowError)} holds no value.")
        };

    public void Match(Action<AuthenticationException1> onAuthenticationException1, Action<RawError> otherwise)
    {
        if (TryGetAuthenticationException1(out var authenticationException1Value)) onAuthenticationException1(
            authenticationException1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SsoCampaignsShowError)} holds no value.");
    }

    private static Task<SsoCampaignsShowError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<AuthenticationException1>().As(AsAuthenticationException1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SsoCampaignsShowError> Response { get; } = new(Create);
}
