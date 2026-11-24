using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using OddsRelay.Core.ErrorResponse;
using OddsRelay.Core.Models;
using OddsRelay.Models;

namespace OddsRelay.Errors;

public sealed class GetUsageError : ApiError
{
    private readonly Optional<Error400> _error400Value;

    private readonly Optional<Error401> _error401Value;

    private readonly Optional<Error403> _error403Value;

    private readonly Optional<Error429> _error429Value;

    private readonly Optional<Error500> _error500Value;

    private readonly Optional<Error503> _error503Value;

    private readonly Optional<RawError> _noContentValue;

    private GetUsageError(Optional<Error400> error400Value,
        Optional<Error401> error401Value,
        Optional<Error403> error403Value,
        Optional<Error429> error429Value,
        Optional<Error500> error500Value,
        Optional<Error503> error503Value,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _error400Value = error400Value;
        _error401Value = error401Value;
        _error403Value = error403Value;
        _error429Value = error429Value;
        _error500Value = error500Value;
        _error503Value = error503Value;
        _noContentValue = noContentValue;
    }

    private static GetUsageError AsError400(Error400 value) =>
        new(Optional<Error400>.Some(value), default, default, default, default, default, default, default);

    private static GetUsageError AsError401(Error401 value) =>
        new(default, Optional<Error401>.Some(value), default, default, default, default, default, default);

    private static GetUsageError AsError403(Error403 value) =>
        new(default, default, Optional<Error403>.Some(value), default, default, default, default, default);

    private static GetUsageError AsError429(Error429 value) =>
        new(default, default, default, Optional<Error429>.Some(value), default, default, default, default);

    private static GetUsageError AsError500(Error500 value) =>
        new(default, default, default, default, Optional<Error500>.Some(value), default, default, default);

    private static GetUsageError AsError503(Error503 value) =>
        new(default, default, default, default, default, Optional<Error503>.Some(value), default, default);

    private static GetUsageError AsNoContent(RawError value) =>
        new(default, default, default, default, default, default, Optional<RawError>.Some(value), default);

    private static GetUsageError AsFallback(RawError value) =>
        new(default, default, default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetError400([NotNullWhen(true)] out Error400? value) => _error400Value.TryGetValue(out value);

    public bool TryGetError401([NotNullWhen(true)] out Error401? value) => _error401Value.TryGetValue(out value);

    public bool TryGetError403([NotNullWhen(true)] out Error403? value) => _error403Value.TryGetValue(out value);

    public bool TryGetError429([NotNullWhen(true)] out Error429? value) => _error429Value.TryGetValue(out value);

    public bool TryGetError500([NotNullWhen(true)] out Error500? value) => _error500Value.TryGetValue(out value);

    public bool TryGetError503([NotNullWhen(true)] out Error503? value) => _error503Value.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error400, TResult> onError400,
        Func<Error401, TResult> onError401,
        Func<Error403, TResult> onError403,
        Func<Error429, TResult> onError429,
        Func<Error500, TResult> onError500,
        Func<Error503, TResult> onError503,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError400(out var error400Value) => onError400(error400Value),
            _ when TryGetError401(out var error401Value) => onError401(error401Value),
            _ when TryGetError403(out var error403Value) => onError403(error403Value),
            _ when TryGetError429(out var error429Value) => onError429(error429Value),
            _ when TryGetError500(out var error500Value) => onError500(error500Value),
            _ when TryGetError503(out var error503Value) => onError503(error503Value),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetUsageError)} holds no value.")
        };

    public void Match(Action<Error400> onError400,
        Action<Error401> onError401,
        Action<Error403> onError403,
        Action<Error429> onError429,
        Action<Error500> onError500,
        Action<Error503> onError503,
        Action<RawError> onNoContent,
        Action<RawError> otherwise)
    {
        if (TryGetError400(out var error400Value)) onError400(error400Value);
        else if (TryGetError401(out var error401Value)) onError401(error401Value);
        else if (TryGetError403(out var error403Value)) onError403(error403Value);
        else if (TryGetError429(out var error429Value)) onError429(error429Value);
        else if (TryGetError500(out var error500Value)) onError500(error500Value);
        else if (TryGetError503(out var error503Value)) onError503(error503Value);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetUsageError)} holds no value.");
    }

    private static Task<GetUsageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Error400>().As(AsError400),
            401 => response.Json<Error401>().As(AsError401),
            403 => response.Json<Error403>().As(AsError403),
            429 => response.Json<Error429>().As(AsError429),
            500 => response.Json<Error500>().As(AsError500),
            502 => response.RawBody().As(AsNoContent),
            503 => response.Json<Error503>().As(AsError503),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetUsageError> Response { get; } = new(Create);
}
