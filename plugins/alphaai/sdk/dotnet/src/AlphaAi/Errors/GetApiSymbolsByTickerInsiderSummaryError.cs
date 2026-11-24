using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AlphaAi.Core.ErrorResponse;
using AlphaAi.Core.Models;
using AlphaAi.Models;

namespace AlphaAi.Errors;

public sealed class GetApiSymbolsByTickerInsiderSummaryError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<RawError> _noContentValue;

    private GetApiSymbolsByTickerInsiderSummaryError(Optional<Error> errorValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
        _noContentValue = noContentValue;
    }

    private static GetApiSymbolsByTickerInsiderSummaryError AsError(Error value) =>
        new(Optional<Error>.Some(value), default, default);

    private static GetApiSymbolsByTickerInsiderSummaryError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default);

    private static GetApiSymbolsByTickerInsiderSummaryError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(GetApiSymbolsByTickerInsiderSummaryError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetApiSymbolsByTickerInsiderSummaryError)} holds no value.");
    }

    private static Task<GetApiSymbolsByTickerInsiderSummaryError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.RawBody().As(AsNoContent),
            401 or 404 or 429 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetApiSymbolsByTickerInsiderSummaryError> Response { get; } = new(Create);
}
