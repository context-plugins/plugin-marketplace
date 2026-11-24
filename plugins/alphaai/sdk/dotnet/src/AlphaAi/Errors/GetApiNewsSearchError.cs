using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AlphaAi.Core.ErrorResponse;
using AlphaAi.Core.Models;
using AlphaAi.Models;

namespace AlphaAi.Errors;

public sealed class GetApiNewsSearchError : ApiError
{
    private readonly Optional<ApiNewsSearch503Error1> _apiNewsSearch503Error1Value;

    private readonly Optional<Error> _errorValue;

    private readonly Optional<RawError> _noContentValue;

    private GetApiNewsSearchError(Optional<ApiNewsSearch503Error1> apiNewsSearch503Error1Value,
        Optional<Error> errorValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiNewsSearch503Error1Value = apiNewsSearch503Error1Value;
        _errorValue = errorValue;
        _noContentValue = noContentValue;
    }

    private static GetApiNewsSearchError AsApiNewsSearch503Error1(ApiNewsSearch503Error1 value) =>
        new(Optional<ApiNewsSearch503Error1>.Some(value), default, default, default);

    private static GetApiNewsSearchError AsError(Error value) =>
        new(default, Optional<Error>.Some(value), default, default);

    private static GetApiNewsSearchError AsNoContent(RawError value) =>
        new(default, default, Optional<RawError>.Some(value), default);

    private static GetApiNewsSearchError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiNewsSearch503Error1([NotNullWhen(true)] out ApiNewsSearch503Error1? value) =>
        _apiNewsSearch503Error1Value.TryGetValue(out value);

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiNewsSearch503Error1, TResult> onApiNewsSearch503Error1,
        Func<Error, TResult> onError,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiNewsSearch503Error1(out var apiNewsSearch503Error1Value) => onApiNewsSearch503Error1(
                apiNewsSearch503Error1Value),
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetApiNewsSearchError)} holds no value.")
        };

    public void Match(Action<ApiNewsSearch503Error1> onApiNewsSearch503Error1,
        Action<Error> onError,
        Action<RawError> onNoContent,
        Action<RawError> otherwise)
    {
        if (TryGetApiNewsSearch503Error1(out var apiNewsSearch503Error1Value)) onApiNewsSearch503Error1(
            apiNewsSearch503Error1Value);
        else if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetApiNewsSearchError)} holds no value.");
    }

    private static Task<GetApiNewsSearchError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.RawBody().As(AsNoContent),
            401 or 403 or 429 => response.Json<Error>().As(AsError),
            503 => response.Json<ApiNewsSearch503Error1>().As(AsApiNewsSearch503Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetApiNewsSearchError> Response { get; } = new(Create);
}
