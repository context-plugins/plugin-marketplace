using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Celestia.Core.ErrorResponse;
using Celestia.Core.Models;
using Celestia.Models;

namespace Celestia.Errors;

public sealed class SubmitWebsiteContactError : ApiError
{
    private readonly Optional<ErrorCelestiaWebsiteContactApi> _errorCelestiaWebsiteContactApiValue;

    private SubmitWebsiteContactError(Optional<ErrorCelestiaWebsiteContactApi> errorCelestiaWebsiteContactApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorCelestiaWebsiteContactApiValue = errorCelestiaWebsiteContactApiValue;
    }

    private static SubmitWebsiteContactError AsErrorCelestiaWebsiteContactApi(ErrorCelestiaWebsiteContactApi value) =>
        new(Optional<ErrorCelestiaWebsiteContactApi>.Some(value), default);

    private static SubmitWebsiteContactError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorCelestiaWebsiteContactApi([NotNullWhen(true)] out ErrorCelestiaWebsiteContactApi? value) =>
        _errorCelestiaWebsiteContactApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorCelestiaWebsiteContactApi, TResult> onErrorCelestiaWebsiteContactApi,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorCelestiaWebsiteContactApi(
                out var errorCelestiaWebsiteContactApiValue) => onErrorCelestiaWebsiteContactApi(
                errorCelestiaWebsiteContactApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SubmitWebsiteContactError)} holds no value.")
        };

    public void Match(Action<ErrorCelestiaWebsiteContactApi> onErrorCelestiaWebsiteContactApi,
        Action<RawError> otherwise)
    {
        if (TryGetErrorCelestiaWebsiteContactApi(
            out var errorCelestiaWebsiteContactApiValue)) onErrorCelestiaWebsiteContactApi(
            errorCelestiaWebsiteContactApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SubmitWebsiteContactError)} holds no value.");
    }

    private static Task<SubmitWebsiteContactError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 405 or 408 or 500 => response.Json<ErrorCelestiaWebsiteContactApi>().As(
                AsErrorCelestiaWebsiteContactApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SubmitWebsiteContactError> Response { get; } = new(Create);
}
