using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Mailboxlayer.Core.ErrorResponse;
using Mailboxlayer.Core.Models;
using Mailboxlayer.Models;

namespace Mailboxlayer.Errors;

public sealed class BulkCheckEmailsError : ApiError
{
    private readonly Optional<ApiErrorModel> _apiErrorModelValue;

    private readonly Optional<RequestValidationError> _requestValidationErrorValue;

    private BulkCheckEmailsError(Optional<ApiErrorModel> apiErrorModelValue,
        Optional<RequestValidationError> requestValidationErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiErrorModelValue = apiErrorModelValue;
        _requestValidationErrorValue = requestValidationErrorValue;
    }

    private static BulkCheckEmailsError AsApiErrorModel(ApiErrorModel value) =>
        new(Optional<ApiErrorModel>.Some(value), default, default);

    private static BulkCheckEmailsError AsRequestValidationError(RequestValidationError value) =>
        new(default, Optional<RequestValidationError>.Some(value), default);

    private static BulkCheckEmailsError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value) =>
        _apiErrorModelValue.TryGetValue(out value);

    public bool TryGetRequestValidationError([NotNullWhen(true)] out RequestValidationError? value) =>
        _requestValidationErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiErrorModel, TResult> onApiErrorModel,
        Func<RequestValidationError, TResult> onRequestValidationError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiErrorModel(out var apiErrorModelValue) => onApiErrorModel(apiErrorModelValue),
            _ when TryGetRequestValidationError(out var requestValidationErrorValue) => onRequestValidationError(
                requestValidationErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(BulkCheckEmailsError)} holds no value.")
        };

    public void Match(Action<ApiErrorModel> onApiErrorModel,
        Action<RequestValidationError> onRequestValidationError,
        Action<RawError> otherwise)
    {
        if (TryGetApiErrorModel(out var apiErrorModelValue)) onApiErrorModel(apiErrorModelValue);
        else if (TryGetRequestValidationError(out var requestValidationErrorValue)) onRequestValidationError(
            requestValidationErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(BulkCheckEmailsError)} holds no value.");
    }

    private static Task<BulkCheckEmailsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 403 or 404 or 429 or 500 or 503 => response.Json<ApiErrorModel>().As(AsApiErrorModel),
            422 => response.Json<RequestValidationError>().As(AsRequestValidationError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<BulkCheckEmailsError> Response { get; } = new(Create);
}
