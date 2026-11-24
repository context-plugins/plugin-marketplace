using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using OddsRelay.Core.ErrorResponse;
using OddsRelay.Core.Models;
using OddsRelay.Models;

namespace OddsRelay.Errors;

public sealed class GetCoverageError : ApiError
{
    private readonly Optional<Error400OddsRelayServiceApi> _error400OddsRelayServiceApiValue;

    private readonly Optional<Error401OddsRelayServiceApi> _error401OddsRelayServiceApiValue;

    private readonly Optional<Error403OddsRelayServiceApi> _error403OddsRelayServiceApiValue;

    private readonly Optional<Error404OddsRelayServiceApi> _error404OddsRelayServiceApiValue;

    private readonly Optional<Error429OddsRelayServiceApi> _error429OddsRelayServiceApiValue;

    private readonly Optional<Error500OddsRelayServiceApi> _error500OddsRelayServiceApiValue;

    private readonly Optional<Error503OddsRelayServiceApi> _error503OddsRelayServiceApiValue;

    private readonly Optional<RawError> _noContentValue;

    private GetCoverageError(Optional<Error400OddsRelayServiceApi> error400OddsRelayServiceApiValue,
        Optional<Error401OddsRelayServiceApi> error401OddsRelayServiceApiValue,
        Optional<Error403OddsRelayServiceApi> error403OddsRelayServiceApiValue,
        Optional<Error404OddsRelayServiceApi> error404OddsRelayServiceApiValue,
        Optional<Error429OddsRelayServiceApi> error429OddsRelayServiceApiValue,
        Optional<Error500OddsRelayServiceApi> error500OddsRelayServiceApiValue,
        Optional<Error503OddsRelayServiceApi> error503OddsRelayServiceApiValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _error400OddsRelayServiceApiValue = error400OddsRelayServiceApiValue;
        _error401OddsRelayServiceApiValue = error401OddsRelayServiceApiValue;
        _error403OddsRelayServiceApiValue = error403OddsRelayServiceApiValue;
        _error404OddsRelayServiceApiValue = error404OddsRelayServiceApiValue;
        _error429OddsRelayServiceApiValue = error429OddsRelayServiceApiValue;
        _error500OddsRelayServiceApiValue = error500OddsRelayServiceApiValue;
        _error503OddsRelayServiceApiValue = error503OddsRelayServiceApiValue;
        _noContentValue = noContentValue;
    }

    private static GetCoverageError AsError400OddsRelayServiceApi(Error400OddsRelayServiceApi value) =>
        new(
            Optional<Error400OddsRelayServiceApi>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static GetCoverageError AsError401OddsRelayServiceApi(Error401OddsRelayServiceApi value) =>
        new(
            default,
            Optional<Error401OddsRelayServiceApi>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static GetCoverageError AsError403OddsRelayServiceApi(Error403OddsRelayServiceApi value) =>
        new(
            default,
            default,
            Optional<Error403OddsRelayServiceApi>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static GetCoverageError AsError404OddsRelayServiceApi(Error404OddsRelayServiceApi value) =>
        new(
            default,
            default,
            default,
            Optional<Error404OddsRelayServiceApi>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static GetCoverageError AsError429OddsRelayServiceApi(Error429OddsRelayServiceApi value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<Error429OddsRelayServiceApi>.Some(value),
            default,
            default,
            default,
            default);

    private static GetCoverageError AsError500OddsRelayServiceApi(Error500OddsRelayServiceApi value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<Error500OddsRelayServiceApi>.Some(value),
            default,
            default,
            default);

    private static GetCoverageError AsError503OddsRelayServiceApi(Error503OddsRelayServiceApi value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<Error503OddsRelayServiceApi>.Some(value),
            default,
            default);

    private static GetCoverageError AsNoContent(RawError value) =>
        new(default, default, default, default, default, default, default, Optional<RawError>.Some(value), default);

    private static GetCoverageError AsFallback(RawError value) =>
        new(default, default, default, default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetError400OddsRelayServiceApi([NotNullWhen(true)] out Error400OddsRelayServiceApi? value) =>
        _error400OddsRelayServiceApiValue.TryGetValue(out value);

    public bool TryGetError401OddsRelayServiceApi([NotNullWhen(true)] out Error401OddsRelayServiceApi? value) =>
        _error401OddsRelayServiceApiValue.TryGetValue(out value);

    public bool TryGetError403OddsRelayServiceApi([NotNullWhen(true)] out Error403OddsRelayServiceApi? value) =>
        _error403OddsRelayServiceApiValue.TryGetValue(out value);

    public bool TryGetError404OddsRelayServiceApi([NotNullWhen(true)] out Error404OddsRelayServiceApi? value) =>
        _error404OddsRelayServiceApiValue.TryGetValue(out value);

    public bool TryGetError429OddsRelayServiceApi([NotNullWhen(true)] out Error429OddsRelayServiceApi? value) =>
        _error429OddsRelayServiceApiValue.TryGetValue(out value);

    public bool TryGetError500OddsRelayServiceApi([NotNullWhen(true)] out Error500OddsRelayServiceApi? value) =>
        _error500OddsRelayServiceApiValue.TryGetValue(out value);

    public bool TryGetError503OddsRelayServiceApi([NotNullWhen(true)] out Error503OddsRelayServiceApi? value) =>
        _error503OddsRelayServiceApiValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error400OddsRelayServiceApi, TResult> onError400OddsRelayServiceApi,
        Func<Error401OddsRelayServiceApi, TResult> onError401OddsRelayServiceApi,
        Func<Error403OddsRelayServiceApi, TResult> onError403OddsRelayServiceApi,
        Func<Error404OddsRelayServiceApi, TResult> onError404OddsRelayServiceApi,
        Func<Error429OddsRelayServiceApi, TResult> onError429OddsRelayServiceApi,
        Func<Error500OddsRelayServiceApi, TResult> onError500OddsRelayServiceApi,
        Func<Error503OddsRelayServiceApi, TResult> onError503OddsRelayServiceApi,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError400OddsRelayServiceApi(
                out var error400OddsRelayServiceApiValue) => onError400OddsRelayServiceApi(
                error400OddsRelayServiceApiValue),
            _ when TryGetError401OddsRelayServiceApi(
                out var error401OddsRelayServiceApiValue) => onError401OddsRelayServiceApi(
                error401OddsRelayServiceApiValue),
            _ when TryGetError403OddsRelayServiceApi(
                out var error403OddsRelayServiceApiValue) => onError403OddsRelayServiceApi(
                error403OddsRelayServiceApiValue),
            _ when TryGetError404OddsRelayServiceApi(
                out var error404OddsRelayServiceApiValue) => onError404OddsRelayServiceApi(
                error404OddsRelayServiceApiValue),
            _ when TryGetError429OddsRelayServiceApi(
                out var error429OddsRelayServiceApiValue) => onError429OddsRelayServiceApi(
                error429OddsRelayServiceApiValue),
            _ when TryGetError500OddsRelayServiceApi(
                out var error500OddsRelayServiceApiValue) => onError500OddsRelayServiceApi(
                error500OddsRelayServiceApiValue),
            _ when TryGetError503OddsRelayServiceApi(
                out var error503OddsRelayServiceApiValue) => onError503OddsRelayServiceApi(
                error503OddsRelayServiceApiValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetCoverageError)} holds no value.")
        };

    public void Match(Action<Error400OddsRelayServiceApi> onError400OddsRelayServiceApi,
        Action<Error401OddsRelayServiceApi> onError401OddsRelayServiceApi,
        Action<Error403OddsRelayServiceApi> onError403OddsRelayServiceApi,
        Action<Error404OddsRelayServiceApi> onError404OddsRelayServiceApi,
        Action<Error429OddsRelayServiceApi> onError429OddsRelayServiceApi,
        Action<Error500OddsRelayServiceApi> onError500OddsRelayServiceApi,
        Action<Error503OddsRelayServiceApi> onError503OddsRelayServiceApi,
        Action<RawError> onNoContent,
        Action<RawError> otherwise)
    {
        if (TryGetError400OddsRelayServiceApi(out var error400OddsRelayServiceApiValue)) onError400OddsRelayServiceApi(
            error400OddsRelayServiceApiValue);
        else if (TryGetError401OddsRelayServiceApi(
            out var error401OddsRelayServiceApiValue)) onError401OddsRelayServiceApi(error401OddsRelayServiceApiValue);
        else if (TryGetError403OddsRelayServiceApi(
            out var error403OddsRelayServiceApiValue)) onError403OddsRelayServiceApi(error403OddsRelayServiceApiValue);
        else if (TryGetError404OddsRelayServiceApi(
            out var error404OddsRelayServiceApiValue)) onError404OddsRelayServiceApi(error404OddsRelayServiceApiValue);
        else if (TryGetError429OddsRelayServiceApi(
            out var error429OddsRelayServiceApiValue)) onError429OddsRelayServiceApi(error429OddsRelayServiceApiValue);
        else if (TryGetError500OddsRelayServiceApi(
            out var error500OddsRelayServiceApiValue)) onError500OddsRelayServiceApi(error500OddsRelayServiceApiValue);
        else if (TryGetError503OddsRelayServiceApi(
            out var error503OddsRelayServiceApiValue)) onError503OddsRelayServiceApi(error503OddsRelayServiceApiValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetCoverageError)} holds no value.");
    }

    private static Task<GetCoverageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Error400OddsRelayServiceApi>().As(AsError400OddsRelayServiceApi),
            401 => response.Json<Error401OddsRelayServiceApi>().As(AsError401OddsRelayServiceApi),
            403 => response.Json<Error403OddsRelayServiceApi>().As(AsError403OddsRelayServiceApi),
            404 => response.Json<Error404OddsRelayServiceApi>().As(AsError404OddsRelayServiceApi),
            429 => response.Json<Error429OddsRelayServiceApi>().As(AsError429OddsRelayServiceApi),
            500 => response.Json<Error500OddsRelayServiceApi>().As(AsError500OddsRelayServiceApi),
            502 => response.RawBody().As(AsNoContent),
            503 => response.Json<Error503OddsRelayServiceApi>().As(AsError503OddsRelayServiceApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetCoverageError> Response { get; } = new(Create);
}
