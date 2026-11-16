using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using FinixApiReference.Core.ErrorResponse;
using FinixApiReference.Core.Models;
using FinixApiReference.Models;

namespace FinixApiReference.Errors;

public sealed class ListDisputesAdjustmentsError : ApiError
{
    private readonly Optional<DisputesAdjustmentTransfersResponse> _disputesAdjustmentTransfersResponseValue;

    private readonly Optional<GenericError> _genericErrorValue;

    private ListDisputesAdjustmentsError(Optional<DisputesAdjustmentTransfersResponse> disputesAdjustmentTransfersResponseValue,
        Optional<GenericError> genericErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _disputesAdjustmentTransfersResponseValue = disputesAdjustmentTransfersResponseValue;
        _genericErrorValue = genericErrorValue;
    }

    private static ListDisputesAdjustmentsError AsDisputesAdjustmentTransfersResponse(DisputesAdjustmentTransfersResponse value) =>
        new(Optional<DisputesAdjustmentTransfersResponse>.Some(value), default, default);

    private static ListDisputesAdjustmentsError AsGenericError(GenericError value) =>
        new(default, Optional<GenericError>.Some(value), default);

    private static ListDisputesAdjustmentsError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetDisputesAdjustmentTransfersResponse([NotNullWhen(true)] out DisputesAdjustmentTransfersResponse? value) =>
        _disputesAdjustmentTransfersResponseValue.TryGetValue(out value);

    public bool TryGetGenericError([NotNullWhen(true)] out GenericError? value) =>
        _genericErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<DisputesAdjustmentTransfersResponse, TResult> onDisputesAdjustmentTransfersResponse,
        Func<GenericError, TResult> onGenericError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDisputesAdjustmentTransfersResponse(
                out var disputesAdjustmentTransfersResponseValue) => onDisputesAdjustmentTransfersResponse(
                disputesAdjustmentTransfersResponseValue),
            _ when TryGetGenericError(out var genericErrorValue) => onGenericError(genericErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListDisputesAdjustmentsError)} holds no value.")
        };

    public void Match(Action<DisputesAdjustmentTransfersResponse> onDisputesAdjustmentTransfersResponse,
        Action<GenericError> onGenericError,
        Action<RawError> otherwise)
    {
        if (TryGetDisputesAdjustmentTransfersResponse(
            out var disputesAdjustmentTransfersResponseValue)) onDisputesAdjustmentTransfersResponse(
            disputesAdjustmentTransfersResponseValue);
        else if (TryGetGenericError(out var genericErrorValue)) onGenericError(genericErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListDisputesAdjustmentsError)} holds no value.");
    }

    private static Task<ListDisputesAdjustmentsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 403 or 406 or 422 => response.Json<GenericError>().As(AsGenericError),
            404 => response.Json<DisputesAdjustmentTransfersResponse>().As(AsDisputesAdjustmentTransfersResponse),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListDisputesAdjustmentsError> Response { get; } = new(Create);
}
