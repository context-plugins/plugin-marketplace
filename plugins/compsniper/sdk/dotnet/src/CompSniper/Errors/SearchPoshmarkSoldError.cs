using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using CompSniper.Core.ErrorResponse;
using CompSniper.Core.Models;
using CompSniper.Models;
using CompSniper.Models.AnyOf;

namespace CompSniper.Errors;

public sealed class SearchPoshmarkSoldError : ApiError
{
    private readonly Optional<V1PoshmarkSold400Error1> _v1PoshmarkSold400Error1Value;

    private readonly Optional<V1PoshmarkSold401Error1> _v1PoshmarkSold401Error1Value;

    private readonly Optional<V1PoshmarkSold500Error1> _v1PoshmarkSold500Error1Value;

    private readonly Optional<V1PoshmarkSold502Error1> _v1PoshmarkSold502Error1Value;

    private readonly Optional<V1PoshmarkSold503Error1> _v1PoshmarkSold503Error1Value;

    private readonly Optional<V1PoshmarkSoldResponse12> _v1PoshmarkSoldResponse12Value;

    private SearchPoshmarkSoldError(Optional<V1PoshmarkSold400Error1> v1PoshmarkSold400Error1Value,
        Optional<V1PoshmarkSold401Error1> v1PoshmarkSold401Error1Value,
        Optional<V1PoshmarkSold500Error1> v1PoshmarkSold500Error1Value,
        Optional<V1PoshmarkSold502Error1> v1PoshmarkSold502Error1Value,
        Optional<V1PoshmarkSold503Error1> v1PoshmarkSold503Error1Value,
        Optional<V1PoshmarkSoldResponse12> v1PoshmarkSoldResponse12Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _v1PoshmarkSold400Error1Value = v1PoshmarkSold400Error1Value;
        _v1PoshmarkSold401Error1Value = v1PoshmarkSold401Error1Value;
        _v1PoshmarkSold500Error1Value = v1PoshmarkSold500Error1Value;
        _v1PoshmarkSold502Error1Value = v1PoshmarkSold502Error1Value;
        _v1PoshmarkSold503Error1Value = v1PoshmarkSold503Error1Value;
        _v1PoshmarkSoldResponse12Value = v1PoshmarkSoldResponse12Value;
    }

    private static SearchPoshmarkSoldError AsV1PoshmarkSold400Error1(V1PoshmarkSold400Error1 value) =>
        new(Optional<V1PoshmarkSold400Error1>.Some(value), default, default, default, default, default, default);

    private static SearchPoshmarkSoldError AsV1PoshmarkSold401Error1(V1PoshmarkSold401Error1 value) =>
        new(default, Optional<V1PoshmarkSold401Error1>.Some(value), default, default, default, default, default);

    private static SearchPoshmarkSoldError AsV1PoshmarkSold500Error1(V1PoshmarkSold500Error1 value) =>
        new(default, default, Optional<V1PoshmarkSold500Error1>.Some(value), default, default, default, default);

    private static SearchPoshmarkSoldError AsV1PoshmarkSold502Error1(V1PoshmarkSold502Error1 value) =>
        new(default, default, default, Optional<V1PoshmarkSold502Error1>.Some(value), default, default, default);

    private static SearchPoshmarkSoldError AsV1PoshmarkSold503Error1(V1PoshmarkSold503Error1 value) =>
        new(default, default, default, default, Optional<V1PoshmarkSold503Error1>.Some(value), default, default);

    private static SearchPoshmarkSoldError AsV1PoshmarkSoldResponse12(V1PoshmarkSoldResponse12 value) =>
        new(default, default, default, default, default, Optional<V1PoshmarkSoldResponse12>.Some(value), default);

    private static SearchPoshmarkSoldError AsFallback(RawError value) =>
        new(default, default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetV1PoshmarkSold400Error1([NotNullWhen(true)] out V1PoshmarkSold400Error1? value) =>
        _v1PoshmarkSold400Error1Value.TryGetValue(out value);

    public bool TryGetV1PoshmarkSold401Error1([NotNullWhen(true)] out V1PoshmarkSold401Error1? value) =>
        _v1PoshmarkSold401Error1Value.TryGetValue(out value);

    public bool TryGetV1PoshmarkSold500Error1([NotNullWhen(true)] out V1PoshmarkSold500Error1? value) =>
        _v1PoshmarkSold500Error1Value.TryGetValue(out value);

    public bool TryGetV1PoshmarkSold502Error1([NotNullWhen(true)] out V1PoshmarkSold502Error1? value) =>
        _v1PoshmarkSold502Error1Value.TryGetValue(out value);

    public bool TryGetV1PoshmarkSold503Error1([NotNullWhen(true)] out V1PoshmarkSold503Error1? value) =>
        _v1PoshmarkSold503Error1Value.TryGetValue(out value);

    public bool TryGetV1PoshmarkSoldResponse12([NotNullWhen(true)] out V1PoshmarkSoldResponse12? value) =>
        _v1PoshmarkSoldResponse12Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<V1PoshmarkSold400Error1, TResult> onV1PoshmarkSold400Error1,
        Func<V1PoshmarkSold401Error1, TResult> onV1PoshmarkSold401Error1,
        Func<V1PoshmarkSold500Error1, TResult> onV1PoshmarkSold500Error1,
        Func<V1PoshmarkSold502Error1, TResult> onV1PoshmarkSold502Error1,
        Func<V1PoshmarkSold503Error1, TResult> onV1PoshmarkSold503Error1,
        Func<V1PoshmarkSoldResponse12, TResult> onV1PoshmarkSoldResponse12,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetV1PoshmarkSold400Error1(out var v1PoshmarkSold400Error1Value) => onV1PoshmarkSold400Error1(
                v1PoshmarkSold400Error1Value),
            _ when TryGetV1PoshmarkSold401Error1(out var v1PoshmarkSold401Error1Value) => onV1PoshmarkSold401Error1(
                v1PoshmarkSold401Error1Value),
            _ when TryGetV1PoshmarkSold500Error1(out var v1PoshmarkSold500Error1Value) => onV1PoshmarkSold500Error1(
                v1PoshmarkSold500Error1Value),
            _ when TryGetV1PoshmarkSold502Error1(out var v1PoshmarkSold502Error1Value) => onV1PoshmarkSold502Error1(
                v1PoshmarkSold502Error1Value),
            _ when TryGetV1PoshmarkSold503Error1(out var v1PoshmarkSold503Error1Value) => onV1PoshmarkSold503Error1(
                v1PoshmarkSold503Error1Value),
            _ when TryGetV1PoshmarkSoldResponse12(out var v1PoshmarkSoldResponse12Value) => onV1PoshmarkSoldResponse12(
                v1PoshmarkSoldResponse12Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SearchPoshmarkSoldError)} holds no value.")
        };

    public void Match(Action<V1PoshmarkSold400Error1> onV1PoshmarkSold400Error1,
        Action<V1PoshmarkSold401Error1> onV1PoshmarkSold401Error1,
        Action<V1PoshmarkSold500Error1> onV1PoshmarkSold500Error1,
        Action<V1PoshmarkSold502Error1> onV1PoshmarkSold502Error1,
        Action<V1PoshmarkSold503Error1> onV1PoshmarkSold503Error1,
        Action<V1PoshmarkSoldResponse12> onV1PoshmarkSoldResponse12,
        Action<RawError> otherwise)
    {
        if (TryGetV1PoshmarkSold400Error1(out var v1PoshmarkSold400Error1Value)) onV1PoshmarkSold400Error1(
            v1PoshmarkSold400Error1Value);
        else if (TryGetV1PoshmarkSold401Error1(out var v1PoshmarkSold401Error1Value)) onV1PoshmarkSold401Error1(
            v1PoshmarkSold401Error1Value);
        else if (TryGetV1PoshmarkSold500Error1(out var v1PoshmarkSold500Error1Value)) onV1PoshmarkSold500Error1(
            v1PoshmarkSold500Error1Value);
        else if (TryGetV1PoshmarkSold502Error1(out var v1PoshmarkSold502Error1Value)) onV1PoshmarkSold502Error1(
            v1PoshmarkSold502Error1Value);
        else if (TryGetV1PoshmarkSold503Error1(out var v1PoshmarkSold503Error1Value)) onV1PoshmarkSold503Error1(
            v1PoshmarkSold503Error1Value);
        else if (TryGetV1PoshmarkSoldResponse12(out var v1PoshmarkSoldResponse12Value)) onV1PoshmarkSoldResponse12(
            v1PoshmarkSoldResponse12Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SearchPoshmarkSoldError)} holds no value.");
    }

    private static Task<SearchPoshmarkSoldError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<V1PoshmarkSold400Error1>().As(AsV1PoshmarkSold400Error1),
            401 => response.Json<V1PoshmarkSold401Error1>().As(AsV1PoshmarkSold401Error1),
            429 => response.Json<V1PoshmarkSoldResponse12>().As(AsV1PoshmarkSoldResponse12),
            500 => response.Json<V1PoshmarkSold500Error1>().As(AsV1PoshmarkSold500Error1),
            502 => response.Json<V1PoshmarkSold502Error1>().As(AsV1PoshmarkSold502Error1),
            503 => response.Json<V1PoshmarkSold503Error1>().As(AsV1PoshmarkSold503Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SearchPoshmarkSoldError> Response { get; } = new(Create);
}
