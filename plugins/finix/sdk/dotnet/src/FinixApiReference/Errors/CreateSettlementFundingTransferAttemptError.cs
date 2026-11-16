using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using FinixApiReference.Core.ErrorResponse;
using FinixApiReference.Core.Models;
using FinixApiReference.Models;

namespace FinixApiReference.Errors;

public sealed class CreateSettlementFundingTransferAttemptError : ApiError
{
    private readonly Optional<GenericError> _genericErrorValue;

    private CreateSettlementFundingTransferAttemptError(Optional<GenericError> genericErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _genericErrorValue = genericErrorValue;
    }

    private static CreateSettlementFundingTransferAttemptError AsGenericError(GenericError value) =>
        new(Optional<GenericError>.Some(value), default);

    private static CreateSettlementFundingTransferAttemptError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetGenericError([NotNullWhen(true)] out GenericError? value) =>
        _genericErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<GenericError, TResult> onGenericError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetGenericError(out var genericErrorValue) => onGenericError(genericErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(CreateSettlementFundingTransferAttemptError)} holds no value.")
        };

    public void Match(Action<GenericError> onGenericError, Action<RawError> otherwise)
    {
        if (TryGetGenericError(out var genericErrorValue)) onGenericError(genericErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(CreateSettlementFundingTransferAttemptError)} holds no value.");
    }

    private static Task<CreateSettlementFundingTransferAttemptError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 406 => response.Json<GenericError>().As(AsGenericError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateSettlementFundingTransferAttemptError> Response { get; } = new(Create);
}
