using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using CompSniper.Core.ErrorResponse;
using CompSniper.Core.Models;
using CompSniper.Models;

namespace CompSniper.Errors;

public sealed class GetV1ResearchSoldError : ApiError
{
    private readonly Optional<V1ResearchSold400Error1> _v1ResearchSold400Error1Value;

    private readonly Optional<V1ResearchSold401Error1> _v1ResearchSold401Error1Value;

    private readonly Optional<V1ResearchSold429Error1> _v1ResearchSold429Error1Value;

    private readonly Optional<V1ResearchSold502Error1> _v1ResearchSold502Error1Value;

    private readonly Optional<V1ResearchSold503Error1> _v1ResearchSold503Error1Value;

    private GetV1ResearchSoldError(Optional<V1ResearchSold400Error1> v1ResearchSold400Error1Value,
        Optional<V1ResearchSold401Error1> v1ResearchSold401Error1Value,
        Optional<V1ResearchSold429Error1> v1ResearchSold429Error1Value,
        Optional<V1ResearchSold502Error1> v1ResearchSold502Error1Value,
        Optional<V1ResearchSold503Error1> v1ResearchSold503Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _v1ResearchSold400Error1Value = v1ResearchSold400Error1Value;
        _v1ResearchSold401Error1Value = v1ResearchSold401Error1Value;
        _v1ResearchSold429Error1Value = v1ResearchSold429Error1Value;
        _v1ResearchSold502Error1Value = v1ResearchSold502Error1Value;
        _v1ResearchSold503Error1Value = v1ResearchSold503Error1Value;
    }

    private static GetV1ResearchSoldError AsV1ResearchSold400Error1(V1ResearchSold400Error1 value) =>
        new(Optional<V1ResearchSold400Error1>.Some(value), default, default, default, default, default);

    private static GetV1ResearchSoldError AsV1ResearchSold401Error1(V1ResearchSold401Error1 value) =>
        new(default, Optional<V1ResearchSold401Error1>.Some(value), default, default, default, default);

    private static GetV1ResearchSoldError AsV1ResearchSold429Error1(V1ResearchSold429Error1 value) =>
        new(default, default, Optional<V1ResearchSold429Error1>.Some(value), default, default, default);

    private static GetV1ResearchSoldError AsV1ResearchSold502Error1(V1ResearchSold502Error1 value) =>
        new(default, default, default, Optional<V1ResearchSold502Error1>.Some(value), default, default);

    private static GetV1ResearchSoldError AsV1ResearchSold503Error1(V1ResearchSold503Error1 value) =>
        new(default, default, default, default, Optional<V1ResearchSold503Error1>.Some(value), default);

    private static GetV1ResearchSoldError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetV1ResearchSold400Error1([NotNullWhen(true)] out V1ResearchSold400Error1? value) =>
        _v1ResearchSold400Error1Value.TryGetValue(out value);

    public bool TryGetV1ResearchSold401Error1([NotNullWhen(true)] out V1ResearchSold401Error1? value) =>
        _v1ResearchSold401Error1Value.TryGetValue(out value);

    public bool TryGetV1ResearchSold429Error1([NotNullWhen(true)] out V1ResearchSold429Error1? value) =>
        _v1ResearchSold429Error1Value.TryGetValue(out value);

    public bool TryGetV1ResearchSold502Error1([NotNullWhen(true)] out V1ResearchSold502Error1? value) =>
        _v1ResearchSold502Error1Value.TryGetValue(out value);

    public bool TryGetV1ResearchSold503Error1([NotNullWhen(true)] out V1ResearchSold503Error1? value) =>
        _v1ResearchSold503Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<V1ResearchSold400Error1, TResult> onV1ResearchSold400Error1,
        Func<V1ResearchSold401Error1, TResult> onV1ResearchSold401Error1,
        Func<V1ResearchSold429Error1, TResult> onV1ResearchSold429Error1,
        Func<V1ResearchSold502Error1, TResult> onV1ResearchSold502Error1,
        Func<V1ResearchSold503Error1, TResult> onV1ResearchSold503Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetV1ResearchSold400Error1(out var v1ResearchSold400Error1Value) => onV1ResearchSold400Error1(
                v1ResearchSold400Error1Value),
            _ when TryGetV1ResearchSold401Error1(out var v1ResearchSold401Error1Value) => onV1ResearchSold401Error1(
                v1ResearchSold401Error1Value),
            _ when TryGetV1ResearchSold429Error1(out var v1ResearchSold429Error1Value) => onV1ResearchSold429Error1(
                v1ResearchSold429Error1Value),
            _ when TryGetV1ResearchSold502Error1(out var v1ResearchSold502Error1Value) => onV1ResearchSold502Error1(
                v1ResearchSold502Error1Value),
            _ when TryGetV1ResearchSold503Error1(out var v1ResearchSold503Error1Value) => onV1ResearchSold503Error1(
                v1ResearchSold503Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetV1ResearchSoldError)} holds no value.")
        };

    public void Match(Action<V1ResearchSold400Error1> onV1ResearchSold400Error1,
        Action<V1ResearchSold401Error1> onV1ResearchSold401Error1,
        Action<V1ResearchSold429Error1> onV1ResearchSold429Error1,
        Action<V1ResearchSold502Error1> onV1ResearchSold502Error1,
        Action<V1ResearchSold503Error1> onV1ResearchSold503Error1,
        Action<RawError> otherwise)
    {
        if (TryGetV1ResearchSold400Error1(out var v1ResearchSold400Error1Value)) onV1ResearchSold400Error1(
            v1ResearchSold400Error1Value);
        else if (TryGetV1ResearchSold401Error1(out var v1ResearchSold401Error1Value)) onV1ResearchSold401Error1(
            v1ResearchSold401Error1Value);
        else if (TryGetV1ResearchSold429Error1(out var v1ResearchSold429Error1Value)) onV1ResearchSold429Error1(
            v1ResearchSold429Error1Value);
        else if (TryGetV1ResearchSold502Error1(out var v1ResearchSold502Error1Value)) onV1ResearchSold502Error1(
            v1ResearchSold502Error1Value);
        else if (TryGetV1ResearchSold503Error1(out var v1ResearchSold503Error1Value)) onV1ResearchSold503Error1(
            v1ResearchSold503Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetV1ResearchSoldError)} holds no value.");
    }

    private static Task<GetV1ResearchSoldError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<V1ResearchSold400Error1>().As(AsV1ResearchSold400Error1),
            401 => response.Json<V1ResearchSold401Error1>().As(AsV1ResearchSold401Error1),
            429 => response.Json<V1ResearchSold429Error1>().As(AsV1ResearchSold429Error1),
            502 => response.Json<V1ResearchSold502Error1>().As(AsV1ResearchSold502Error1),
            503 => response.Json<V1ResearchSold503Error1>().As(AsV1ResearchSold503Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetV1ResearchSoldError> Response { get; } = new(Create);
}
