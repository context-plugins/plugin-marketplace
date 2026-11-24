using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonForecast.Core.ErrorResponse;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Errors;

public sealed class CreatePredictorError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private CreatePredictorError(Optional<RawError> noContentValue, Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static CreatePredictorError AsNoContent(RawError value) => new(Optional<RawError>.Some(value), default);

    private static CreatePredictorError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreatePredictorError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreatePredictorError)} holds no value.");
    }

    private static Task<CreatePredictorError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 403 or 404 or 409 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreatePredictorError> Response { get; } = new(Create);
}
