using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class HlrCreateError : ApiError
{
    private readonly Optional<ApiV2Hlr401Error1> _apiV2Hlr401Error1Value;

    private readonly Optional<ApiV2Hlr403Error1> _apiV2Hlr403Error1Value;

    private readonly Optional<ApiV2Hlr422Error1> _apiV2Hlr422Error1Value;

    private HlrCreateError(Optional<ApiV2Hlr401Error1> apiV2Hlr401Error1Value,
        Optional<ApiV2Hlr403Error1> apiV2Hlr403Error1Value,
        Optional<ApiV2Hlr422Error1> apiV2Hlr422Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2Hlr401Error1Value = apiV2Hlr401Error1Value;
        _apiV2Hlr403Error1Value = apiV2Hlr403Error1Value;
        _apiV2Hlr422Error1Value = apiV2Hlr422Error1Value;
    }

    private static HlrCreateError AsApiV2Hlr401Error1(ApiV2Hlr401Error1 value) =>
        new(Optional<ApiV2Hlr401Error1>.Some(value), default, default, default);

    private static HlrCreateError AsApiV2Hlr403Error1(ApiV2Hlr403Error1 value) =>
        new(default, Optional<ApiV2Hlr403Error1>.Some(value), default, default);

    private static HlrCreateError AsApiV2Hlr422Error1(ApiV2Hlr422Error1 value) =>
        new(default, default, Optional<ApiV2Hlr422Error1>.Some(value), default);

    private static HlrCreateError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV2Hlr401Error1([NotNullWhen(true)] out ApiV2Hlr401Error1? value) =>
        _apiV2Hlr401Error1Value.TryGetValue(out value);

    public bool TryGetApiV2Hlr403Error1([NotNullWhen(true)] out ApiV2Hlr403Error1? value) =>
        _apiV2Hlr403Error1Value.TryGetValue(out value);

    public bool TryGetApiV2Hlr422Error1([NotNullWhen(true)] out ApiV2Hlr422Error1? value) =>
        _apiV2Hlr422Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2Hlr401Error1, TResult> onApiV2Hlr401Error1,
        Func<ApiV2Hlr403Error1, TResult> onApiV2Hlr403Error1,
        Func<ApiV2Hlr422Error1, TResult> onApiV2Hlr422Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2Hlr401Error1(out var apiV2Hlr401Error1Value) => onApiV2Hlr401Error1(
                apiV2Hlr401Error1Value),
            _ when TryGetApiV2Hlr403Error1(out var apiV2Hlr403Error1Value) => onApiV2Hlr403Error1(
                apiV2Hlr403Error1Value),
            _ when TryGetApiV2Hlr422Error1(out var apiV2Hlr422Error1Value) => onApiV2Hlr422Error1(
                apiV2Hlr422Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(HlrCreateError)} holds no value.")
        };

    public void Match(Action<ApiV2Hlr401Error1> onApiV2Hlr401Error1,
        Action<ApiV2Hlr403Error1> onApiV2Hlr403Error1,
        Action<ApiV2Hlr422Error1> onApiV2Hlr422Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV2Hlr401Error1(out var apiV2Hlr401Error1Value)) onApiV2Hlr401Error1(apiV2Hlr401Error1Value);
        else if (TryGetApiV2Hlr403Error1(out var apiV2Hlr403Error1Value)) onApiV2Hlr403Error1(apiV2Hlr403Error1Value);
        else if (TryGetApiV2Hlr422Error1(out var apiV2Hlr422Error1Value)) onApiV2Hlr422Error1(apiV2Hlr422Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(HlrCreateError)} holds no value.");
    }

    private static Task<HlrCreateError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ApiV2Hlr401Error1>().As(AsApiV2Hlr401Error1),
            403 => response.Json<ApiV2Hlr403Error1>().As(AsApiV2Hlr403Error1),
            422 => response.Json<ApiV2Hlr422Error1>().As(AsApiV2Hlr422Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<HlrCreateError> Response { get; } = new(Create);
}
