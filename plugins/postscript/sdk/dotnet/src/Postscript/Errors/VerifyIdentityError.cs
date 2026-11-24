using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Postscript.Core.ErrorResponse;
using Postscript.Core.Models;
using Postscript.Models;

namespace Postscript.Errors;

public sealed class VerifyIdentityError : ApiError
{
    private readonly Optional<ApiV2Me400Error1> _apiV2Me400Error1Value;

    private VerifyIdentityError(Optional<ApiV2Me400Error1> apiV2Me400Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2Me400Error1Value = apiV2Me400Error1Value;
    }

    private static VerifyIdentityError AsApiV2Me400Error1(ApiV2Me400Error1 value) =>
        new(Optional<ApiV2Me400Error1>.Some(value), default);

    private static VerifyIdentityError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiV2Me400Error1([NotNullWhen(true)] out ApiV2Me400Error1? value) =>
        _apiV2Me400Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2Me400Error1, TResult> onApiV2Me400Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2Me400Error1(out var apiV2Me400Error1Value) => onApiV2Me400Error1(apiV2Me400Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(VerifyIdentityError)} holds no value.")
        };

    public void Match(Action<ApiV2Me400Error1> onApiV2Me400Error1, Action<RawError> otherwise)
    {
        if (TryGetApiV2Me400Error1(out var apiV2Me400Error1Value)) onApiV2Me400Error1(apiV2Me400Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(VerifyIdentityError)} holds no value.");
    }

    private static Task<VerifyIdentityError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV2Me400Error1>().As(AsApiV2Me400Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<VerifyIdentityError> Response { get; } = new(Create);
}
