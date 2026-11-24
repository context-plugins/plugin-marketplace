using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class GetMerchantByIdError : ApiError
{
    private readonly Optional<MerchantNotFoundError> _merchantNotFoundErrorValue;

    private GetMerchantByIdError(Optional<MerchantNotFoundError> merchantNotFoundErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _merchantNotFoundErrorValue = merchantNotFoundErrorValue;
    }

    private static GetMerchantByIdError AsMerchantNotFoundError(MerchantNotFoundError value) =>
        new(Optional<MerchantNotFoundError>.Some(value), default);

    private static GetMerchantByIdError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetMerchantNotFoundError([NotNullWhen(true)] out MerchantNotFoundError? value) =>
        _merchantNotFoundErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<MerchantNotFoundError, TResult> onMerchantNotFoundError,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMerchantNotFoundError(out var merchantNotFoundErrorValue) => onMerchantNotFoundError(
                merchantNotFoundErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetMerchantByIdError)} holds no value.")
        };

    public void Match(Action<MerchantNotFoundError> onMerchantNotFoundError, Action<RawError> otherwise)
    {
        if (TryGetMerchantNotFoundError(out var merchantNotFoundErrorValue)) onMerchantNotFoundError(
            merchantNotFoundErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetMerchantByIdError)} holds no value.");
    }

    private static Task<GetMerchantByIdError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            404 => response.Json<MerchantNotFoundError>().As(AsMerchantNotFoundError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetMerchantByIdError> Response { get; } = new(Create);
}
