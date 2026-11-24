using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using CompSniper.Core.ErrorResponse;
using CompSniper.Core.Models;
using CompSniper.Models;

namespace CompSniper.Errors;

public sealed class GetV1TcgplayerSoldError : ApiError
{
    private readonly Optional<V1TcgplayerSold400Error1> _v1TcgplayerSold400Error1Value;

    private readonly Optional<V1TcgplayerSold401Error1> _v1TcgplayerSold401Error1Value;

    private readonly Optional<V1TcgplayerSold429Error1> _v1TcgplayerSold429Error1Value;

    private readonly Optional<V1TcgplayerSold502Error1> _v1TcgplayerSold502Error1Value;

    private readonly Optional<V1TcgplayerSold503Error1> _v1TcgplayerSold503Error1Value;

    private GetV1TcgplayerSoldError(Optional<V1TcgplayerSold400Error1> v1TcgplayerSold400Error1Value,
        Optional<V1TcgplayerSold401Error1> v1TcgplayerSold401Error1Value,
        Optional<V1TcgplayerSold429Error1> v1TcgplayerSold429Error1Value,
        Optional<V1TcgplayerSold502Error1> v1TcgplayerSold502Error1Value,
        Optional<V1TcgplayerSold503Error1> v1TcgplayerSold503Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _v1TcgplayerSold400Error1Value = v1TcgplayerSold400Error1Value;
        _v1TcgplayerSold401Error1Value = v1TcgplayerSold401Error1Value;
        _v1TcgplayerSold429Error1Value = v1TcgplayerSold429Error1Value;
        _v1TcgplayerSold502Error1Value = v1TcgplayerSold502Error1Value;
        _v1TcgplayerSold503Error1Value = v1TcgplayerSold503Error1Value;
    }

    private static GetV1TcgplayerSoldError AsV1TcgplayerSold400Error1(V1TcgplayerSold400Error1 value) =>
        new(Optional<V1TcgplayerSold400Error1>.Some(value), default, default, default, default, default);

    private static GetV1TcgplayerSoldError AsV1TcgplayerSold401Error1(V1TcgplayerSold401Error1 value) =>
        new(default, Optional<V1TcgplayerSold401Error1>.Some(value), default, default, default, default);

    private static GetV1TcgplayerSoldError AsV1TcgplayerSold429Error1(V1TcgplayerSold429Error1 value) =>
        new(default, default, Optional<V1TcgplayerSold429Error1>.Some(value), default, default, default);

    private static GetV1TcgplayerSoldError AsV1TcgplayerSold502Error1(V1TcgplayerSold502Error1 value) =>
        new(default, default, default, Optional<V1TcgplayerSold502Error1>.Some(value), default, default);

    private static GetV1TcgplayerSoldError AsV1TcgplayerSold503Error1(V1TcgplayerSold503Error1 value) =>
        new(default, default, default, default, Optional<V1TcgplayerSold503Error1>.Some(value), default);

    private static GetV1TcgplayerSoldError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetV1TcgplayerSold400Error1([NotNullWhen(true)] out V1TcgplayerSold400Error1? value) =>
        _v1TcgplayerSold400Error1Value.TryGetValue(out value);

    public bool TryGetV1TcgplayerSold401Error1([NotNullWhen(true)] out V1TcgplayerSold401Error1? value) =>
        _v1TcgplayerSold401Error1Value.TryGetValue(out value);

    public bool TryGetV1TcgplayerSold429Error1([NotNullWhen(true)] out V1TcgplayerSold429Error1? value) =>
        _v1TcgplayerSold429Error1Value.TryGetValue(out value);

    public bool TryGetV1TcgplayerSold502Error1([NotNullWhen(true)] out V1TcgplayerSold502Error1? value) =>
        _v1TcgplayerSold502Error1Value.TryGetValue(out value);

    public bool TryGetV1TcgplayerSold503Error1([NotNullWhen(true)] out V1TcgplayerSold503Error1? value) =>
        _v1TcgplayerSold503Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<V1TcgplayerSold400Error1, TResult> onV1TcgplayerSold400Error1,
        Func<V1TcgplayerSold401Error1, TResult> onV1TcgplayerSold401Error1,
        Func<V1TcgplayerSold429Error1, TResult> onV1TcgplayerSold429Error1,
        Func<V1TcgplayerSold502Error1, TResult> onV1TcgplayerSold502Error1,
        Func<V1TcgplayerSold503Error1, TResult> onV1TcgplayerSold503Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetV1TcgplayerSold400Error1(out var v1TcgplayerSold400Error1Value) => onV1TcgplayerSold400Error1(
                v1TcgplayerSold400Error1Value),
            _ when TryGetV1TcgplayerSold401Error1(out var v1TcgplayerSold401Error1Value) => onV1TcgplayerSold401Error1(
                v1TcgplayerSold401Error1Value),
            _ when TryGetV1TcgplayerSold429Error1(out var v1TcgplayerSold429Error1Value) => onV1TcgplayerSold429Error1(
                v1TcgplayerSold429Error1Value),
            _ when TryGetV1TcgplayerSold502Error1(out var v1TcgplayerSold502Error1Value) => onV1TcgplayerSold502Error1(
                v1TcgplayerSold502Error1Value),
            _ when TryGetV1TcgplayerSold503Error1(out var v1TcgplayerSold503Error1Value) => onV1TcgplayerSold503Error1(
                v1TcgplayerSold503Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetV1TcgplayerSoldError)} holds no value.")
        };

    public void Match(Action<V1TcgplayerSold400Error1> onV1TcgplayerSold400Error1,
        Action<V1TcgplayerSold401Error1> onV1TcgplayerSold401Error1,
        Action<V1TcgplayerSold429Error1> onV1TcgplayerSold429Error1,
        Action<V1TcgplayerSold502Error1> onV1TcgplayerSold502Error1,
        Action<V1TcgplayerSold503Error1> onV1TcgplayerSold503Error1,
        Action<RawError> otherwise)
    {
        if (TryGetV1TcgplayerSold400Error1(out var v1TcgplayerSold400Error1Value)) onV1TcgplayerSold400Error1(
            v1TcgplayerSold400Error1Value);
        else if (TryGetV1TcgplayerSold401Error1(out var v1TcgplayerSold401Error1Value)) onV1TcgplayerSold401Error1(
            v1TcgplayerSold401Error1Value);
        else if (TryGetV1TcgplayerSold429Error1(out var v1TcgplayerSold429Error1Value)) onV1TcgplayerSold429Error1(
            v1TcgplayerSold429Error1Value);
        else if (TryGetV1TcgplayerSold502Error1(out var v1TcgplayerSold502Error1Value)) onV1TcgplayerSold502Error1(
            v1TcgplayerSold502Error1Value);
        else if (TryGetV1TcgplayerSold503Error1(out var v1TcgplayerSold503Error1Value)) onV1TcgplayerSold503Error1(
            v1TcgplayerSold503Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetV1TcgplayerSoldError)} holds no value.");
    }

    private static Task<GetV1TcgplayerSoldError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<V1TcgplayerSold400Error1>().As(AsV1TcgplayerSold400Error1),
            401 => response.Json<V1TcgplayerSold401Error1>().As(AsV1TcgplayerSold401Error1),
            429 => response.Json<V1TcgplayerSold429Error1>().As(AsV1TcgplayerSold429Error1),
            502 => response.Json<V1TcgplayerSold502Error1>().As(AsV1TcgplayerSold502Error1),
            503 => response.Json<V1TcgplayerSold503Error1>().As(AsV1TcgplayerSold503Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetV1TcgplayerSoldError> Response { get; } = new(Create);
}
