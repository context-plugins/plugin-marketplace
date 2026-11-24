using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using CompSniper.Core.ErrorResponse;
using CompSniper.Core.Models;
using CompSniper.Models;

namespace CompSniper.Errors;

public sealed class GetPsaSetPopulationError : ApiError
{
    private readonly Optional<V1PsaSet400Error1> _v1PsaSet400Error1Value;

    private readonly Optional<V1PsaSet401Error1> _v1PsaSet401Error1Value;

    private readonly Optional<V1PsaSet429Error1> _v1PsaSet429Error1Value;

    private readonly Optional<V1PsaSet502Error1> _v1PsaSet502Error1Value;

    private readonly Optional<V1PsaSet503Error1> _v1PsaSet503Error1Value;

    private GetPsaSetPopulationError(Optional<V1PsaSet400Error1> v1PsaSet400Error1Value,
        Optional<V1PsaSet401Error1> v1PsaSet401Error1Value,
        Optional<V1PsaSet429Error1> v1PsaSet429Error1Value,
        Optional<V1PsaSet502Error1> v1PsaSet502Error1Value,
        Optional<V1PsaSet503Error1> v1PsaSet503Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _v1PsaSet400Error1Value = v1PsaSet400Error1Value;
        _v1PsaSet401Error1Value = v1PsaSet401Error1Value;
        _v1PsaSet429Error1Value = v1PsaSet429Error1Value;
        _v1PsaSet502Error1Value = v1PsaSet502Error1Value;
        _v1PsaSet503Error1Value = v1PsaSet503Error1Value;
    }

    private static GetPsaSetPopulationError AsV1PsaSet400Error1(V1PsaSet400Error1 value) =>
        new(Optional<V1PsaSet400Error1>.Some(value), default, default, default, default, default);

    private static GetPsaSetPopulationError AsV1PsaSet401Error1(V1PsaSet401Error1 value) =>
        new(default, Optional<V1PsaSet401Error1>.Some(value), default, default, default, default);

    private static GetPsaSetPopulationError AsV1PsaSet429Error1(V1PsaSet429Error1 value) =>
        new(default, default, Optional<V1PsaSet429Error1>.Some(value), default, default, default);

    private static GetPsaSetPopulationError AsV1PsaSet502Error1(V1PsaSet502Error1 value) =>
        new(default, default, default, Optional<V1PsaSet502Error1>.Some(value), default, default);

    private static GetPsaSetPopulationError AsV1PsaSet503Error1(V1PsaSet503Error1 value) =>
        new(default, default, default, default, Optional<V1PsaSet503Error1>.Some(value), default);

    private static GetPsaSetPopulationError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetV1PsaSet400Error1([NotNullWhen(true)] out V1PsaSet400Error1? value) =>
        _v1PsaSet400Error1Value.TryGetValue(out value);

    public bool TryGetV1PsaSet401Error1([NotNullWhen(true)] out V1PsaSet401Error1? value) =>
        _v1PsaSet401Error1Value.TryGetValue(out value);

    public bool TryGetV1PsaSet429Error1([NotNullWhen(true)] out V1PsaSet429Error1? value) =>
        _v1PsaSet429Error1Value.TryGetValue(out value);

    public bool TryGetV1PsaSet502Error1([NotNullWhen(true)] out V1PsaSet502Error1? value) =>
        _v1PsaSet502Error1Value.TryGetValue(out value);

    public bool TryGetV1PsaSet503Error1([NotNullWhen(true)] out V1PsaSet503Error1? value) =>
        _v1PsaSet503Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<V1PsaSet400Error1, TResult> onV1PsaSet400Error1,
        Func<V1PsaSet401Error1, TResult> onV1PsaSet401Error1,
        Func<V1PsaSet429Error1, TResult> onV1PsaSet429Error1,
        Func<V1PsaSet502Error1, TResult> onV1PsaSet502Error1,
        Func<V1PsaSet503Error1, TResult> onV1PsaSet503Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetV1PsaSet400Error1(out var v1PsaSet400Error1Value) => onV1PsaSet400Error1(
                v1PsaSet400Error1Value),
            _ when TryGetV1PsaSet401Error1(out var v1PsaSet401Error1Value) => onV1PsaSet401Error1(
                v1PsaSet401Error1Value),
            _ when TryGetV1PsaSet429Error1(out var v1PsaSet429Error1Value) => onV1PsaSet429Error1(
                v1PsaSet429Error1Value),
            _ when TryGetV1PsaSet502Error1(out var v1PsaSet502Error1Value) => onV1PsaSet502Error1(
                v1PsaSet502Error1Value),
            _ when TryGetV1PsaSet503Error1(out var v1PsaSet503Error1Value) => onV1PsaSet503Error1(
                v1PsaSet503Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetPsaSetPopulationError)} holds no value.")
        };

    public void Match(Action<V1PsaSet400Error1> onV1PsaSet400Error1,
        Action<V1PsaSet401Error1> onV1PsaSet401Error1,
        Action<V1PsaSet429Error1> onV1PsaSet429Error1,
        Action<V1PsaSet502Error1> onV1PsaSet502Error1,
        Action<V1PsaSet503Error1> onV1PsaSet503Error1,
        Action<RawError> otherwise)
    {
        if (TryGetV1PsaSet400Error1(out var v1PsaSet400Error1Value)) onV1PsaSet400Error1(v1PsaSet400Error1Value);
        else if (TryGetV1PsaSet401Error1(out var v1PsaSet401Error1Value)) onV1PsaSet401Error1(v1PsaSet401Error1Value);
        else if (TryGetV1PsaSet429Error1(out var v1PsaSet429Error1Value)) onV1PsaSet429Error1(v1PsaSet429Error1Value);
        else if (TryGetV1PsaSet502Error1(out var v1PsaSet502Error1Value)) onV1PsaSet502Error1(v1PsaSet502Error1Value);
        else if (TryGetV1PsaSet503Error1(out var v1PsaSet503Error1Value)) onV1PsaSet503Error1(v1PsaSet503Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetPsaSetPopulationError)} holds no value.");
    }

    private static Task<GetPsaSetPopulationError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<V1PsaSet400Error1>().As(AsV1PsaSet400Error1),
            401 => response.Json<V1PsaSet401Error1>().As(AsV1PsaSet401Error1),
            429 => response.Json<V1PsaSet429Error1>().As(AsV1PsaSet429Error1),
            502 => response.Json<V1PsaSet502Error1>().As(AsV1PsaSet502Error1),
            503 => response.Json<V1PsaSet503Error1>().As(AsV1PsaSet503Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetPsaSetPopulationError> Response { get; } = new(Create);
}
