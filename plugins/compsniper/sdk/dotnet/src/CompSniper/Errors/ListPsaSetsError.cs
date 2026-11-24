using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using CompSniper.Core.ErrorResponse;
using CompSniper.Core.Models;
using CompSniper.Models;

namespace CompSniper.Errors;

public sealed class ListPsaSetsError : ApiError
{
    private readonly Optional<V1PsaSets400Error1> _v1PsaSets400Error1Value;

    private readonly Optional<V1PsaSets401Error1> _v1PsaSets401Error1Value;

    private readonly Optional<V1PsaSets429Error1> _v1PsaSets429Error1Value;

    private readonly Optional<V1PsaSets502Error1> _v1PsaSets502Error1Value;

    private readonly Optional<V1PsaSets503Error1> _v1PsaSets503Error1Value;

    private ListPsaSetsError(Optional<V1PsaSets400Error1> v1PsaSets400Error1Value,
        Optional<V1PsaSets401Error1> v1PsaSets401Error1Value,
        Optional<V1PsaSets429Error1> v1PsaSets429Error1Value,
        Optional<V1PsaSets502Error1> v1PsaSets502Error1Value,
        Optional<V1PsaSets503Error1> v1PsaSets503Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _v1PsaSets400Error1Value = v1PsaSets400Error1Value;
        _v1PsaSets401Error1Value = v1PsaSets401Error1Value;
        _v1PsaSets429Error1Value = v1PsaSets429Error1Value;
        _v1PsaSets502Error1Value = v1PsaSets502Error1Value;
        _v1PsaSets503Error1Value = v1PsaSets503Error1Value;
    }

    private static ListPsaSetsError AsV1PsaSets400Error1(V1PsaSets400Error1 value) =>
        new(Optional<V1PsaSets400Error1>.Some(value), default, default, default, default, default);

    private static ListPsaSetsError AsV1PsaSets401Error1(V1PsaSets401Error1 value) =>
        new(default, Optional<V1PsaSets401Error1>.Some(value), default, default, default, default);

    private static ListPsaSetsError AsV1PsaSets429Error1(V1PsaSets429Error1 value) =>
        new(default, default, Optional<V1PsaSets429Error1>.Some(value), default, default, default);

    private static ListPsaSetsError AsV1PsaSets502Error1(V1PsaSets502Error1 value) =>
        new(default, default, default, Optional<V1PsaSets502Error1>.Some(value), default, default);

    private static ListPsaSetsError AsV1PsaSets503Error1(V1PsaSets503Error1 value) =>
        new(default, default, default, default, Optional<V1PsaSets503Error1>.Some(value), default);

    private static ListPsaSetsError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetV1PsaSets400Error1([NotNullWhen(true)] out V1PsaSets400Error1? value) =>
        _v1PsaSets400Error1Value.TryGetValue(out value);

    public bool TryGetV1PsaSets401Error1([NotNullWhen(true)] out V1PsaSets401Error1? value) =>
        _v1PsaSets401Error1Value.TryGetValue(out value);

    public bool TryGetV1PsaSets429Error1([NotNullWhen(true)] out V1PsaSets429Error1? value) =>
        _v1PsaSets429Error1Value.TryGetValue(out value);

    public bool TryGetV1PsaSets502Error1([NotNullWhen(true)] out V1PsaSets502Error1? value) =>
        _v1PsaSets502Error1Value.TryGetValue(out value);

    public bool TryGetV1PsaSets503Error1([NotNullWhen(true)] out V1PsaSets503Error1? value) =>
        _v1PsaSets503Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<V1PsaSets400Error1, TResult> onV1PsaSets400Error1,
        Func<V1PsaSets401Error1, TResult> onV1PsaSets401Error1,
        Func<V1PsaSets429Error1, TResult> onV1PsaSets429Error1,
        Func<V1PsaSets502Error1, TResult> onV1PsaSets502Error1,
        Func<V1PsaSets503Error1, TResult> onV1PsaSets503Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetV1PsaSets400Error1(out var v1PsaSets400Error1Value) => onV1PsaSets400Error1(
                v1PsaSets400Error1Value),
            _ when TryGetV1PsaSets401Error1(out var v1PsaSets401Error1Value) => onV1PsaSets401Error1(
                v1PsaSets401Error1Value),
            _ when TryGetV1PsaSets429Error1(out var v1PsaSets429Error1Value) => onV1PsaSets429Error1(
                v1PsaSets429Error1Value),
            _ when TryGetV1PsaSets502Error1(out var v1PsaSets502Error1Value) => onV1PsaSets502Error1(
                v1PsaSets502Error1Value),
            _ when TryGetV1PsaSets503Error1(out var v1PsaSets503Error1Value) => onV1PsaSets503Error1(
                v1PsaSets503Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListPsaSetsError)} holds no value.")
        };

    public void Match(Action<V1PsaSets400Error1> onV1PsaSets400Error1,
        Action<V1PsaSets401Error1> onV1PsaSets401Error1,
        Action<V1PsaSets429Error1> onV1PsaSets429Error1,
        Action<V1PsaSets502Error1> onV1PsaSets502Error1,
        Action<V1PsaSets503Error1> onV1PsaSets503Error1,
        Action<RawError> otherwise)
    {
        if (TryGetV1PsaSets400Error1(out var v1PsaSets400Error1Value)) onV1PsaSets400Error1(v1PsaSets400Error1Value);
        else if (TryGetV1PsaSets401Error1(out var v1PsaSets401Error1Value)) onV1PsaSets401Error1(
            v1PsaSets401Error1Value);
        else if (TryGetV1PsaSets429Error1(out var v1PsaSets429Error1Value)) onV1PsaSets429Error1(
            v1PsaSets429Error1Value);
        else if (TryGetV1PsaSets502Error1(out var v1PsaSets502Error1Value)) onV1PsaSets502Error1(
            v1PsaSets502Error1Value);
        else if (TryGetV1PsaSets503Error1(out var v1PsaSets503Error1Value)) onV1PsaSets503Error1(
            v1PsaSets503Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListPsaSetsError)} holds no value.");
    }

    private static Task<ListPsaSetsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<V1PsaSets400Error1>().As(AsV1PsaSets400Error1),
            401 => response.Json<V1PsaSets401Error1>().As(AsV1PsaSets401Error1),
            429 => response.Json<V1PsaSets429Error1>().As(AsV1PsaSets429Error1),
            502 => response.Json<V1PsaSets502Error1>().As(AsV1PsaSets502Error1),
            503 => response.Json<V1PsaSets503Error1>().As(AsV1PsaSets503Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListPsaSetsError> Response { get; } = new(Create);
}
