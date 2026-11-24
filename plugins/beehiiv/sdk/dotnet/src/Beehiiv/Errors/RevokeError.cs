using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Beehiiv.Core.ErrorResponse;
using Beehiiv.Core.Models;
using Beehiiv.Models;

namespace Beehiiv.Errors;

public sealed class RevokeError : ApiError
{
    private readonly Optional<OAuthError> _oAuthErrorValue;

    private RevokeError(Optional<OAuthError> oAuthErrorValue, Optional<RawError> fallback) : base(fallback)
    {
        _oAuthErrorValue = oAuthErrorValue;
    }

    private static RevokeError AsOAuthError(OAuthError value) => new(Optional<OAuthError>.Some(value), default);

    private static RevokeError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetOAuthError([NotNullWhen(true)] out OAuthError? value) => _oAuthErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<OAuthError, TResult> onOAuthError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetOAuthError(out var oAuthErrorValue) => onOAuthError(oAuthErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(RevokeError)} holds no value.")
        };

    public void Match(Action<OAuthError> onOAuthError, Action<RawError> otherwise)
    {
        if (TryGetOAuthError(out var oAuthErrorValue)) onOAuthError(oAuthErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(RevokeError)} holds no value.");
    }

    private static Task<RevokeError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 403 => response.Json<OAuthError>().As(AsOAuthError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<RevokeError> Response { get; } = new(Create);
}
