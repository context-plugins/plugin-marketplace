using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DevCycle.Core.ErrorResponse;
using DevCycle.Core.Models;
using DevCycle.Models;

namespace DevCycle.Errors;

public sealed class PostOfrepV1EvaluateFlagsError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private readonly Optional<OfrepBulkEvaluationFailure> _ofrepBulkEvaluationFailureValue;

    private readonly Optional<OfrepGeneralErrorResponse> _ofrepGeneralErrorResponseValue;

    private PostOfrepV1EvaluateFlagsError(Optional<RawError> noContentValue,
        Optional<OfrepBulkEvaluationFailure> ofrepBulkEvaluationFailureValue,
        Optional<OfrepGeneralErrorResponse> ofrepGeneralErrorResponseValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
        _ofrepBulkEvaluationFailureValue = ofrepBulkEvaluationFailureValue;
        _ofrepGeneralErrorResponseValue = ofrepGeneralErrorResponseValue;
    }

    private static PostOfrepV1EvaluateFlagsError AsNoContent(RawError value) =>
        new(Optional<RawError>.Some(value), default, default, default);

    private static PostOfrepV1EvaluateFlagsError AsOfrepBulkEvaluationFailure(OfrepBulkEvaluationFailure value) =>
        new(default, Optional<OfrepBulkEvaluationFailure>.Some(value), default, default);

    private static PostOfrepV1EvaluateFlagsError AsOfrepGeneralErrorResponse(OfrepGeneralErrorResponse value) =>
        new(default, default, Optional<OfrepGeneralErrorResponse>.Some(value), default);

    private static PostOfrepV1EvaluateFlagsError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public bool TryGetOfrepBulkEvaluationFailure([NotNullWhen(true)] out OfrepBulkEvaluationFailure? value) =>
        _ofrepBulkEvaluationFailureValue.TryGetValue(out value);

    public bool TryGetOfrepGeneralErrorResponse([NotNullWhen(true)] out OfrepGeneralErrorResponse? value) =>
        _ofrepGeneralErrorResponseValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent,
        Func<OfrepBulkEvaluationFailure, TResult> onOfrepBulkEvaluationFailure,
        Func<OfrepGeneralErrorResponse, TResult> onOfrepGeneralErrorResponse,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetOfrepBulkEvaluationFailure(
                out var ofrepBulkEvaluationFailureValue) => onOfrepBulkEvaluationFailure(
                ofrepBulkEvaluationFailureValue),
            _ when TryGetOfrepGeneralErrorResponse(
                out var ofrepGeneralErrorResponseValue) => onOfrepGeneralErrorResponse(ofrepGeneralErrorResponseValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostOfrepV1EvaluateFlagsError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent,
        Action<OfrepBulkEvaluationFailure> onOfrepBulkEvaluationFailure,
        Action<OfrepGeneralErrorResponse> onOfrepGeneralErrorResponse,
        Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetOfrepBulkEvaluationFailure(
            out var ofrepBulkEvaluationFailureValue)) onOfrepBulkEvaluationFailure(ofrepBulkEvaluationFailureValue);
        else if (TryGetOfrepGeneralErrorResponse(out var ofrepGeneralErrorResponseValue)) onOfrepGeneralErrorResponse(
            ofrepGeneralErrorResponseValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostOfrepV1EvaluateFlagsError)} holds no value.");
    }

    private static Task<PostOfrepV1EvaluateFlagsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<OfrepBulkEvaluationFailure>().As(AsOfrepBulkEvaluationFailure),
            401 or 403 or 429 => response.RawBody().As(AsNoContent),
            500 => response.Json<OfrepGeneralErrorResponse>().As(AsOfrepGeneralErrorResponse),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostOfrepV1EvaluateFlagsError> Response { get; } = new(Create);
}
