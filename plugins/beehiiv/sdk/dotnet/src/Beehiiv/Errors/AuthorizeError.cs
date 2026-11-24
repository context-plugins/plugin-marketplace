using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Beehiiv.Core.ErrorResponse;
using Beehiiv.Core.Models;
using Beehiiv.Models;

namespace Beehiiv.Errors;

public sealed class AuthorizeError : ApiError
{
    private readonly Optional<OAuthError> _oAuthErrorValue;

    private AuthorizeError(Optional<OAuthError> oAuthErrorValue, Optional<RawError> fallback) : base(fallback)
    {
        _oAuthErrorValue = oAuthErrorValue;
    }

    private static AuthorizeError AsOAuthError(OAuthError value) => new(Optional<OAuthError>.Some(value), default);

    private static AuthorizeError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetOAuthError([NotNullWhen(true)] out OAuthError? value) => _oAuthErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<OAuthError, TResult> onOAuthError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetOAuthError(out var oAuthErrorValue) => onOAuthError(oAuthErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AuthorizeError)} holds no value.")
        };

    public void Match(Action<OAuthError> onOAuthError, Action<RawError> otherwise)
    {
        if (TryGetOAuthError(out var oAuthErrorValue)) onOAuthError(oAuthErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AuthorizeError)} holds no value.");
    }

    private static Task<AuthorizeError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 => response.Json<OAuthError>().As(AsOAuthError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AuthorizeError> Response { get; } = new(Create);
}
