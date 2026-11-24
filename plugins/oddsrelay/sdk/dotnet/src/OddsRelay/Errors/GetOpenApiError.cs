using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using OddsRelay.Core.ErrorResponse;
using OddsRelay.Core.Models;
using OddsRelay.Models;

namespace OddsRelay.Errors;

public sealed class GetOpenApiError : ApiError
{
    private readonly Optional<Error400OddsRelayServiceApi> _error400OddsRelayServiceApiValue;

    private readonly Optional<Error429OddsRelayServiceApi> _error429OddsRelayServiceApiValue;

    private readonly Optional<Error500OddsRelayServiceApi> _error500OddsRelayServiceApiValue;

    private readonly Optional<RawError> _noContentValue;

    private GetOpenApiError(Optional<Error400OddsRelayServiceApi> error400OddsRelayServiceApiValue,
        Optional<Error429OddsRelayServiceApi> error429OddsRelayServiceApiValue,
        Optional<Error500OddsRelayServiceApi> error500OddsRelayServiceApiValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _error400OddsRelayServiceApiValue = error400OddsRelayServiceApiValue;
        _error429OddsRelayServiceApiValue = error429OddsRelayServiceApiValue;
        _error500OddsRelayServiceApiValue = error500OddsRelayServiceApiValue;
        _noContentValue = noContentValue;
    }

    private static GetOpenApiError AsError400OddsRelayServiceApi(Error400OddsRelayServiceApi value) =>
        new(Optional<Error400OddsRelayServiceApi>.Some(value), default, default, default, default);

    private static GetOpenApiError AsError429OddsRelayServiceApi(Error429OddsRelayServiceApi value) =>
        new(default, Optional<Error429OddsRelayServiceApi>.Some(value), default, default, default);

    private static GetOpenApiError AsError500OddsRelayServiceApi(Error500OddsRelayServiceApi value) =>
        new(default, default, Optional<Error500OddsRelayServiceApi>.Some(value), default, default);

    private static GetOpenApiError AsNoContent(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value), default);

    private static GetOpenApiError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetError400OddsRelayServiceApi([NotNullWhen(true)] out Error400OddsRelayServiceApi? value) =>
        _error400OddsRelayServiceApiValue.TryGetValue(out value);

    public bool TryGetError429OddsRelayServiceApi([NotNullWhen(true)] out Error429OddsRelayServiceApi? value) =>
        _error429OddsRelayServiceApiValue.TryGetValue(out value);

    public bool TryGetError500OddsRelayServiceApi([NotNullWhen(true)] out Error500OddsRelayServiceApi? value) =>
        _error500OddsRelayServiceApiValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error400OddsRelayServiceApi, TResult> onError400OddsRelayServiceApi,
        Func<Error429OddsRelayServiceApi, TResult> onError429OddsRelayServiceApi,
        Func<Error500OddsRelayServiceApi, TResult> onError500OddsRelayServiceApi,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError400OddsRelayServiceApi(
                out var error400OddsRelayServiceApiValue) => onError400OddsRelayServiceApi(
                error400OddsRelayServiceApiValue),
            _ when TryGetError429OddsRelayServiceApi(
                out var error429OddsRelayServiceApiValue) => onError429OddsRelayServiceApi(
                error429OddsRelayServiceApiValue),
            _ when TryGetError500OddsRelayServiceApi(
                out var error500OddsRelayServiceApiValue) => onError500OddsRelayServiceApi(
                error500OddsRelayServiceApiValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetOpenApiError)} holds no value.")
        };

    public void Match(Action<Error400OddsRelayServiceApi> onError400OddsRelayServiceApi,
        Action<Error429OddsRelayServiceApi> onError429OddsRelayServiceApi,
        Action<Error500OddsRelayServiceApi> onError500OddsRelayServiceApi,
        Action<RawError> onNoContent,
        Action<RawError> otherwise)
    {
        if (TryGetError400OddsRelayServiceApi(out var error400OddsRelayServiceApiValue)) onError400OddsRelayServiceApi(
            error400OddsRelayServiceApiValue);
        else if (TryGetError429OddsRelayServiceApi(
            out var error429OddsRelayServiceApiValue)) onError429OddsRelayServiceApi(error429OddsRelayServiceApiValue);
        else if (TryGetError500OddsRelayServiceApi(
            out var error500OddsRelayServiceApiValue)) onError500OddsRelayServiceApi(error500OddsRelayServiceApiValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetOpenApiError)} holds no value.");
    }

    private static Task<GetOpenApiError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Error400OddsRelayServiceApi>().As(AsError400OddsRelayServiceApi),
            429 => response.Json<Error429OddsRelayServiceApi>().As(AsError429OddsRelayServiceApi),
            500 => response.Json<Error500OddsRelayServiceApi>().As(AsError500OddsRelayServiceApi),
            502 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetOpenApiError> Response { get; } = new(Create);
}
