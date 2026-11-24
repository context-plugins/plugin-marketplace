using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using OddsRelay.Core.ErrorResponse;
using OddsRelay.Core.Models;
using OddsRelay.Models;

namespace OddsRelay.Errors;

public sealed class GetMatchedBoardError : ApiError
{
    private readonly Optional<Error400OddsRelayDiscoveryApi> _error400OddsRelayDiscoveryApiValue;

    private readonly Optional<Error401OddsRelayDiscoveryApi> _error401OddsRelayDiscoveryApiValue;

    private readonly Optional<Error402> _error402Value;

    private readonly Optional<Error403OddsRelayDiscoveryApi> _error403OddsRelayDiscoveryApiValue;

    private readonly Optional<Error404> _error404Value;

    private readonly Optional<Error429OddsRelayDiscoveryApi> _error429OddsRelayDiscoveryApiValue;

    private readonly Optional<Error500OddsRelayDiscoveryApi> _error500OddsRelayDiscoveryApiValue;

    private readonly Optional<Error503OddsRelayDiscoveryApi> _error503OddsRelayDiscoveryApiValue;

    private readonly Optional<RawError> _noContentValue;

    private GetMatchedBoardError(Optional<Error400OddsRelayDiscoveryApi> error400OddsRelayDiscoveryApiValue,
        Optional<Error401OddsRelayDiscoveryApi> error401OddsRelayDiscoveryApiValue,
        Optional<Error402> error402Value,
        Optional<Error403OddsRelayDiscoveryApi> error403OddsRelayDiscoveryApiValue,
        Optional<Error404> error404Value,
        Optional<Error429OddsRelayDiscoveryApi> error429OddsRelayDiscoveryApiValue,
        Optional<Error500OddsRelayDiscoveryApi> error500OddsRelayDiscoveryApiValue,
        Optional<Error503OddsRelayDiscoveryApi> error503OddsRelayDiscoveryApiValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _error400OddsRelayDiscoveryApiValue = error400OddsRelayDiscoveryApiValue;
        _error401OddsRelayDiscoveryApiValue = error401OddsRelayDiscoveryApiValue;
        _error402Value = error402Value;
        _error403OddsRelayDiscoveryApiValue = error403OddsRelayDiscoveryApiValue;
        _error404Value = error404Value;
        _error429OddsRelayDiscoveryApiValue = error429OddsRelayDiscoveryApiValue;
        _error500OddsRelayDiscoveryApiValue = error500OddsRelayDiscoveryApiValue;
        _error503OddsRelayDiscoveryApiValue = error503OddsRelayDiscoveryApiValue;
        _noContentValue = noContentValue;
    }

    private static GetMatchedBoardError AsError400OddsRelayDiscoveryApi(Error400OddsRelayDiscoveryApi value) =>
        new(
            Optional<Error400OddsRelayDiscoveryApi>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static GetMatchedBoardError AsError401OddsRelayDiscoveryApi(Error401OddsRelayDiscoveryApi value) =>
        new(
            default,
            Optional<Error401OddsRelayDiscoveryApi>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static GetMatchedBoardError AsError402(Error402 value) =>
        new(
            default,
            default,
            Optional<Error402>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static GetMatchedBoardError AsError403OddsRelayDiscoveryApi(Error403OddsRelayDiscoveryApi value) =>
        new(
            default,
            default,
            default,
            Optional<Error403OddsRelayDiscoveryApi>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static GetMatchedBoardError AsError404(Error404 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<Error404>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static GetMatchedBoardError AsError429OddsRelayDiscoveryApi(Error429OddsRelayDiscoveryApi value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<Error429OddsRelayDiscoveryApi>.Some(value),
            default,
            default,
            default,
            default);

    private static GetMatchedBoardError AsError500OddsRelayDiscoveryApi(Error500OddsRelayDiscoveryApi value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<Error500OddsRelayDiscoveryApi>.Some(value),
            default,
            default,
            default);

    private static GetMatchedBoardError AsError503OddsRelayDiscoveryApi(Error503OddsRelayDiscoveryApi value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<Error503OddsRelayDiscoveryApi>.Some(value),
            default,
            default);

    private static GetMatchedBoardError AsNoContent(RawError value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<RawError>.Some(value),
            default);

    private static GetMatchedBoardError AsFallback(RawError value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<RawError>.Some(value));

    public bool TryGetError400OddsRelayDiscoveryApi([NotNullWhen(true)] out Error400OddsRelayDiscoveryApi? value) =>
        _error400OddsRelayDiscoveryApiValue.TryGetValue(out value);

    public bool TryGetError401OddsRelayDiscoveryApi([NotNullWhen(true)] out Error401OddsRelayDiscoveryApi? value) =>
        _error401OddsRelayDiscoveryApiValue.TryGetValue(out value);

    public bool TryGetError402([NotNullWhen(true)] out Error402? value) => _error402Value.TryGetValue(out value);

    public bool TryGetError403OddsRelayDiscoveryApi([NotNullWhen(true)] out Error403OddsRelayDiscoveryApi? value) =>
        _error403OddsRelayDiscoveryApiValue.TryGetValue(out value);

    public bool TryGetError404([NotNullWhen(true)] out Error404? value) => _error404Value.TryGetValue(out value);

    public bool TryGetError429OddsRelayDiscoveryApi([NotNullWhen(true)] out Error429OddsRelayDiscoveryApi? value) =>
        _error429OddsRelayDiscoveryApiValue.TryGetValue(out value);

    public bool TryGetError500OddsRelayDiscoveryApi([NotNullWhen(true)] out Error500OddsRelayDiscoveryApi? value) =>
        _error500OddsRelayDiscoveryApiValue.TryGetValue(out value);

    public bool TryGetError503OddsRelayDiscoveryApi([NotNullWhen(true)] out Error503OddsRelayDiscoveryApi? value) =>
        _error503OddsRelayDiscoveryApiValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error400OddsRelayDiscoveryApi, TResult> onError400OddsRelayDiscoveryApi,
        Func<Error401OddsRelayDiscoveryApi, TResult> onError401OddsRelayDiscoveryApi,
        Func<Error402, TResult> onError402,
        Func<Error403OddsRelayDiscoveryApi, TResult> onError403OddsRelayDiscoveryApi,
        Func<Error404, TResult> onError404,
        Func<Error429OddsRelayDiscoveryApi, TResult> onError429OddsRelayDiscoveryApi,
        Func<Error500OddsRelayDiscoveryApi, TResult> onError500OddsRelayDiscoveryApi,
        Func<Error503OddsRelayDiscoveryApi, TResult> onError503OddsRelayDiscoveryApi,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError400OddsRelayDiscoveryApi(
                out var error400OddsRelayDiscoveryApiValue) => onError400OddsRelayDiscoveryApi(
                error400OddsRelayDiscoveryApiValue),
            _ when TryGetError401OddsRelayDiscoveryApi(
                out var error401OddsRelayDiscoveryApiValue) => onError401OddsRelayDiscoveryApi(
                error401OddsRelayDiscoveryApiValue),
            _ when TryGetError402(out var error402Value) => onError402(error402Value),
            _ when TryGetError403OddsRelayDiscoveryApi(
                out var error403OddsRelayDiscoveryApiValue) => onError403OddsRelayDiscoveryApi(
                error403OddsRelayDiscoveryApiValue),
            _ when TryGetError404(out var error404Value) => onError404(error404Value),
            _ when TryGetError429OddsRelayDiscoveryApi(
                out var error429OddsRelayDiscoveryApiValue) => onError429OddsRelayDiscoveryApi(
                error429OddsRelayDiscoveryApiValue),
            _ when TryGetError500OddsRelayDiscoveryApi(
                out var error500OddsRelayDiscoveryApiValue) => onError500OddsRelayDiscoveryApi(
                error500OddsRelayDiscoveryApiValue),
            _ when TryGetError503OddsRelayDiscoveryApi(
                out var error503OddsRelayDiscoveryApiValue) => onError503OddsRelayDiscoveryApi(
                error503OddsRelayDiscoveryApiValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetMatchedBoardError)} holds no value.")
        };

    public void Match(Action<Error400OddsRelayDiscoveryApi> onError400OddsRelayDiscoveryApi,
        Action<Error401OddsRelayDiscoveryApi> onError401OddsRelayDiscoveryApi,
        Action<Error402> onError402,
        Action<Error403OddsRelayDiscoveryApi> onError403OddsRelayDiscoveryApi,
        Action<Error404> onError404,
        Action<Error429OddsRelayDiscoveryApi> onError429OddsRelayDiscoveryApi,
        Action<Error500OddsRelayDiscoveryApi> onError500OddsRelayDiscoveryApi,
        Action<Error503OddsRelayDiscoveryApi> onError503OddsRelayDiscoveryApi,
        Action<RawError> onNoContent,
        Action<RawError> otherwise)
    {
        if (TryGetError400OddsRelayDiscoveryApi(
            out var error400OddsRelayDiscoveryApiValue)) onError400OddsRelayDiscoveryApi(
            error400OddsRelayDiscoveryApiValue);
        else if (TryGetError401OddsRelayDiscoveryApi(
            out var error401OddsRelayDiscoveryApiValue)) onError401OddsRelayDiscoveryApi(
            error401OddsRelayDiscoveryApiValue);
        else if (TryGetError402(out var error402Value)) onError402(error402Value);
        else if (TryGetError403OddsRelayDiscoveryApi(
            out var error403OddsRelayDiscoveryApiValue)) onError403OddsRelayDiscoveryApi(
            error403OddsRelayDiscoveryApiValue);
        else if (TryGetError404(out var error404Value)) onError404(error404Value);
        else if (TryGetError429OddsRelayDiscoveryApi(
            out var error429OddsRelayDiscoveryApiValue)) onError429OddsRelayDiscoveryApi(
            error429OddsRelayDiscoveryApiValue);
        else if (TryGetError500OddsRelayDiscoveryApi(
            out var error500OddsRelayDiscoveryApiValue)) onError500OddsRelayDiscoveryApi(
            error500OddsRelayDiscoveryApiValue);
        else if (TryGetError503OddsRelayDiscoveryApi(
            out var error503OddsRelayDiscoveryApiValue)) onError503OddsRelayDiscoveryApi(
            error503OddsRelayDiscoveryApiValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetMatchedBoardError)} holds no value.");
    }

    private static Task<GetMatchedBoardError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Error400OddsRelayDiscoveryApi>().As(AsError400OddsRelayDiscoveryApi),
            401 => response.Json<Error401OddsRelayDiscoveryApi>().As(AsError401OddsRelayDiscoveryApi),
            402 => response.Json<Error402>().As(AsError402),
            403 => response.Json<Error403OddsRelayDiscoveryApi>().As(AsError403OddsRelayDiscoveryApi),
            404 => response.Json<Error404>().As(AsError404),
            429 => response.Json<Error429OddsRelayDiscoveryApi>().As(AsError429OddsRelayDiscoveryApi),
            500 => response.Json<Error500OddsRelayDiscoveryApi>().As(AsError500OddsRelayDiscoveryApi),
            502 => response.RawBody().As(AsNoContent),
            503 => response.Json<Error503OddsRelayDiscoveryApi>().As(AsError503OddsRelayDiscoveryApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetMatchedBoardError> Response { get; } = new(Create);
}
