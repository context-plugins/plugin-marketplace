using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using CompSniper.Core.ErrorResponse;
using CompSniper.Core.Models;
using CompSniper.Models;

namespace CompSniper.Errors;

public sealed class GetV1GrailedListingsError : ApiError
{
    private readonly Optional<V1GrailedListings400Error1> _v1GrailedListings400Error1Value;

    private readonly Optional<V1GrailedListings401Error1> _v1GrailedListings401Error1Value;

    private readonly Optional<V1GrailedListings429Error1> _v1GrailedListings429Error1Value;

    private readonly Optional<V1GrailedListings502Error1> _v1GrailedListings502Error1Value;

    private readonly Optional<V1GrailedListings503Error1> _v1GrailedListings503Error1Value;

    private GetV1GrailedListingsError(Optional<V1GrailedListings400Error1> v1GrailedListings400Error1Value,
        Optional<V1GrailedListings401Error1> v1GrailedListings401Error1Value,
        Optional<V1GrailedListings429Error1> v1GrailedListings429Error1Value,
        Optional<V1GrailedListings502Error1> v1GrailedListings502Error1Value,
        Optional<V1GrailedListings503Error1> v1GrailedListings503Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _v1GrailedListings400Error1Value = v1GrailedListings400Error1Value;
        _v1GrailedListings401Error1Value = v1GrailedListings401Error1Value;
        _v1GrailedListings429Error1Value = v1GrailedListings429Error1Value;
        _v1GrailedListings502Error1Value = v1GrailedListings502Error1Value;
        _v1GrailedListings503Error1Value = v1GrailedListings503Error1Value;
    }

    private static GetV1GrailedListingsError AsV1GrailedListings400Error1(V1GrailedListings400Error1 value) =>
        new(Optional<V1GrailedListings400Error1>.Some(value), default, default, default, default, default);

    private static GetV1GrailedListingsError AsV1GrailedListings401Error1(V1GrailedListings401Error1 value) =>
        new(default, Optional<V1GrailedListings401Error1>.Some(value), default, default, default, default);

    private static GetV1GrailedListingsError AsV1GrailedListings429Error1(V1GrailedListings429Error1 value) =>
        new(default, default, Optional<V1GrailedListings429Error1>.Some(value), default, default, default);

    private static GetV1GrailedListingsError AsV1GrailedListings502Error1(V1GrailedListings502Error1 value) =>
        new(default, default, default, Optional<V1GrailedListings502Error1>.Some(value), default, default);

    private static GetV1GrailedListingsError AsV1GrailedListings503Error1(V1GrailedListings503Error1 value) =>
        new(default, default, default, default, Optional<V1GrailedListings503Error1>.Some(value), default);

    private static GetV1GrailedListingsError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetV1GrailedListings400Error1([NotNullWhen(true)] out V1GrailedListings400Error1? value) =>
        _v1GrailedListings400Error1Value.TryGetValue(out value);

    public bool TryGetV1GrailedListings401Error1([NotNullWhen(true)] out V1GrailedListings401Error1? value) =>
        _v1GrailedListings401Error1Value.TryGetValue(out value);

    public bool TryGetV1GrailedListings429Error1([NotNullWhen(true)] out V1GrailedListings429Error1? value) =>
        _v1GrailedListings429Error1Value.TryGetValue(out value);

    public bool TryGetV1GrailedListings502Error1([NotNullWhen(true)] out V1GrailedListings502Error1? value) =>
        _v1GrailedListings502Error1Value.TryGetValue(out value);

    public bool TryGetV1GrailedListings503Error1([NotNullWhen(true)] out V1GrailedListings503Error1? value) =>
        _v1GrailedListings503Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<V1GrailedListings400Error1, TResult> onV1GrailedListings400Error1,
        Func<V1GrailedListings401Error1, TResult> onV1GrailedListings401Error1,
        Func<V1GrailedListings429Error1, TResult> onV1GrailedListings429Error1,
        Func<V1GrailedListings502Error1, TResult> onV1GrailedListings502Error1,
        Func<V1GrailedListings503Error1, TResult> onV1GrailedListings503Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetV1GrailedListings400Error1(
                out var v1GrailedListings400Error1Value) => onV1GrailedListings400Error1(
                v1GrailedListings400Error1Value),
            _ when TryGetV1GrailedListings401Error1(
                out var v1GrailedListings401Error1Value) => onV1GrailedListings401Error1(
                v1GrailedListings401Error1Value),
            _ when TryGetV1GrailedListings429Error1(
                out var v1GrailedListings429Error1Value) => onV1GrailedListings429Error1(
                v1GrailedListings429Error1Value),
            _ when TryGetV1GrailedListings502Error1(
                out var v1GrailedListings502Error1Value) => onV1GrailedListings502Error1(
                v1GrailedListings502Error1Value),
            _ when TryGetV1GrailedListings503Error1(
                out var v1GrailedListings503Error1Value) => onV1GrailedListings503Error1(
                v1GrailedListings503Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetV1GrailedListingsError)} holds no value.")
        };

    public void Match(Action<V1GrailedListings400Error1> onV1GrailedListings400Error1,
        Action<V1GrailedListings401Error1> onV1GrailedListings401Error1,
        Action<V1GrailedListings429Error1> onV1GrailedListings429Error1,
        Action<V1GrailedListings502Error1> onV1GrailedListings502Error1,
        Action<V1GrailedListings503Error1> onV1GrailedListings503Error1,
        Action<RawError> otherwise)
    {
        if (TryGetV1GrailedListings400Error1(out var v1GrailedListings400Error1Value)) onV1GrailedListings400Error1(
            v1GrailedListings400Error1Value);
        else if (TryGetV1GrailedListings401Error1(
            out var v1GrailedListings401Error1Value)) onV1GrailedListings401Error1(v1GrailedListings401Error1Value);
        else if (TryGetV1GrailedListings429Error1(
            out var v1GrailedListings429Error1Value)) onV1GrailedListings429Error1(v1GrailedListings429Error1Value);
        else if (TryGetV1GrailedListings502Error1(
            out var v1GrailedListings502Error1Value)) onV1GrailedListings502Error1(v1GrailedListings502Error1Value);
        else if (TryGetV1GrailedListings503Error1(
            out var v1GrailedListings503Error1Value)) onV1GrailedListings503Error1(v1GrailedListings503Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetV1GrailedListingsError)} holds no value.");
    }

    private static Task<GetV1GrailedListingsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<V1GrailedListings400Error1>().As(AsV1GrailedListings400Error1),
            401 => response.Json<V1GrailedListings401Error1>().As(AsV1GrailedListings401Error1),
            429 => response.Json<V1GrailedListings429Error1>().As(AsV1GrailedListings429Error1),
            502 => response.Json<V1GrailedListings502Error1>().As(AsV1GrailedListings502Error1),
            503 => response.Json<V1GrailedListings503Error1>().As(AsV1GrailedListings503Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetV1GrailedListingsError> Response { get; } = new(Create);
}
