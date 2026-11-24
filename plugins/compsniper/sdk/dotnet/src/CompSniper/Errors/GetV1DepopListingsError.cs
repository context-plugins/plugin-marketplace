using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using CompSniper.Core.ErrorResponse;
using CompSniper.Core.Models;
using CompSniper.Models;

namespace CompSniper.Errors;

public sealed class GetV1DepopListingsError : ApiError
{
    private readonly Optional<V1DepopListings400Error1> _v1DepopListings400Error1Value;

    private readonly Optional<V1DepopListings401Error1> _v1DepopListings401Error1Value;

    private readonly Optional<V1DepopListings429Error1> _v1DepopListings429Error1Value;

    private readonly Optional<V1DepopListings502Error1> _v1DepopListings502Error1Value;

    private readonly Optional<V1DepopListings503Error1> _v1DepopListings503Error1Value;

    private GetV1DepopListingsError(Optional<V1DepopListings400Error1> v1DepopListings400Error1Value,
        Optional<V1DepopListings401Error1> v1DepopListings401Error1Value,
        Optional<V1DepopListings429Error1> v1DepopListings429Error1Value,
        Optional<V1DepopListings502Error1> v1DepopListings502Error1Value,
        Optional<V1DepopListings503Error1> v1DepopListings503Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _v1DepopListings400Error1Value = v1DepopListings400Error1Value;
        _v1DepopListings401Error1Value = v1DepopListings401Error1Value;
        _v1DepopListings429Error1Value = v1DepopListings429Error1Value;
        _v1DepopListings502Error1Value = v1DepopListings502Error1Value;
        _v1DepopListings503Error1Value = v1DepopListings503Error1Value;
    }

    private static GetV1DepopListingsError AsV1DepopListings400Error1(V1DepopListings400Error1 value) =>
        new(Optional<V1DepopListings400Error1>.Some(value), default, default, default, default, default);

    private static GetV1DepopListingsError AsV1DepopListings401Error1(V1DepopListings401Error1 value) =>
        new(default, Optional<V1DepopListings401Error1>.Some(value), default, default, default, default);

    private static GetV1DepopListingsError AsV1DepopListings429Error1(V1DepopListings429Error1 value) =>
        new(default, default, Optional<V1DepopListings429Error1>.Some(value), default, default, default);

    private static GetV1DepopListingsError AsV1DepopListings502Error1(V1DepopListings502Error1 value) =>
        new(default, default, default, Optional<V1DepopListings502Error1>.Some(value), default, default);

    private static GetV1DepopListingsError AsV1DepopListings503Error1(V1DepopListings503Error1 value) =>
        new(default, default, default, default, Optional<V1DepopListings503Error1>.Some(value), default);

    private static GetV1DepopListingsError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetV1DepopListings400Error1([NotNullWhen(true)] out V1DepopListings400Error1? value) =>
        _v1DepopListings400Error1Value.TryGetValue(out value);

    public bool TryGetV1DepopListings401Error1([NotNullWhen(true)] out V1DepopListings401Error1? value) =>
        _v1DepopListings401Error1Value.TryGetValue(out value);

    public bool TryGetV1DepopListings429Error1([NotNullWhen(true)] out V1DepopListings429Error1? value) =>
        _v1DepopListings429Error1Value.TryGetValue(out value);

    public bool TryGetV1DepopListings502Error1([NotNullWhen(true)] out V1DepopListings502Error1? value) =>
        _v1DepopListings502Error1Value.TryGetValue(out value);

    public bool TryGetV1DepopListings503Error1([NotNullWhen(true)] out V1DepopListings503Error1? value) =>
        _v1DepopListings503Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<V1DepopListings400Error1, TResult> onV1DepopListings400Error1,
        Func<V1DepopListings401Error1, TResult> onV1DepopListings401Error1,
        Func<V1DepopListings429Error1, TResult> onV1DepopListings429Error1,
        Func<V1DepopListings502Error1, TResult> onV1DepopListings502Error1,
        Func<V1DepopListings503Error1, TResult> onV1DepopListings503Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetV1DepopListings400Error1(out var v1DepopListings400Error1Value) => onV1DepopListings400Error1(
                v1DepopListings400Error1Value),
            _ when TryGetV1DepopListings401Error1(out var v1DepopListings401Error1Value) => onV1DepopListings401Error1(
                v1DepopListings401Error1Value),
            _ when TryGetV1DepopListings429Error1(out var v1DepopListings429Error1Value) => onV1DepopListings429Error1(
                v1DepopListings429Error1Value),
            _ when TryGetV1DepopListings502Error1(out var v1DepopListings502Error1Value) => onV1DepopListings502Error1(
                v1DepopListings502Error1Value),
            _ when TryGetV1DepopListings503Error1(out var v1DepopListings503Error1Value) => onV1DepopListings503Error1(
                v1DepopListings503Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetV1DepopListingsError)} holds no value.")
        };

    public void Match(Action<V1DepopListings400Error1> onV1DepopListings400Error1,
        Action<V1DepopListings401Error1> onV1DepopListings401Error1,
        Action<V1DepopListings429Error1> onV1DepopListings429Error1,
        Action<V1DepopListings502Error1> onV1DepopListings502Error1,
        Action<V1DepopListings503Error1> onV1DepopListings503Error1,
        Action<RawError> otherwise)
    {
        if (TryGetV1DepopListings400Error1(out var v1DepopListings400Error1Value)) onV1DepopListings400Error1(
            v1DepopListings400Error1Value);
        else if (TryGetV1DepopListings401Error1(out var v1DepopListings401Error1Value)) onV1DepopListings401Error1(
            v1DepopListings401Error1Value);
        else if (TryGetV1DepopListings429Error1(out var v1DepopListings429Error1Value)) onV1DepopListings429Error1(
            v1DepopListings429Error1Value);
        else if (TryGetV1DepopListings502Error1(out var v1DepopListings502Error1Value)) onV1DepopListings502Error1(
            v1DepopListings502Error1Value);
        else if (TryGetV1DepopListings503Error1(out var v1DepopListings503Error1Value)) onV1DepopListings503Error1(
            v1DepopListings503Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetV1DepopListingsError)} holds no value.");
    }

    private static Task<GetV1DepopListingsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<V1DepopListings400Error1>().As(AsV1DepopListings400Error1),
            401 => response.Json<V1DepopListings401Error1>().As(AsV1DepopListings401Error1),
            429 => response.Json<V1DepopListings429Error1>().As(AsV1DepopListings429Error1),
            502 => response.Json<V1DepopListings502Error1>().As(AsV1DepopListings502Error1),
            503 => response.Json<V1DepopListings503Error1>().As(AsV1DepopListings503Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetV1DepopListingsError> Response { get; } = new(Create);
}
