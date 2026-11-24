using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using CompSniper.Core.ErrorResponse;
using CompSniper.Core.Models;
using CompSniper.Models;

namespace CompSniper.Errors;

public sealed class GetV1TcgplayerListingsError : ApiError
{
    private readonly Optional<V1TcgplayerListings400Error1> _v1TcgplayerListings400Error1Value;

    private readonly Optional<V1TcgplayerListings401Error1> _v1TcgplayerListings401Error1Value;

    private readonly Optional<V1TcgplayerListings429Error1> _v1TcgplayerListings429Error1Value;

    private readonly Optional<V1TcgplayerListings502Error1> _v1TcgplayerListings502Error1Value;

    private readonly Optional<V1TcgplayerListings503Error1> _v1TcgplayerListings503Error1Value;

    private GetV1TcgplayerListingsError(Optional<V1TcgplayerListings400Error1> v1TcgplayerListings400Error1Value,
        Optional<V1TcgplayerListings401Error1> v1TcgplayerListings401Error1Value,
        Optional<V1TcgplayerListings429Error1> v1TcgplayerListings429Error1Value,
        Optional<V1TcgplayerListings502Error1> v1TcgplayerListings502Error1Value,
        Optional<V1TcgplayerListings503Error1> v1TcgplayerListings503Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _v1TcgplayerListings400Error1Value = v1TcgplayerListings400Error1Value;
        _v1TcgplayerListings401Error1Value = v1TcgplayerListings401Error1Value;
        _v1TcgplayerListings429Error1Value = v1TcgplayerListings429Error1Value;
        _v1TcgplayerListings502Error1Value = v1TcgplayerListings502Error1Value;
        _v1TcgplayerListings503Error1Value = v1TcgplayerListings503Error1Value;
    }

    private static GetV1TcgplayerListingsError AsV1TcgplayerListings400Error1(V1TcgplayerListings400Error1 value) =>
        new(Optional<V1TcgplayerListings400Error1>.Some(value), default, default, default, default, default);

    private static GetV1TcgplayerListingsError AsV1TcgplayerListings401Error1(V1TcgplayerListings401Error1 value) =>
        new(default, Optional<V1TcgplayerListings401Error1>.Some(value), default, default, default, default);

    private static GetV1TcgplayerListingsError AsV1TcgplayerListings429Error1(V1TcgplayerListings429Error1 value) =>
        new(default, default, Optional<V1TcgplayerListings429Error1>.Some(value), default, default, default);

    private static GetV1TcgplayerListingsError AsV1TcgplayerListings502Error1(V1TcgplayerListings502Error1 value) =>
        new(default, default, default, Optional<V1TcgplayerListings502Error1>.Some(value), default, default);

    private static GetV1TcgplayerListingsError AsV1TcgplayerListings503Error1(V1TcgplayerListings503Error1 value) =>
        new(default, default, default, default, Optional<V1TcgplayerListings503Error1>.Some(value), default);

    private static GetV1TcgplayerListingsError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetV1TcgplayerListings400Error1([NotNullWhen(true)] out V1TcgplayerListings400Error1? value) =>
        _v1TcgplayerListings400Error1Value.TryGetValue(out value);

    public bool TryGetV1TcgplayerListings401Error1([NotNullWhen(true)] out V1TcgplayerListings401Error1? value) =>
        _v1TcgplayerListings401Error1Value.TryGetValue(out value);

    public bool TryGetV1TcgplayerListings429Error1([NotNullWhen(true)] out V1TcgplayerListings429Error1? value) =>
        _v1TcgplayerListings429Error1Value.TryGetValue(out value);

    public bool TryGetV1TcgplayerListings502Error1([NotNullWhen(true)] out V1TcgplayerListings502Error1? value) =>
        _v1TcgplayerListings502Error1Value.TryGetValue(out value);

    public bool TryGetV1TcgplayerListings503Error1([NotNullWhen(true)] out V1TcgplayerListings503Error1? value) =>
        _v1TcgplayerListings503Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<V1TcgplayerListings400Error1, TResult> onV1TcgplayerListings400Error1,
        Func<V1TcgplayerListings401Error1, TResult> onV1TcgplayerListings401Error1,
        Func<V1TcgplayerListings429Error1, TResult> onV1TcgplayerListings429Error1,
        Func<V1TcgplayerListings502Error1, TResult> onV1TcgplayerListings502Error1,
        Func<V1TcgplayerListings503Error1, TResult> onV1TcgplayerListings503Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetV1TcgplayerListings400Error1(
                out var v1TcgplayerListings400Error1Value) => onV1TcgplayerListings400Error1(
                v1TcgplayerListings400Error1Value),
            _ when TryGetV1TcgplayerListings401Error1(
                out var v1TcgplayerListings401Error1Value) => onV1TcgplayerListings401Error1(
                v1TcgplayerListings401Error1Value),
            _ when TryGetV1TcgplayerListings429Error1(
                out var v1TcgplayerListings429Error1Value) => onV1TcgplayerListings429Error1(
                v1TcgplayerListings429Error1Value),
            _ when TryGetV1TcgplayerListings502Error1(
                out var v1TcgplayerListings502Error1Value) => onV1TcgplayerListings502Error1(
                v1TcgplayerListings502Error1Value),
            _ when TryGetV1TcgplayerListings503Error1(
                out var v1TcgplayerListings503Error1Value) => onV1TcgplayerListings503Error1(
                v1TcgplayerListings503Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetV1TcgplayerListingsError)} holds no value.")
        };

    public void Match(Action<V1TcgplayerListings400Error1> onV1TcgplayerListings400Error1,
        Action<V1TcgplayerListings401Error1> onV1TcgplayerListings401Error1,
        Action<V1TcgplayerListings429Error1> onV1TcgplayerListings429Error1,
        Action<V1TcgplayerListings502Error1> onV1TcgplayerListings502Error1,
        Action<V1TcgplayerListings503Error1> onV1TcgplayerListings503Error1,
        Action<RawError> otherwise)
    {
        if (TryGetV1TcgplayerListings400Error1(
            out var v1TcgplayerListings400Error1Value)) onV1TcgplayerListings400Error1(
            v1TcgplayerListings400Error1Value);
        else if (TryGetV1TcgplayerListings401Error1(
            out var v1TcgplayerListings401Error1Value)) onV1TcgplayerListings401Error1(
            v1TcgplayerListings401Error1Value);
        else if (TryGetV1TcgplayerListings429Error1(
            out var v1TcgplayerListings429Error1Value)) onV1TcgplayerListings429Error1(
            v1TcgplayerListings429Error1Value);
        else if (TryGetV1TcgplayerListings502Error1(
            out var v1TcgplayerListings502Error1Value)) onV1TcgplayerListings502Error1(
            v1TcgplayerListings502Error1Value);
        else if (TryGetV1TcgplayerListings503Error1(
            out var v1TcgplayerListings503Error1Value)) onV1TcgplayerListings503Error1(
            v1TcgplayerListings503Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetV1TcgplayerListingsError)} holds no value.");
    }

    private static Task<GetV1TcgplayerListingsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<V1TcgplayerListings400Error1>().As(AsV1TcgplayerListings400Error1),
            401 => response.Json<V1TcgplayerListings401Error1>().As(AsV1TcgplayerListings401Error1),
            429 => response.Json<V1TcgplayerListings429Error1>().As(AsV1TcgplayerListings429Error1),
            502 => response.Json<V1TcgplayerListings502Error1>().As(AsV1TcgplayerListings502Error1),
            503 => response.Json<V1TcgplayerListings503Error1>().As(AsV1TcgplayerListings503Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetV1TcgplayerListingsError> Response { get; } = new(Create);
}
