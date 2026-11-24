using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Hightouch.Core.ErrorResponse;
using Hightouch.Core.Models;
using Hightouch.Models;
using Hightouch.Models.AnyOf;

namespace Hightouch.Errors;

public sealed class DeleteMessageError : ApiError
{
    private readonly Optional<DecisionEngineErrorResponse> _decisionEngineErrorResponseValue;

    private readonly Optional<DecisionEngineFlowMessagesResponse14> _decisionEngineFlowMessagesResponse14Value;

    private readonly Optional<RawError> _noContentValue;

    private DeleteMessageError(Optional<DecisionEngineErrorResponse> decisionEngineErrorResponseValue,
        Optional<DecisionEngineFlowMessagesResponse14> decisionEngineFlowMessagesResponse14Value,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _decisionEngineErrorResponseValue = decisionEngineErrorResponseValue;
        _decisionEngineFlowMessagesResponse14Value = decisionEngineFlowMessagesResponse14Value;
        _noContentValue = noContentValue;
    }

    private static DeleteMessageError AsDecisionEngineErrorResponse(DecisionEngineErrorResponse value) =>
        new(Optional<DecisionEngineErrorResponse>.Some(value), default, default, default);

    private static DeleteMessageError AsDecisionEngineFlowMessagesResponse14(DecisionEngineFlowMessagesResponse14 value) =>
        new(default, Optional<DecisionEngineFlowMessagesResponse14>.Some(value), default, default);

    private static DeleteMessageError AsNoContent(RawError value) =>
        new(default, default, Optional<RawError>.Some(value), default);

    private static DeleteMessageError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetDecisionEngineErrorResponse([NotNullWhen(true)] out DecisionEngineErrorResponse? value) =>
        _decisionEngineErrorResponseValue.TryGetValue(out value);

    public bool TryGetDecisionEngineFlowMessagesResponse14([NotNullWhen(true)] out DecisionEngineFlowMessagesResponse14? value) =>
        _decisionEngineFlowMessagesResponse14Value.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<DecisionEngineErrorResponse, TResult> onDecisionEngineErrorResponse,
        Func<DecisionEngineFlowMessagesResponse14, TResult> onDecisionEngineFlowMessagesResponse14,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDecisionEngineErrorResponse(
                out var decisionEngineErrorResponseValue) => onDecisionEngineErrorResponse(
                decisionEngineErrorResponseValue),
            _ when TryGetDecisionEngineFlowMessagesResponse14(
                out var decisionEngineFlowMessagesResponse14Value) => onDecisionEngineFlowMessagesResponse14(
                decisionEngineFlowMessagesResponse14Value),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DeleteMessageError)} holds no value.")
        };

    public void Match(Action<DecisionEngineErrorResponse> onDecisionEngineErrorResponse,
        Action<DecisionEngineFlowMessagesResponse14> onDecisionEngineFlowMessagesResponse14,
        Action<RawError> onNoContent,
        Action<RawError> otherwise)
    {
        if (TryGetDecisionEngineErrorResponse(out var decisionEngineErrorResponseValue)) onDecisionEngineErrorResponse(
            decisionEngineErrorResponseValue);
        else if (TryGetDecisionEngineFlowMessagesResponse14(
            out var decisionEngineFlowMessagesResponse14Value)) onDecisionEngineFlowMessagesResponse14(
            decisionEngineFlowMessagesResponse14Value);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DeleteMessageError)} holds no value.");
    }

    private static Task<DeleteMessageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 403 => response.RawBody().As(AsNoContent),
            404 => response.Json<DecisionEngineErrorResponse>().As(AsDecisionEngineErrorResponse),
            500 => response.Json<DecisionEngineFlowMessagesResponse14>().As(AsDecisionEngineFlowMessagesResponse14),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DeleteMessageError> Response { get; } = new(Create);
}
