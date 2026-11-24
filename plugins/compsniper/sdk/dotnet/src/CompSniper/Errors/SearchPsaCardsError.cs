using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using CompSniper.Core.ErrorResponse;
using CompSniper.Core.Models;
using CompSniper.Models;

namespace CompSniper.Errors;

public sealed class SearchPsaCardsError : ApiError
{
    private readonly Optional<V1PsaSearch400Error1> _v1PsaSearch400Error1Value;

    private readonly Optional<V1PsaSearch401Error1> _v1PsaSearch401Error1Value;

    private readonly Optional<V1PsaSearch429Error1> _v1PsaSearch429Error1Value;

    private readonly Optional<V1PsaSearch502Error1> _v1PsaSearch502Error1Value;

    private readonly Optional<V1PsaSearch503Error1> _v1PsaSearch503Error1Value;

    private SearchPsaCardsError(Optional<V1PsaSearch400Error1> v1PsaSearch400Error1Value,
        Optional<V1PsaSearch401Error1> v1PsaSearch401Error1Value,
        Optional<V1PsaSearch429Error1> v1PsaSearch429Error1Value,
        Optional<V1PsaSearch502Error1> v1PsaSearch502Error1Value,
        Optional<V1PsaSearch503Error1> v1PsaSearch503Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _v1PsaSearch400Error1Value = v1PsaSearch400Error1Value;
        _v1PsaSearch401Error1Value = v1PsaSearch401Error1Value;
        _v1PsaSearch429Error1Value = v1PsaSearch429Error1Value;
        _v1PsaSearch502Error1Value = v1PsaSearch502Error1Value;
        _v1PsaSearch503Error1Value = v1PsaSearch503Error1Value;
    }

    private static SearchPsaCardsError AsV1PsaSearch400Error1(V1PsaSearch400Error1 value) =>
        new(Optional<V1PsaSearch400Error1>.Some(value), default, default, default, default, default);

    private static SearchPsaCardsError AsV1PsaSearch401Error1(V1PsaSearch401Error1 value) =>
        new(default, Optional<V1PsaSearch401Error1>.Some(value), default, default, default, default);

    private static SearchPsaCardsError AsV1PsaSearch429Error1(V1PsaSearch429Error1 value) =>
        new(default, default, Optional<V1PsaSearch429Error1>.Some(value), default, default, default);

    private static SearchPsaCardsError AsV1PsaSearch502Error1(V1PsaSearch502Error1 value) =>
        new(default, default, default, Optional<V1PsaSearch502Error1>.Some(value), default, default);

    private static SearchPsaCardsError AsV1PsaSearch503Error1(V1PsaSearch503Error1 value) =>
        new(default, default, default, default, Optional<V1PsaSearch503Error1>.Some(value), default);

    private static SearchPsaCardsError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetV1PsaSearch400Error1([NotNullWhen(true)] out V1PsaSearch400Error1? value) =>
        _v1PsaSearch400Error1Value.TryGetValue(out value);

    public bool TryGetV1PsaSearch401Error1([NotNullWhen(true)] out V1PsaSearch401Error1? value) =>
        _v1PsaSearch401Error1Value.TryGetValue(out value);

    public bool TryGetV1PsaSearch429Error1([NotNullWhen(true)] out V1PsaSearch429Error1? value) =>
        _v1PsaSearch429Error1Value.TryGetValue(out value);

    public bool TryGetV1PsaSearch502Error1([NotNullWhen(true)] out V1PsaSearch502Error1? value) =>
        _v1PsaSearch502Error1Value.TryGetValue(out value);

    public bool TryGetV1PsaSearch503Error1([NotNullWhen(true)] out V1PsaSearch503Error1? value) =>
        _v1PsaSearch503Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<V1PsaSearch400Error1, TResult> onV1PsaSearch400Error1,
        Func<V1PsaSearch401Error1, TResult> onV1PsaSearch401Error1,
        Func<V1PsaSearch429Error1, TResult> onV1PsaSearch429Error1,
        Func<V1PsaSearch502Error1, TResult> onV1PsaSearch502Error1,
        Func<V1PsaSearch503Error1, TResult> onV1PsaSearch503Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetV1PsaSearch400Error1(out var v1PsaSearch400Error1Value) => onV1PsaSearch400Error1(
                v1PsaSearch400Error1Value),
            _ when TryGetV1PsaSearch401Error1(out var v1PsaSearch401Error1Value) => onV1PsaSearch401Error1(
                v1PsaSearch401Error1Value),
            _ when TryGetV1PsaSearch429Error1(out var v1PsaSearch429Error1Value) => onV1PsaSearch429Error1(
                v1PsaSearch429Error1Value),
            _ when TryGetV1PsaSearch502Error1(out var v1PsaSearch502Error1Value) => onV1PsaSearch502Error1(
                v1PsaSearch502Error1Value),
            _ when TryGetV1PsaSearch503Error1(out var v1PsaSearch503Error1Value) => onV1PsaSearch503Error1(
                v1PsaSearch503Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SearchPsaCardsError)} holds no value.")
        };

    public void Match(Action<V1PsaSearch400Error1> onV1PsaSearch400Error1,
        Action<V1PsaSearch401Error1> onV1PsaSearch401Error1,
        Action<V1PsaSearch429Error1> onV1PsaSearch429Error1,
        Action<V1PsaSearch502Error1> onV1PsaSearch502Error1,
        Action<V1PsaSearch503Error1> onV1PsaSearch503Error1,
        Action<RawError> otherwise)
    {
        if (TryGetV1PsaSearch400Error1(out var v1PsaSearch400Error1Value)) onV1PsaSearch400Error1(
            v1PsaSearch400Error1Value);
        else if (TryGetV1PsaSearch401Error1(out var v1PsaSearch401Error1Value)) onV1PsaSearch401Error1(
            v1PsaSearch401Error1Value);
        else if (TryGetV1PsaSearch429Error1(out var v1PsaSearch429Error1Value)) onV1PsaSearch429Error1(
            v1PsaSearch429Error1Value);
        else if (TryGetV1PsaSearch502Error1(out var v1PsaSearch502Error1Value)) onV1PsaSearch502Error1(
            v1PsaSearch502Error1Value);
        else if (TryGetV1PsaSearch503Error1(out var v1PsaSearch503Error1Value)) onV1PsaSearch503Error1(
            v1PsaSearch503Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SearchPsaCardsError)} holds no value.");
    }

    private static Task<SearchPsaCardsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<V1PsaSearch400Error1>().As(AsV1PsaSearch400Error1),
            401 => response.Json<V1PsaSearch401Error1>().As(AsV1PsaSearch401Error1),
            429 => response.Json<V1PsaSearch429Error1>().As(AsV1PsaSearch429Error1),
            502 => response.Json<V1PsaSearch502Error1>().As(AsV1PsaSearch502Error1),
            503 => response.Json<V1PsaSearch503Error1>().As(AsV1PsaSearch503Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SearchPsaCardsError> Response { get; } = new(Create);
}
