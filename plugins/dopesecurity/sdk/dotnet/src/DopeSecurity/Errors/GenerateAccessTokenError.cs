using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DopeSecurity.Core.ErrorResponse;
using DopeSecurity.Core.Models;
using DopeSecurity.Models;

namespace DopeSecurity.Errors;

public sealed class GenerateAccessTokenError : ApiError
{
    private readonly Optional<OAuthError> _oAuthErrorValue;

    private GenerateAccessTokenError(Optional<OAuthError> oAuthErrorValue, Optional<RawError> fallback) : base(fallback)
    {
        _oAuthErrorValue = oAuthErrorValue;
    }

    private static GenerateAccessTokenError AsOAuthError(OAuthError value) =>
        new(Optional<OAuthError>.Some(value), default);

    private static GenerateAccessTokenError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetOAuthError([NotNullWhen(true)] out OAuthError? value) => _oAuthErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<OAuthError, TResult> onOAuthError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetOAuthError(out var oAuthErrorValue) => onOAuthError(oAuthErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GenerateAccessTokenError)} holds no value.")
        };

    public void Match(Action<OAuthError> onOAuthError, Action<RawError> otherwise)
    {
        if (TryGetOAuthError(out var oAuthErrorValue)) onOAuthError(oAuthErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GenerateAccessTokenError)} holds no value.");
    }

    private static Task<GenerateAccessTokenError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 500 => response.Json<OAuthError>().As(AsOAuthError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GenerateAccessTokenError> Response { get; } = new(Create);
}
