using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using CompSniper.Core.ErrorResponse;
using CompSniper.Core.Models;
using CompSniper.Models;

namespace CompSniper.Errors;

public sealed class GetV1GrailedSoldError : ApiError
{
    private readonly Optional<V1GrailedSold400Error1> _v1GrailedSold400Error1Value;

    private readonly Optional<V1GrailedSold401Error1> _v1GrailedSold401Error1Value;

    private readonly Optional<V1GrailedSold429Error1> _v1GrailedSold429Error1Value;

    private readonly Optional<V1GrailedSold502Error1> _v1GrailedSold502Error1Value;

    private readonly Optional<V1GrailedSold503Error1> _v1GrailedSold503Error1Value;

    private GetV1GrailedSoldError(Optional<V1GrailedSold400Error1> v1GrailedSold400Error1Value,
        Optional<V1GrailedSold401Error1> v1GrailedSold401Error1Value,
        Optional<V1GrailedSold429Error1> v1GrailedSold429Error1Value,
        Optional<V1GrailedSold502Error1> v1GrailedSold502Error1Value,
        Optional<V1GrailedSold503Error1> v1GrailedSold503Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _v1GrailedSold400Error1Value = v1GrailedSold400Error1Value;
        _v1GrailedSold401Error1Value = v1GrailedSold401Error1Value;
        _v1GrailedSold429Error1Value = v1GrailedSold429Error1Value;
        _v1GrailedSold502Error1Value = v1GrailedSold502Error1Value;
        _v1GrailedSold503Error1Value = v1GrailedSold503Error1Value;
    }

    private static GetV1GrailedSoldError AsV1GrailedSold400Error1(V1GrailedSold400Error1 value) =>
        new(Optional<V1GrailedSold400Error1>.Some(value), default, default, default, default, default);

    private static GetV1GrailedSoldError AsV1GrailedSold401Error1(V1GrailedSold401Error1 value) =>
        new(default, Optional<V1GrailedSold401Error1>.Some(value), default, default, default, default);

    private static GetV1GrailedSoldError AsV1GrailedSold429Error1(V1GrailedSold429Error1 value) =>
        new(default, default, Optional<V1GrailedSold429Error1>.Some(value), default, default, default);

    private static GetV1GrailedSoldError AsV1GrailedSold502Error1(V1GrailedSold502Error1 value) =>
        new(default, default, default, Optional<V1GrailedSold502Error1>.Some(value), default, default);

    private static GetV1GrailedSoldError AsV1GrailedSold503Error1(V1GrailedSold503Error1 value) =>
        new(default, default, default, default, Optional<V1GrailedSold503Error1>.Some(value), default);

    private static GetV1GrailedSoldError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetV1GrailedSold400Error1([NotNullWhen(true)] out V1GrailedSold400Error1? value) =>
        _v1GrailedSold400Error1Value.TryGetValue(out value);

    public bool TryGetV1GrailedSold401Error1([NotNullWhen(true)] out V1GrailedSold401Error1? value) =>
        _v1GrailedSold401Error1Value.TryGetValue(out value);

    public bool TryGetV1GrailedSold429Error1([NotNullWhen(true)] out V1GrailedSold429Error1? value) =>
        _v1GrailedSold429Error1Value.TryGetValue(out value);

    public bool TryGetV1GrailedSold502Error1([NotNullWhen(true)] out V1GrailedSold502Error1? value) =>
        _v1GrailedSold502Error1Value.TryGetValue(out value);

    public bool TryGetV1GrailedSold503Error1([NotNullWhen(true)] out V1GrailedSold503Error1? value) =>
        _v1GrailedSold503Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<V1GrailedSold400Error1, TResult> onV1GrailedSold400Error1,
        Func<V1GrailedSold401Error1, TResult> onV1GrailedSold401Error1,
        Func<V1GrailedSold429Error1, TResult> onV1GrailedSold429Error1,
        Func<V1GrailedSold502Error1, TResult> onV1GrailedSold502Error1,
        Func<V1GrailedSold503Error1, TResult> onV1GrailedSold503Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetV1GrailedSold400Error1(out var v1GrailedSold400Error1Value) => onV1GrailedSold400Error1(
                v1GrailedSold400Error1Value),
            _ when TryGetV1GrailedSold401Error1(out var v1GrailedSold401Error1Value) => onV1GrailedSold401Error1(
                v1GrailedSold401Error1Value),
            _ when TryGetV1GrailedSold429Error1(out var v1GrailedSold429Error1Value) => onV1GrailedSold429Error1(
                v1GrailedSold429Error1Value),
            _ when TryGetV1GrailedSold502Error1(out var v1GrailedSold502Error1Value) => onV1GrailedSold502Error1(
                v1GrailedSold502Error1Value),
            _ when TryGetV1GrailedSold503Error1(out var v1GrailedSold503Error1Value) => onV1GrailedSold503Error1(
                v1GrailedSold503Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetV1GrailedSoldError)} holds no value.")
        };

    public void Match(Action<V1GrailedSold400Error1> onV1GrailedSold400Error1,
        Action<V1GrailedSold401Error1> onV1GrailedSold401Error1,
        Action<V1GrailedSold429Error1> onV1GrailedSold429Error1,
        Action<V1GrailedSold502Error1> onV1GrailedSold502Error1,
        Action<V1GrailedSold503Error1> onV1GrailedSold503Error1,
        Action<RawError> otherwise)
    {
        if (TryGetV1GrailedSold400Error1(out var v1GrailedSold400Error1Value)) onV1GrailedSold400Error1(
            v1GrailedSold400Error1Value);
        else if (TryGetV1GrailedSold401Error1(out var v1GrailedSold401Error1Value)) onV1GrailedSold401Error1(
            v1GrailedSold401Error1Value);
        else if (TryGetV1GrailedSold429Error1(out var v1GrailedSold429Error1Value)) onV1GrailedSold429Error1(
            v1GrailedSold429Error1Value);
        else if (TryGetV1GrailedSold502Error1(out var v1GrailedSold502Error1Value)) onV1GrailedSold502Error1(
            v1GrailedSold502Error1Value);
        else if (TryGetV1GrailedSold503Error1(out var v1GrailedSold503Error1Value)) onV1GrailedSold503Error1(
            v1GrailedSold503Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetV1GrailedSoldError)} holds no value.");
    }

    private static Task<GetV1GrailedSoldError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<V1GrailedSold400Error1>().As(AsV1GrailedSold400Error1),
            401 => response.Json<V1GrailedSold401Error1>().As(AsV1GrailedSold401Error1),
            429 => response.Json<V1GrailedSold429Error1>().As(AsV1GrailedSold429Error1),
            502 => response.Json<V1GrailedSold502Error1>().As(AsV1GrailedSold502Error1),
            503 => response.Json<V1GrailedSold503Error1>().As(AsV1GrailedSold503Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetV1GrailedSoldError> Response { get; } = new(Create);
}
