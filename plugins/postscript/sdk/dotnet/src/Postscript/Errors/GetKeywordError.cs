using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Postscript.Core.ErrorResponse;
using Postscript.Core.Models;
using Postscript.Models;

namespace Postscript.Errors;

public sealed class GetKeywordError : ApiError
{
    private readonly Optional<ApiV2Keywords404Error1> _apiV2Keywords404Error1Value;

    private GetKeywordError(Optional<ApiV2Keywords404Error1> apiV2Keywords404Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2Keywords404Error1Value = apiV2Keywords404Error1Value;
    }

    private static GetKeywordError AsApiV2Keywords404Error1(ApiV2Keywords404Error1 value) =>
        new(Optional<ApiV2Keywords404Error1>.Some(value), default);

    private static GetKeywordError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiV2Keywords404Error1([NotNullWhen(true)] out ApiV2Keywords404Error1? value) =>
        _apiV2Keywords404Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2Keywords404Error1, TResult> onApiV2Keywords404Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2Keywords404Error1(out var apiV2Keywords404Error1Value) => onApiV2Keywords404Error1(
                apiV2Keywords404Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetKeywordError)} holds no value.")
        };

    public void Match(Action<ApiV2Keywords404Error1> onApiV2Keywords404Error1, Action<RawError> otherwise)
    {
        if (TryGetApiV2Keywords404Error1(out var apiV2Keywords404Error1Value)) onApiV2Keywords404Error1(
            apiV2Keywords404Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetKeywordError)} holds no value.");
    }

    private static Task<GetKeywordError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            404 => response.Json<ApiV2Keywords404Error1>().As(AsApiV2Keywords404Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetKeywordError> Response { get; } = new(Create);
}
