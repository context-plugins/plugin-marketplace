using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DevCycle.Core.ErrorResponse;
using DevCycle.Core.Models;
using DevCycle.Models;

namespace DevCycle.Errors;

public sealed class PostOfrepV1EvaluateFlagsByKeyError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private readonly Optional<OfrepEvaluationFailure> _ofrepEvaluationFailureValue;

    private readonly Optional<OfrepFlagNotFound> _ofrepFlagNotFoundValue;

    private readonly Optional<OfrepGeneralErrorResponse> _ofrepGeneralErrorResponseValue;

    private PostOfrepV1EvaluateFlagsByKeyError(Optional<RawError> noContentValue,
        Optional<OfrepEvaluationFailure> ofrepEvaluationFailureValue,
        Optional<OfrepFlagNotFound> ofrepFlagNotFoundValue,
        Optional<OfrepGeneralErrorResponse> ofrepGeneralErrorResponseValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
        _ofrepEvaluationFailureValue = ofrepEvaluationFailureValue;
        _ofrepFlagNotFoundValue = ofrepFlagNotFoundValue;
        _ofrepGeneralErrorResponseValue = ofrepGeneralErrorResponseValue;
    }

    private static PostOfrepV1EvaluateFlagsByKeyError AsNoContent(RawError value) =>
        new(Optional<RawError>.Some(value), default, default, default, default);

    private static PostOfrepV1EvaluateFlagsByKeyError AsOfrepEvaluationFailure(OfrepEvaluationFailure value) =>
        new(default, Optional<OfrepEvaluationFailure>.Some(value), default, default, default);

    private static PostOfrepV1EvaluateFlagsByKeyError AsOfrepFlagNotFound(OfrepFlagNotFound value) =>
        new(default, default, Optional<OfrepFlagNotFound>.Some(value), default, default);

    private static PostOfrepV1EvaluateFlagsByKeyError AsOfrepGeneralErrorResponse(OfrepGeneralErrorResponse value) =>
        new(default, default, default, Optional<OfrepGeneralErrorResponse>.Some(value), default);

    private static PostOfrepV1EvaluateFlagsByKeyError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public bool TryGetOfrepEvaluationFailure([NotNullWhen(true)] out OfrepEvaluationFailure? value) =>
        _ofrepEvaluationFailureValue.TryGetValue(out value);

    public bool TryGetOfrepFlagNotFound([NotNullWhen(true)] out OfrepFlagNotFound? value) =>
        _ofrepFlagNotFoundValue.TryGetValue(out value);

    public bool TryGetOfrepGeneralErrorResponse([NotNullWhen(true)] out OfrepGeneralErrorResponse? value) =>
        _ofrepGeneralErrorResponseValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent,
        Func<OfrepEvaluationFailure, TResult> onOfrepEvaluationFailure,
        Func<OfrepFlagNotFound, TResult> onOfrepFlagNotFound,
        Func<OfrepGeneralErrorResponse, TResult> onOfrepGeneralErrorResponse,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetOfrepEvaluationFailure(out var ofrepEvaluationFailureValue) => onOfrepEvaluationFailure(
                ofrepEvaluationFailureValue),
            _ when TryGetOfrepFlagNotFound(out var ofrepFlagNotFoundValue) => onOfrepFlagNotFound(
                ofrepFlagNotFoundValue),
            _ when TryGetOfrepGeneralErrorResponse(
                out var ofrepGeneralErrorResponseValue) => onOfrepGeneralErrorResponse(ofrepGeneralErrorResponseValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostOfrepV1EvaluateFlagsByKeyError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent,
        Action<OfrepEvaluationFailure> onOfrepEvaluationFailure,
        Action<OfrepFlagNotFound> onOfrepFlagNotFound,
        Action<OfrepGeneralErrorResponse> onOfrepGeneralErrorResponse,
        Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetOfrepEvaluationFailure(out var ofrepEvaluationFailureValue)) onOfrepEvaluationFailure(
            ofrepEvaluationFailureValue);
        else if (TryGetOfrepFlagNotFound(out var ofrepFlagNotFoundValue)) onOfrepFlagNotFound(ofrepFlagNotFoundValue);
        else if (TryGetOfrepGeneralErrorResponse(out var ofrepGeneralErrorResponseValue)) onOfrepGeneralErrorResponse(
            ofrepGeneralErrorResponseValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostOfrepV1EvaluateFlagsByKeyError)} holds no value.");
    }

    private static Task<PostOfrepV1EvaluateFlagsByKeyError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<OfrepEvaluationFailure>().As(AsOfrepEvaluationFailure),
            401 or 403 or 429 => response.RawBody().As(AsNoContent),
            404 => response.Json<OfrepFlagNotFound>().As(AsOfrepFlagNotFound),
            500 => response.Json<OfrepGeneralErrorResponse>().As(AsOfrepGeneralErrorResponse),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostOfrepV1EvaluateFlagsByKeyError> Response { get; } = new(Create);
}
