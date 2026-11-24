using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AmazonForecast.Core.ErrorResponse;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Errors;

public sealed class ListPredictorsError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private ListPredictorsError(Optional<RawError> noContentValue, Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static ListPredictorsError AsNoContent(RawError value) => new(Optional<RawError>.Some(value), default);

    private static ListPredictorsError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListPredictorsError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListPredictorsError)} holds no value.");
    }

    private static Task<ListPredictorsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListPredictorsError> Response { get; } = new(Create);
}
