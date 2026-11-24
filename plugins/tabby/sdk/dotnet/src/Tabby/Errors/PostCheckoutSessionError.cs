using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Tabby.Core.ErrorResponse;
using Tabby.Core.Models;
using Tabby.Models;

namespace Tabby.Errors;

public sealed class PostCheckoutSessionError : ApiError
{
    private readonly Optional<Error400CheckoutPost> _error400CheckoutPostValue;

    private readonly Optional<Error401MerchantNull> _error401MerchantNullValue;

    private readonly Optional<Error403> _error403Value;

    private readonly Optional<string> _stringValue;

    private PostCheckoutSessionError(Optional<Error400CheckoutPost> error400CheckoutPostValue,
        Optional<Error401MerchantNull> error401MerchantNullValue,
        Optional<Error403> error403Value,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _error400CheckoutPostValue = error400CheckoutPostValue;
        _error401MerchantNullValue = error401MerchantNullValue;
        _error403Value = error403Value;
        _stringValue = stringValue;
    }

    private static PostCheckoutSessionError AsError400CheckoutPost(Error400CheckoutPost value) =>
        new(Optional<Error400CheckoutPost>.Some(value), default, default, default, default);

    private static PostCheckoutSessionError AsError401MerchantNull(Error401MerchantNull value) =>
        new(default, Optional<Error401MerchantNull>.Some(value), default, default, default);

    private static PostCheckoutSessionError AsError403(Error403 value) =>
        new(default, default, Optional<Error403>.Some(value), default, default);

    private static PostCheckoutSessionError AsString(string value) =>
        new(default, default, default, Optional<string>.Some(value), default);

    private static PostCheckoutSessionError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetError400CheckoutPost([NotNullWhen(true)] out Error400CheckoutPost? value) =>
        _error400CheckoutPostValue.TryGetValue(out value);

    public bool TryGetError401MerchantNull([NotNullWhen(true)] out Error401MerchantNull? value) =>
        _error401MerchantNullValue.TryGetValue(out value);

    public bool TryGetError403([NotNullWhen(true)] out Error403? value) => _error403Value.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error400CheckoutPost, TResult> onError400CheckoutPost,
        Func<Error401MerchantNull, TResult> onError401MerchantNull,
        Func<Error403, TResult> onError403,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError400CheckoutPost(out var error400CheckoutPostValue) => onError400CheckoutPost(
                error400CheckoutPostValue),
            _ when TryGetError401MerchantNull(out var error401MerchantNullValue) => onError401MerchantNull(
                error401MerchantNullValue),
            _ when TryGetError403(out var error403Value) => onError403(error403Value),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostCheckoutSessionError)} holds no value.")
        };

    public void Match(Action<Error400CheckoutPost> onError400CheckoutPost,
        Action<Error401MerchantNull> onError401MerchantNull,
        Action<Error403> onError403,
        Action<string> onString,
        Action<RawError> otherwise)
    {
        if (TryGetError400CheckoutPost(out var error400CheckoutPostValue)) onError400CheckoutPost(
            error400CheckoutPostValue);
        else if (TryGetError401MerchantNull(out var error401MerchantNullValue)) onError401MerchantNull(
            error401MerchantNullValue);
        else if (TryGetError403(out var error403Value)) onError403(error403Value);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostCheckoutSessionError)} holds no value.");
    }

    private static Task<PostCheckoutSessionError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Error400CheckoutPost>().As(AsError400CheckoutPost),
            401 => response.Json<Error401MerchantNull>().As(AsError401MerchantNull),
            403 => response.Json<Error403>().As(AsError403),
            404 or 500 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostCheckoutSessionError> Response { get; } = new(Create);
}
