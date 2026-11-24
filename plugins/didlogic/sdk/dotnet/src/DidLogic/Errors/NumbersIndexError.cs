using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class NumbersIndexError : ApiError
{
    private readonly Optional<ApiV2Numbers401Error1> _apiV2Numbers401Error1Value;

    private NumbersIndexError(Optional<ApiV2Numbers401Error1> apiV2Numbers401Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2Numbers401Error1Value = apiV2Numbers401Error1Value;
    }

    private static NumbersIndexError AsApiV2Numbers401Error1(ApiV2Numbers401Error1 value) =>
        new(Optional<ApiV2Numbers401Error1>.Some(value), default);

    private static NumbersIndexError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiV2Numbers401Error1([NotNullWhen(true)] out ApiV2Numbers401Error1? value) =>
        _apiV2Numbers401Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2Numbers401Error1, TResult> onApiV2Numbers401Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2Numbers401Error1(out var apiV2Numbers401Error1Value) => onApiV2Numbers401Error1(
                apiV2Numbers401Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(NumbersIndexError)} holds no value.")
        };

    public void Match(Action<ApiV2Numbers401Error1> onApiV2Numbers401Error1, Action<RawError> otherwise)
    {
        if (TryGetApiV2Numbers401Error1(out var apiV2Numbers401Error1Value)) onApiV2Numbers401Error1(
            apiV2Numbers401Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(NumbersIndexError)} holds no value.");
    }

    private static Task<NumbersIndexError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ApiV2Numbers401Error1>().As(AsApiV2Numbers401Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<NumbersIndexError> Response { get; } = new(Create);
}
