using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Hightouch.Core.ErrorResponse;
using Hightouch.Core.Models;
using Hightouch.Models;
using Hightouch.Models.AnyOf;

namespace Hightouch.Errors;

public sealed class CloneMessageError : ApiError
{
    private readonly Optional<DecisionEngineErrorResponse> _decisionEngineErrorResponseValue;

    private readonly Optional<DecisionEngineFlowMessagesCloneResponse1> _decisionEngineFlowMessagesCloneResponse1Value;

    private readonly Optional<RawError> _noContentValue;

    private readonly Optional<ValidateErrorJson> _validateErrorJsonValue;

    private CloneMessageError(Optional<DecisionEngineErrorResponse> decisionEngineErrorResponseValue,
        Optional<DecisionEngineFlowMessagesCloneResponse1> decisionEngineFlowMessagesCloneResponse1Value,
        Optional<RawError> noContentValue,
        Optional<ValidateErrorJson> validateErrorJsonValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _decisionEngineErrorResponseValue = decisionEngineErrorResponseValue;
        _decisionEngineFlowMessagesCloneResponse1Value = decisionEngineFlowMessagesCloneResponse1Value;
        _noContentValue = noContentValue;
        _validateErrorJsonValue = validateErrorJsonValue;
    }

    private static CloneMessageError AsDecisionEngineErrorResponse(DecisionEngineErrorResponse value) =>
        new(Optional<DecisionEngineErrorResponse>.Some(value), default, default, default, default);

    private static CloneMessageError AsDecisionEngineFlowMessagesCloneResponse1(DecisionEngineFlowMessagesCloneResponse1 value) =>
        new(default, Optional<DecisionEngineFlowMessagesCloneResponse1>.Some(value), default, default, default);

    private static CloneMessageError AsNoContent(RawError value) =>
        new(default, default, Optional<RawError>.Some(value), default, default);

    private static CloneMessageError AsValidateErrorJson(ValidateErrorJson value) =>
        new(default, default, default, Optional<ValidateErrorJson>.Some(value), default);

    private static CloneMessageError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetDecisionEngineErrorResponse([NotNullWhen(true)] out DecisionEngineErrorResponse? value) =>
        _decisionEngineErrorResponseValue.TryGetValue(out value);

    public bool TryGetDecisionEngineFlowMessagesCloneResponse1([NotNullWhen(true)] out DecisionEngineFlowMessagesCloneResponse1? value) =>
        _decisionEngineFlowMessagesCloneResponse1Value.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public bool TryGetValidateErrorJson([NotNullWhen(true)] out ValidateErrorJson? value) =>
        _validateErrorJsonValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<DecisionEngineErrorResponse, TResult> onDecisionEngineErrorResponse,
        Func<DecisionEngineFlowMessagesCloneResponse1, TResult> onDecisionEngineFlowMessagesCloneResponse1,
        Func<RawError, TResult> onNoContent,
        Func<ValidateErrorJson, TResult> onValidateErrorJson,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDecisionEngineErrorResponse(
                out var decisionEngineErrorResponseValue) => onDecisionEngineErrorResponse(
                decisionEngineErrorResponseValue),
            _ when TryGetDecisionEngineFlowMessagesCloneResponse1(
                out var decisionEngineFlowMessagesCloneResponse1Value) => onDecisionEngineFlowMessagesCloneResponse1(
                decisionEngineFlowMessagesCloneResponse1Value),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetValidateErrorJson(out var validateErrorJsonValue) => onValidateErrorJson(
                validateErrorJsonValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CloneMessageError)} holds no value.")
        };

    public void Match(Action<DecisionEngineErrorResponse> onDecisionEngineErrorResponse,
        Action<DecisionEngineFlowMessagesCloneResponse1> onDecisionEngineFlowMessagesCloneResponse1,
        Action<RawError> onNoContent,
        Action<ValidateErrorJson> onValidateErrorJson,
        Action<RawError> otherwise)
    {
        if (TryGetDecisionEngineErrorResponse(out var decisionEngineErrorResponseValue)) onDecisionEngineErrorResponse(
            decisionEngineErrorResponseValue);
        else if (TryGetDecisionEngineFlowMessagesCloneResponse1(
            out var decisionEngineFlowMessagesCloneResponse1Value)) onDecisionEngineFlowMessagesCloneResponse1(
            decisionEngineFlowMessagesCloneResponse1Value);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetValidateErrorJson(out var validateErrorJsonValue)) onValidateErrorJson(validateErrorJsonValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CloneMessageError)} holds no value.");
    }

    private static Task<CloneMessageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 403 => response.RawBody().As(AsNoContent),
            404 => response.Json<DecisionEngineErrorResponse>().As(AsDecisionEngineErrorResponse),
            422 => response.Json<ValidateErrorJson>().As(AsValidateErrorJson),
            500 => response.Json<DecisionEngineFlowMessagesCloneResponse1>().As(
                AsDecisionEngineFlowMessagesCloneResponse1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CloneMessageError> Response { get; } = new(Create);
}
