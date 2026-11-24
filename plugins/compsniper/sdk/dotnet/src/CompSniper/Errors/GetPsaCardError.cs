using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using CompSniper.Core.ErrorResponse;
using CompSniper.Core.Models;
using CompSniper.Models;

namespace CompSniper.Errors;

public sealed class GetPsaCardError : ApiError
{
    private readonly Optional<V1PsaCard400Error1> _v1PsaCard400Error1Value;

    private readonly Optional<V1PsaCard401Error1> _v1PsaCard401Error1Value;

    private readonly Optional<V1PsaCard404Error1> _v1PsaCard404Error1Value;

    private readonly Optional<V1PsaCard429Error1> _v1PsaCard429Error1Value;

    private readonly Optional<V1PsaCard502Error1> _v1PsaCard502Error1Value;

    private readonly Optional<V1PsaCard503Error1> _v1PsaCard503Error1Value;

    private GetPsaCardError(Optional<V1PsaCard400Error1> v1PsaCard400Error1Value,
        Optional<V1PsaCard401Error1> v1PsaCard401Error1Value,
        Optional<V1PsaCard404Error1> v1PsaCard404Error1Value,
        Optional<V1PsaCard429Error1> v1PsaCard429Error1Value,
        Optional<V1PsaCard502Error1> v1PsaCard502Error1Value,
        Optional<V1PsaCard503Error1> v1PsaCard503Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _v1PsaCard400Error1Value = v1PsaCard400Error1Value;
        _v1PsaCard401Error1Value = v1PsaCard401Error1Value;
        _v1PsaCard404Error1Value = v1PsaCard404Error1Value;
        _v1PsaCard429Error1Value = v1PsaCard429Error1Value;
        _v1PsaCard502Error1Value = v1PsaCard502Error1Value;
        _v1PsaCard503Error1Value = v1PsaCard503Error1Value;
    }

    private static GetPsaCardError AsV1PsaCard400Error1(V1PsaCard400Error1 value) =>
        new(Optional<V1PsaCard400Error1>.Some(value), default, default, default, default, default, default);

    private static GetPsaCardError AsV1PsaCard401Error1(V1PsaCard401Error1 value) =>
        new(default, Optional<V1PsaCard401Error1>.Some(value), default, default, default, default, default);

    private static GetPsaCardError AsV1PsaCard404Error1(V1PsaCard404Error1 value) =>
        new(default, default, Optional<V1PsaCard404Error1>.Some(value), default, default, default, default);

    private static GetPsaCardError AsV1PsaCard429Error1(V1PsaCard429Error1 value) =>
        new(default, default, default, Optional<V1PsaCard429Error1>.Some(value), default, default, default);

    private static GetPsaCardError AsV1PsaCard502Error1(V1PsaCard502Error1 value) =>
        new(default, default, default, default, Optional<V1PsaCard502Error1>.Some(value), default, default);

    private static GetPsaCardError AsV1PsaCard503Error1(V1PsaCard503Error1 value) =>
        new(default, default, default, default, default, Optional<V1PsaCard503Error1>.Some(value), default);

    private static GetPsaCardError AsFallback(RawError value) =>
        new(default, default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetV1PsaCard400Error1([NotNullWhen(true)] out V1PsaCard400Error1? value) =>
        _v1PsaCard400Error1Value.TryGetValue(out value);

    public bool TryGetV1PsaCard401Error1([NotNullWhen(true)] out V1PsaCard401Error1? value) =>
        _v1PsaCard401Error1Value.TryGetValue(out value);

    public bool TryGetV1PsaCard404Error1([NotNullWhen(true)] out V1PsaCard404Error1? value) =>
        _v1PsaCard404Error1Value.TryGetValue(out value);

    public bool TryGetV1PsaCard429Error1([NotNullWhen(true)] out V1PsaCard429Error1? value) =>
        _v1PsaCard429Error1Value.TryGetValue(out value);

    public bool TryGetV1PsaCard502Error1([NotNullWhen(true)] out V1PsaCard502Error1? value) =>
        _v1PsaCard502Error1Value.TryGetValue(out value);

    public bool TryGetV1PsaCard503Error1([NotNullWhen(true)] out V1PsaCard503Error1? value) =>
        _v1PsaCard503Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<V1PsaCard400Error1, TResult> onV1PsaCard400Error1,
        Func<V1PsaCard401Error1, TResult> onV1PsaCard401Error1,
        Func<V1PsaCard404Error1, TResult> onV1PsaCard404Error1,
        Func<V1PsaCard429Error1, TResult> onV1PsaCard429Error1,
        Func<V1PsaCard502Error1, TResult> onV1PsaCard502Error1,
        Func<V1PsaCard503Error1, TResult> onV1PsaCard503Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetV1PsaCard400Error1(out var v1PsaCard400Error1Value) => onV1PsaCard400Error1(
                v1PsaCard400Error1Value),
            _ when TryGetV1PsaCard401Error1(out var v1PsaCard401Error1Value) => onV1PsaCard401Error1(
                v1PsaCard401Error1Value),
            _ when TryGetV1PsaCard404Error1(out var v1PsaCard404Error1Value) => onV1PsaCard404Error1(
                v1PsaCard404Error1Value),
            _ when TryGetV1PsaCard429Error1(out var v1PsaCard429Error1Value) => onV1PsaCard429Error1(
                v1PsaCard429Error1Value),
            _ when TryGetV1PsaCard502Error1(out var v1PsaCard502Error1Value) => onV1PsaCard502Error1(
                v1PsaCard502Error1Value),
            _ when TryGetV1PsaCard503Error1(out var v1PsaCard503Error1Value) => onV1PsaCard503Error1(
                v1PsaCard503Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetPsaCardError)} holds no value.")
        };

    public void Match(Action<V1PsaCard400Error1> onV1PsaCard400Error1,
        Action<V1PsaCard401Error1> onV1PsaCard401Error1,
        Action<V1PsaCard404Error1> onV1PsaCard404Error1,
        Action<V1PsaCard429Error1> onV1PsaCard429Error1,
        Action<V1PsaCard502Error1> onV1PsaCard502Error1,
        Action<V1PsaCard503Error1> onV1PsaCard503Error1,
        Action<RawError> otherwise)
    {
        if (TryGetV1PsaCard400Error1(out var v1PsaCard400Error1Value)) onV1PsaCard400Error1(v1PsaCard400Error1Value);
        else if (TryGetV1PsaCard401Error1(out var v1PsaCard401Error1Value)) onV1PsaCard401Error1(
            v1PsaCard401Error1Value);
        else if (TryGetV1PsaCard404Error1(out var v1PsaCard404Error1Value)) onV1PsaCard404Error1(
            v1PsaCard404Error1Value);
        else if (TryGetV1PsaCard429Error1(out var v1PsaCard429Error1Value)) onV1PsaCard429Error1(
            v1PsaCard429Error1Value);
        else if (TryGetV1PsaCard502Error1(out var v1PsaCard502Error1Value)) onV1PsaCard502Error1(
            v1PsaCard502Error1Value);
        else if (TryGetV1PsaCard503Error1(out var v1PsaCard503Error1Value)) onV1PsaCard503Error1(
            v1PsaCard503Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetPsaCardError)} holds no value.");
    }

    private static Task<GetPsaCardError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<V1PsaCard400Error1>().As(AsV1PsaCard400Error1),
            401 => response.Json<V1PsaCard401Error1>().As(AsV1PsaCard401Error1),
            404 => response.Json<V1PsaCard404Error1>().As(AsV1PsaCard404Error1),
            429 => response.Json<V1PsaCard429Error1>().As(AsV1PsaCard429Error1),
            502 => response.Json<V1PsaCard502Error1>().As(AsV1PsaCard502Error1),
            503 => response.Json<V1PsaCard503Error1>().As(AsV1PsaCard503Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetPsaCardError> Response { get; } = new(Create);
}
