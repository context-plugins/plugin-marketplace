using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using StayingApi.Core.ErrorResponse;
using StayingApi.Core.Models;
using StayingApi.Models;

namespace StayingApi.Errors;

public sealed class SearchPostError : ApiError
{
    private readonly Optional<ErrorEnvelope> _errorEnvelopeValue;

    private SearchPostError(Optional<ErrorEnvelope> errorEnvelopeValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorEnvelopeValue = errorEnvelopeValue;
    }

    private static SearchPostError AsErrorEnvelope(ErrorEnvelope value) =>
        new(Optional<ErrorEnvelope>.Some(value), default);

    private static SearchPostError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorEnvelope([NotNullWhen(true)] out ErrorEnvelope? value) =>
        _errorEnvelopeValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorEnvelope, TResult> onErrorEnvelope, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorEnvelope(out var errorEnvelopeValue) => onErrorEnvelope(errorEnvelopeValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SearchPostError)} holds no value.")
        };

    public void Match(Action<ErrorEnvelope> onErrorEnvelope, Action<RawError> otherwise)
    {
        if (TryGetErrorEnvelope(out var errorEnvelopeValue)) onErrorEnvelope(errorEnvelopeValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SearchPostError)} holds no value.");
    }

    private static Task<SearchPostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 402 or 403 or 429 or 503 => response.Json<ErrorEnvelope>().As(AsErrorEnvelope),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SearchPostError> Response { get; } = new(Create);
}
