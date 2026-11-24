using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using HealthGorilla.Core.ErrorResponse;
using HealthGorilla.Core.Models;
using HealthGorilla.Models;

namespace HealthGorilla.Errors;

public sealed class ReadPatientError : ApiError
{
    private readonly Optional<OperationOutcome> _operationOutcomeValue;

    private ReadPatientError(Optional<OperationOutcome> operationOutcomeValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _operationOutcomeValue = operationOutcomeValue;
    }

    private static ReadPatientError AsOperationOutcome(OperationOutcome value) =>
        new(Optional<OperationOutcome>.Some(value), default);

    private static ReadPatientError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetOperationOutcome([NotNullWhen(true)] out OperationOutcome? value) =>
        _operationOutcomeValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<OperationOutcome, TResult> onOperationOutcome,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetOperationOutcome(out var operationOutcomeValue) => onOperationOutcome(operationOutcomeValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ReadPatientError)} holds no value.")
        };

    public void Match(Action<OperationOutcome> onOperationOutcome, Action<RawError> otherwise)
    {
        if (TryGetOperationOutcome(out var operationOutcomeValue)) onOperationOutcome(operationOutcomeValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ReadPatientError)} holds no value.");
    }

    private static Task<ReadPatientError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            404 => response.Json<OperationOutcome>().As(AsOperationOutcome),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ReadPatientError> Response { get; } = new(Create);
}
