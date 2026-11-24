using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using CompSniper.Core.ErrorResponse;
using CompSniper.Core.Models;
using CompSniper.Models;
using CompSniper.Models.AnyOf;

namespace CompSniper.Errors;

public sealed class SearchMercariListingsError : ApiError
{
    private readonly Optional<ApiErrorModel> _apiErrorModelValue;

    private readonly Optional<V1Mercari400Error1> _v1Mercari400Error1Value;

    private readonly Optional<V1Mercari401Error1> _v1Mercari401Error1Value;

    private readonly Optional<V1Mercari500Error1> _v1Mercari500Error1Value;

    private readonly Optional<V1Mercari502Error1> _v1Mercari502Error1Value;

    private readonly Optional<V1MercariResponse12> _v1MercariResponse12Value;

    private SearchMercariListingsError(Optional<ApiErrorModel> apiErrorModelValue,
        Optional<V1Mercari400Error1> v1Mercari400Error1Value,
        Optional<V1Mercari401Error1> v1Mercari401Error1Value,
        Optional<V1Mercari500Error1> v1Mercari500Error1Value,
        Optional<V1Mercari502Error1> v1Mercari502Error1Value,
        Optional<V1MercariResponse12> v1MercariResponse12Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiErrorModelValue = apiErrorModelValue;
        _v1Mercari400Error1Value = v1Mercari400Error1Value;
        _v1Mercari401Error1Value = v1Mercari401Error1Value;
        _v1Mercari500Error1Value = v1Mercari500Error1Value;
        _v1Mercari502Error1Value = v1Mercari502Error1Value;
        _v1MercariResponse12Value = v1MercariResponse12Value;
    }

    private static SearchMercariListingsError AsApiErrorModel(ApiErrorModel value) =>
        new(Optional<ApiErrorModel>.Some(value), default, default, default, default, default, default);

    private static SearchMercariListingsError AsV1Mercari400Error1(V1Mercari400Error1 value) =>
        new(default, Optional<V1Mercari400Error1>.Some(value), default, default, default, default, default);

    private static SearchMercariListingsError AsV1Mercari401Error1(V1Mercari401Error1 value) =>
        new(default, default, Optional<V1Mercari401Error1>.Some(value), default, default, default, default);

    private static SearchMercariListingsError AsV1Mercari500Error1(V1Mercari500Error1 value) =>
        new(default, default, default, Optional<V1Mercari500Error1>.Some(value), default, default, default);

    private static SearchMercariListingsError AsV1Mercari502Error1(V1Mercari502Error1 value) =>
        new(default, default, default, default, Optional<V1Mercari502Error1>.Some(value), default, default);

    private static SearchMercariListingsError AsV1MercariResponse12(V1MercariResponse12 value) =>
        new(default, default, default, default, default, Optional<V1MercariResponse12>.Some(value), default);

    private static SearchMercariListingsError AsFallback(RawError value) =>
        new(default, default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value) =>
        _apiErrorModelValue.TryGetValue(out value);

    public bool TryGetV1Mercari400Error1([NotNullWhen(true)] out V1Mercari400Error1? value) =>
        _v1Mercari400Error1Value.TryGetValue(out value);

    public bool TryGetV1Mercari401Error1([NotNullWhen(true)] out V1Mercari401Error1? value) =>
        _v1Mercari401Error1Value.TryGetValue(out value);

    public bool TryGetV1Mercari500Error1([NotNullWhen(true)] out V1Mercari500Error1? value) =>
        _v1Mercari500Error1Value.TryGetValue(out value);

    public bool TryGetV1Mercari502Error1([NotNullWhen(true)] out V1Mercari502Error1? value) =>
        _v1Mercari502Error1Value.TryGetValue(out value);

    public bool TryGetV1MercariResponse12([NotNullWhen(true)] out V1MercariResponse12? value) =>
        _v1MercariResponse12Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiErrorModel, TResult> onApiErrorModel,
        Func<V1Mercari400Error1, TResult> onV1Mercari400Error1,
        Func<V1Mercari401Error1, TResult> onV1Mercari401Error1,
        Func<V1Mercari500Error1, TResult> onV1Mercari500Error1,
        Func<V1Mercari502Error1, TResult> onV1Mercari502Error1,
        Func<V1MercariResponse12, TResult> onV1MercariResponse12,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiErrorModel(out var apiErrorModelValue) => onApiErrorModel(apiErrorModelValue),
            _ when TryGetV1Mercari400Error1(out var v1Mercari400Error1Value) => onV1Mercari400Error1(
                v1Mercari400Error1Value),
            _ when TryGetV1Mercari401Error1(out var v1Mercari401Error1Value) => onV1Mercari401Error1(
                v1Mercari401Error1Value),
            _ when TryGetV1Mercari500Error1(out var v1Mercari500Error1Value) => onV1Mercari500Error1(
                v1Mercari500Error1Value),
            _ when TryGetV1Mercari502Error1(out var v1Mercari502Error1Value) => onV1Mercari502Error1(
                v1Mercari502Error1Value),
            _ when TryGetV1MercariResponse12(out var v1MercariResponse12Value) => onV1MercariResponse12(
                v1MercariResponse12Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SearchMercariListingsError)} holds no value.")
        };

    public void Match(Action<ApiErrorModel> onApiErrorModel,
        Action<V1Mercari400Error1> onV1Mercari400Error1,
        Action<V1Mercari401Error1> onV1Mercari401Error1,
        Action<V1Mercari500Error1> onV1Mercari500Error1,
        Action<V1Mercari502Error1> onV1Mercari502Error1,
        Action<V1MercariResponse12> onV1MercariResponse12,
        Action<RawError> otherwise)
    {
        if (TryGetApiErrorModel(out var apiErrorModelValue)) onApiErrorModel(apiErrorModelValue);
        else if (TryGetV1Mercari400Error1(out var v1Mercari400Error1Value)) onV1Mercari400Error1(
            v1Mercari400Error1Value);
        else if (TryGetV1Mercari401Error1(out var v1Mercari401Error1Value)) onV1Mercari401Error1(
            v1Mercari401Error1Value);
        else if (TryGetV1Mercari500Error1(out var v1Mercari500Error1Value)) onV1Mercari500Error1(
            v1Mercari500Error1Value);
        else if (TryGetV1Mercari502Error1(out var v1Mercari502Error1Value)) onV1Mercari502Error1(
            v1Mercari502Error1Value);
        else if (TryGetV1MercariResponse12(out var v1MercariResponse12Value)) onV1MercariResponse12(
            v1MercariResponse12Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SearchMercariListingsError)} holds no value.");
    }

    private static Task<SearchMercariListingsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<V1Mercari400Error1>().As(AsV1Mercari400Error1),
            401 => response.Json<V1Mercari401Error1>().As(AsV1Mercari401Error1),
            429 => response.Json<V1MercariResponse12>().As(AsV1MercariResponse12),
            500 => response.Json<V1Mercari500Error1>().As(AsV1Mercari500Error1),
            502 => response.Json<V1Mercari502Error1>().As(AsV1Mercari502Error1),
            503 => response.Json<ApiErrorModel>().As(AsApiErrorModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SearchMercariListingsError> Response { get; } = new(Create);
}
