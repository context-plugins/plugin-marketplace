using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BrowserUse.Core.ErrorResponse;
using BrowserUse.Core.Models;
using BrowserUse.Models;

namespace BrowserUse.Errors;

public sealed class QueueSessionMessageSessionsSessionIdQueuePostError : ApiError
{
    private readonly Optional<ApiKeySpendLimitError> _apiKeySpendLimitErrorValue;

    private readonly Optional<HttpValidationError> _httpValidationErrorValue;

    private readonly Optional<RawError> _noContentValue;

    private QueueSessionMessageSessionsSessionIdQueuePostError(Optional<ApiKeySpendLimitError> apiKeySpendLimitErrorValue,
        Optional<HttpValidationError> httpValidationErrorValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiKeySpendLimitErrorValue = apiKeySpendLimitErrorValue;
        _httpValidationErrorValue = httpValidationErrorValue;
        _noContentValue = noContentValue;
    }

    private static QueueSessionMessageSessionsSessionIdQueuePostError AsApiKeySpendLimitError(ApiKeySpendLimitError value) =>
        new(Optional<ApiKeySpendLimitError>.Some(value), default, default, default);

    private static QueueSessionMessageSessionsSessionIdQueuePostError AsHttpValidationError(HttpValidationError value) =>
        new(default, Optional<HttpValidationError>.Some(value), default, default);

    private static QueueSessionMessageSessionsSessionIdQueuePostError AsNoContent(RawError value) =>
        new(default, default, Optional<RawError>.Some(value), default);

    private static QueueSessionMessageSessionsSessionIdQueuePostError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiKeySpendLimitError([NotNullWhen(true)] out ApiKeySpendLimitError? value) =>
        _apiKeySpendLimitErrorValue.TryGetValue(out value);

    public bool TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value) =>
        _httpValidationErrorValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiKeySpendLimitError, TResult> onApiKeySpendLimitError,
        Func<HttpValidationError, TResult> onHttpValidationError,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiKeySpendLimitError(out var apiKeySpendLimitErrorValue) => onApiKeySpendLimitError(
                apiKeySpendLimitErrorValue),
            _ when TryGetHttpValidationError(out var httpValidationErrorValue) => onHttpValidationError(
                httpValidationErrorValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(QueueSessionMessageSessionsSessionIdQueuePostError)} holds no value.")
        };

    public void Match(Action<ApiKeySpendLimitError> onApiKeySpendLimitError,
        Action<HttpValidationError> onHttpValidationError,
        Action<RawError> onNoContent,
        Action<RawError> otherwise)
    {
        if (TryGetApiKeySpendLimitError(out var apiKeySpendLimitErrorValue)) onApiKeySpendLimitError(
            apiKeySpendLimitErrorValue);
        else if (TryGetHttpValidationError(out var httpValidationErrorValue)) onHttpValidationError(
            httpValidationErrorValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(QueueSessionMessageSessionsSessionIdQueuePostError)} holds no value.");
    }

    private static Task<QueueSessionMessageSessionsSessionIdQueuePostError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            402 => response.Json<ApiKeySpendLimitError>().As(AsApiKeySpendLimitError),
            403 or 404 or 429 => response.RawBody().As(AsNoContent),
            422 => response.Json<HttpValidationError>().As(AsHttpValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<QueueSessionMessageSessionsSessionIdQueuePostError> Response { get; } = new(
        Create);
}
