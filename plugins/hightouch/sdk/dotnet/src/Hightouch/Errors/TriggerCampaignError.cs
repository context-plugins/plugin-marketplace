using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Hightouch.Core.ErrorResponse;
using Hightouch.Core.Models;
using Hightouch.Models;
using Hightouch.Models.Enums;

namespace Hightouch.Errors;

public sealed class TriggerCampaignError : ApiError
{
    private readonly Optional<InternalServerError> _internalServerErrorValue;

    private readonly Optional<RawError> _noContentValue;

    private readonly Optional<TriggerErrorResponse> _triggerErrorResponseValue;

    private readonly Optional<ValidateErrorJson> _validateErrorJsonValue;

    private TriggerCampaignError(Optional<InternalServerError> internalServerErrorValue,
        Optional<RawError> noContentValue,
        Optional<TriggerErrorResponse> triggerErrorResponseValue,
        Optional<ValidateErrorJson> validateErrorJsonValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _internalServerErrorValue = internalServerErrorValue;
        _noContentValue = noContentValue;
        _triggerErrorResponseValue = triggerErrorResponseValue;
        _validateErrorJsonValue = validateErrorJsonValue;
    }

    private static TriggerCampaignError AsInternalServerError(InternalServerError value) =>
        new(Optional<InternalServerError>.Some(value), default, default, default, default);

    private static TriggerCampaignError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default, default, default);

    private static TriggerCampaignError AsTriggerErrorResponse(TriggerErrorResponse value) =>
        new(default, default, Optional<TriggerErrorResponse>.Some(value), default, default);

    private static TriggerCampaignError AsValidateErrorJson(ValidateErrorJson value) =>
        new(default, default, default, Optional<ValidateErrorJson>.Some(value), default);

    private static TriggerCampaignError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetInternalServerError([NotNullWhen(true)] out InternalServerError? value) =>
        _internalServerErrorValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public bool TryGetTriggerErrorResponse([NotNullWhen(true)] out TriggerErrorResponse? value) =>
        _triggerErrorResponseValue.TryGetValue(out value);

    public bool TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value) =>
        _validateErrorJsonValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<InternalServerError, TResult> onInternalServerError,
        Func<RawError, TResult> onNoContent,
        Func<TriggerErrorResponse, TResult> onTriggerErrorResponse,
        Func<ValidateErrorJson, TResult> onValidateErrorJson,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInternalServerError(out var internalServerErrorValue) => onInternalServerError(
                internalServerErrorValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetTriggerErrorResponse(out var triggerErrorResponseValue) => onTriggerErrorResponse(
                triggerErrorResponseValue),
            _ when TryGetValidateErrorJson(out var validateErrorJsonValue) => onValidateErrorJson(
                validateErrorJsonValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(TriggerCampaignError)} holds no value.")
        };

    public void Match(Action<InternalServerError> onInternalServerError,
        Action<RawError> onNoContent,
        Action<TriggerErrorResponse> onTriggerErrorResponse,
        Action<ValidateErrorJson> onValidateErrorJson,
        Action<RawError> otherwise)
    {
        if (TryGetInternalServerError(out var internalServerErrorValue)) onInternalServerError(
            internalServerErrorValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetTriggerErrorResponse(out var triggerErrorResponseValue)) onTriggerErrorResponse(
            triggerErrorResponseValue);
        else if (TryGetValidateErrorJson(out var validateErrorJsonValue)) onValidateErrorJson(validateErrorJsonValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(TriggerCampaignError)} holds no value.");
    }

    private static Task<TriggerCampaignError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 404 or 429 => response.Json<TriggerErrorResponse>().As(AsTriggerErrorResponse),
            401 => response.RawBody().As(AsNoContent),
            422 => response.Json<ValidateErrorJson>().As(AsValidateErrorJson),
            500 => response.Json<InternalServerError>().As(AsInternalServerError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<TriggerCampaignError> Response { get; } = new(Create);
}
