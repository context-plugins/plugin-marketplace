using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Sapling.Core.ErrorResponse;
using Sapling.Core.Models;
using Sapling.Models;

namespace Sapling.Errors;

public sealed class SaplingDeleteStyleRulesetError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<RateLimited1> _rateLimited1Value;

    private SaplingDeleteStyleRulesetError(Optional<Error> errorValue,
        Optional<RateLimited1> rateLimited1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
        _rateLimited1Value = rateLimited1Value;
    }

    private static SaplingDeleteStyleRulesetError AsError(Error value) =>
        new(Optional<Error>.Some(value), default, default);

    private static SaplingDeleteStyleRulesetError AsRateLimited1(RateLimited1 value) =>
        new(default, Optional<RateLimited1>.Some(value), default);

    private static SaplingDeleteStyleRulesetError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetRateLimited1([NotNullWhen(true)] out RateLimited1? value) =>
        _rateLimited1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<RateLimited1, TResult> onRateLimited1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRateLimited1(out var rateLimited1Value) => onRateLimited1(rateLimited1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SaplingDeleteStyleRulesetError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RateLimited1> onRateLimited1, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRateLimited1(out var rateLimited1Value)) onRateLimited1(rateLimited1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SaplingDeleteStyleRulesetError)} holds no value.");
    }

    private static Task<SaplingDeleteStyleRulesetError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 404 or 500 => response.Json<Error>().As(AsError),
            429 => response.Json<RateLimited1>().As(AsRateLimited1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SaplingDeleteStyleRulesetError> Response { get; } = new(Create);
}
