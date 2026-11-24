using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DoiT.Core.ErrorResponse;
using DoiT.Core.Models;
using DoiT.Models;

namespace DoiT.Errors;

public sealed class CreateBillingTransferEndCustomerMappingsError : ApiError
{
    private readonly Optional<BillingTransferProblemDetails> _billingTransferProblemDetailsValue;

    private readonly Optional<Error> _errorValue;

    private CreateBillingTransferEndCustomerMappingsError(Optional<BillingTransferProblemDetails> billingTransferProblemDetailsValue,
        Optional<Error> errorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _billingTransferProblemDetailsValue = billingTransferProblemDetailsValue;
        _errorValue = errorValue;
    }

    private static CreateBillingTransferEndCustomerMappingsError AsBillingTransferProblemDetails(BillingTransferProblemDetails value) =>
        new(Optional<BillingTransferProblemDetails>.Some(value), default, default);

    private static CreateBillingTransferEndCustomerMappingsError AsError(Error value) =>
        new(default, Optional<Error>.Some(value), default);

    private static CreateBillingTransferEndCustomerMappingsError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetBillingTransferProblemDetails([NotNullWhen(true)] out BillingTransferProblemDetails? value) =>
        _billingTransferProblemDetailsValue.TryGetValue(out value);

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<BillingTransferProblemDetails, TResult> onBillingTransferProblemDetails,
        Func<Error, TResult> onError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBillingTransferProblemDetails(
                out var billingTransferProblemDetailsValue) => onBillingTransferProblemDetails(
                billingTransferProblemDetailsValue),
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(CreateBillingTransferEndCustomerMappingsError)} holds no value.")
        };

    public void Match(Action<BillingTransferProblemDetails> onBillingTransferProblemDetails,
        Action<Error> onError,
        Action<RawError> otherwise)
    {
        if (TryGetBillingTransferProblemDetails(
            out var billingTransferProblemDetailsValue)) onBillingTransferProblemDetails(
            billingTransferProblemDetailsValue);
        else if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(CreateBillingTransferEndCustomerMappingsError)} holds no value.");
    }

    private static Task<CreateBillingTransferEndCustomerMappingsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 500 => response.Json<Error>().As(AsError),
            403 or 422 => response.Json<BillingTransferProblemDetails>().As(AsBillingTransferProblemDetails),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateBillingTransferEndCustomerMappingsError> Response { get; } = new(Create);
}
