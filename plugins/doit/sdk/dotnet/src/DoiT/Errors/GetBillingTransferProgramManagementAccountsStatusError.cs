using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DoiT.Core.ErrorResponse;
using DoiT.Core.Models;
using DoiT.Models;

namespace DoiT.Errors;

public sealed class GetBillingTransferProgramManagementAccountsStatusError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private GetBillingTransferProgramManagementAccountsStatusError(Optional<Error> errorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static GetBillingTransferProgramManagementAccountsStatusError AsError(Error value) =>
        new(Optional<Error>.Some(value), default);

    private static GetBillingTransferProgramManagementAccountsStatusError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(GetBillingTransferProgramManagementAccountsStatusError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(GetBillingTransferProgramManagementAccountsStatusError)} holds no value.");
    }

    private static Task<GetBillingTransferProgramManagementAccountsStatusError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 500 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetBillingTransferProgramManagementAccountsStatusError> Response { get; } = new(
        Create);
}
