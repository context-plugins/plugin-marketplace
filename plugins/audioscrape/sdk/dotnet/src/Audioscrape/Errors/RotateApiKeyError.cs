using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Audioscrape.Core.ErrorResponse;
using Audioscrape.Core.Models;
using Audioscrape.Models;

namespace Audioscrape.Errors;

public sealed class RotateApiKeyError : ApiError
{
    private readonly Optional<ApiErrorBody> _apiErrorBodyValue;

    private RotateApiKeyError(Optional<ApiErrorBody> apiErrorBodyValue, Optional<RawError> fallback) : base(fallback)
    {
        _apiErrorBodyValue = apiErrorBodyValue;
    }

    private static RotateApiKeyError AsApiErrorBody(ApiErrorBody value) =>
        new(Optional<ApiErrorBody>.Some(value), default);

    private static RotateApiKeyError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiErrorBody([NotNullWhen(true)] out ApiErrorBody? value) =>
        _apiErrorBodyValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiErrorBody, TResult> onApiErrorBody, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiErrorBody(out var apiErrorBodyValue) => onApiErrorBody(apiErrorBodyValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(RotateApiKeyError)} holds no value.")
        };

    public void Match(Action<ApiErrorBody> onApiErrorBody, Action<RawError> otherwise)
    {
        if (TryGetApiErrorBody(out var apiErrorBodyValue)) onApiErrorBody(apiErrorBodyValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(RotateApiKeyError)} holds no value.");
    }

    private static Task<RotateApiKeyError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 404 => response.Json<ApiErrorBody>().As(AsApiErrorBody),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<RotateApiKeyError> Response { get; } = new(Create);
}
