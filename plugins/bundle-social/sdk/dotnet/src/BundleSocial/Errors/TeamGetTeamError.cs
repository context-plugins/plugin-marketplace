using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class TeamGetTeamError : ApiError
{
    private readonly Optional<ApiV1Team400Error1> _apiV1Team400Error1Value;

    private readonly Optional<ApiV1Team401Error1> _apiV1Team401Error1Value;

    private readonly Optional<ApiV1Team403Error1> _apiV1Team403Error1Value;

    private readonly Optional<ApiV1Team404Error1> _apiV1Team404Error1Value;

    private readonly Optional<ApiV1Team429Error1> _apiV1Team429Error1Value;

    private readonly Optional<ApiV1Team500Error1> _apiV1Team500Error1Value;

    private readonly Optional<ApiV1Team502Error1> _apiV1Team502Error1Value;

    private readonly Optional<ApiV1Team503Error1> _apiV1Team503Error1Value;

    private readonly Optional<ApiV1Team504Error1> _apiV1Team504Error1Value;

    private TeamGetTeamError(Optional<ApiV1Team400Error1> apiV1Team400Error1Value,
        Optional<ApiV1Team401Error1> apiV1Team401Error1Value,
        Optional<ApiV1Team403Error1> apiV1Team403Error1Value,
        Optional<ApiV1Team404Error1> apiV1Team404Error1Value,
        Optional<ApiV1Team429Error1> apiV1Team429Error1Value,
        Optional<ApiV1Team500Error1> apiV1Team500Error1Value,
        Optional<ApiV1Team502Error1> apiV1Team502Error1Value,
        Optional<ApiV1Team503Error1> apiV1Team503Error1Value,
        Optional<ApiV1Team504Error1> apiV1Team504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1Team400Error1Value = apiV1Team400Error1Value;
        _apiV1Team401Error1Value = apiV1Team401Error1Value;
        _apiV1Team403Error1Value = apiV1Team403Error1Value;
        _apiV1Team404Error1Value = apiV1Team404Error1Value;
        _apiV1Team429Error1Value = apiV1Team429Error1Value;
        _apiV1Team500Error1Value = apiV1Team500Error1Value;
        _apiV1Team502Error1Value = apiV1Team502Error1Value;
        _apiV1Team503Error1Value = apiV1Team503Error1Value;
        _apiV1Team504Error1Value = apiV1Team504Error1Value;
    }

    private static TeamGetTeamError AsApiV1Team400Error1(ApiV1Team400Error1 value) =>
        new(
            Optional<ApiV1Team400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static TeamGetTeamError AsApiV1Team401Error1(ApiV1Team401Error1 value) =>
        new(
            default,
            Optional<ApiV1Team401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static TeamGetTeamError AsApiV1Team403Error1(ApiV1Team403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1Team403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static TeamGetTeamError AsApiV1Team404Error1(ApiV1Team404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1Team404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static TeamGetTeamError AsApiV1Team429Error1(ApiV1Team429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1Team429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static TeamGetTeamError AsApiV1Team500Error1(ApiV1Team500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Team500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static TeamGetTeamError AsApiV1Team502Error1(ApiV1Team502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Team502Error1>.Some(value),
            default,
            default,
            default);

    private static TeamGetTeamError AsApiV1Team503Error1(ApiV1Team503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Team503Error1>.Some(value),
            default,
            default);

    private static TeamGetTeamError AsApiV1Team504Error1(ApiV1Team504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Team504Error1>.Some(value),
            default);

    private static TeamGetTeamError AsFallback(RawError value) =>
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

    public bool TryGetApiV1Team400Error1([NotNullWhen(true)] out ApiV1Team400Error1? value) =>
        _apiV1Team400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Team401Error1([NotNullWhen(true)] out ApiV1Team401Error1? value) =>
        _apiV1Team401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Team403Error1([NotNullWhen(true)] out ApiV1Team403Error1? value) =>
        _apiV1Team403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Team404Error1([NotNullWhen(true)] out ApiV1Team404Error1? value) =>
        _apiV1Team404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Team429Error1([NotNullWhen(true)] out ApiV1Team429Error1? value) =>
        _apiV1Team429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Team500Error1([NotNullWhen(true)] out ApiV1Team500Error1? value) =>
        _apiV1Team500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Team502Error1([NotNullWhen(true)] out ApiV1Team502Error1? value) =>
        _apiV1Team502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Team503Error1([NotNullWhen(true)] out ApiV1Team503Error1? value) =>
        _apiV1Team503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Team504Error1([NotNullWhen(true)] out ApiV1Team504Error1? value) =>
        _apiV1Team504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1Team400Error1, TResult> onApiV1Team400Error1,
        Func<ApiV1Team401Error1, TResult> onApiV1Team401Error1,
        Func<ApiV1Team403Error1, TResult> onApiV1Team403Error1,
        Func<ApiV1Team404Error1, TResult> onApiV1Team404Error1,
        Func<ApiV1Team429Error1, TResult> onApiV1Team429Error1,
        Func<ApiV1Team500Error1, TResult> onApiV1Team500Error1,
        Func<ApiV1Team502Error1, TResult> onApiV1Team502Error1,
        Func<ApiV1Team503Error1, TResult> onApiV1Team503Error1,
        Func<ApiV1Team504Error1, TResult> onApiV1Team504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1Team400Error1(out var apiV1Team400Error1Value) => onApiV1Team400Error1(
                apiV1Team400Error1Value),
            _ when TryGetApiV1Team401Error1(out var apiV1Team401Error1Value) => onApiV1Team401Error1(
                apiV1Team401Error1Value),
            _ when TryGetApiV1Team403Error1(out var apiV1Team403Error1Value) => onApiV1Team403Error1(
                apiV1Team403Error1Value),
            _ when TryGetApiV1Team404Error1(out var apiV1Team404Error1Value) => onApiV1Team404Error1(
                apiV1Team404Error1Value),
            _ when TryGetApiV1Team429Error1(out var apiV1Team429Error1Value) => onApiV1Team429Error1(
                apiV1Team429Error1Value),
            _ when TryGetApiV1Team500Error1(out var apiV1Team500Error1Value) => onApiV1Team500Error1(
                apiV1Team500Error1Value),
            _ when TryGetApiV1Team502Error1(out var apiV1Team502Error1Value) => onApiV1Team502Error1(
                apiV1Team502Error1Value),
            _ when TryGetApiV1Team503Error1(out var apiV1Team503Error1Value) => onApiV1Team503Error1(
                apiV1Team503Error1Value),
            _ when TryGetApiV1Team504Error1(out var apiV1Team504Error1Value) => onApiV1Team504Error1(
                apiV1Team504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(TeamGetTeamError)} holds no value.")
        };

    public void Match(Action<ApiV1Team400Error1> onApiV1Team400Error1,
        Action<ApiV1Team401Error1> onApiV1Team401Error1,
        Action<ApiV1Team403Error1> onApiV1Team403Error1,
        Action<ApiV1Team404Error1> onApiV1Team404Error1,
        Action<ApiV1Team429Error1> onApiV1Team429Error1,
        Action<ApiV1Team500Error1> onApiV1Team500Error1,
        Action<ApiV1Team502Error1> onApiV1Team502Error1,
        Action<ApiV1Team503Error1> onApiV1Team503Error1,
        Action<ApiV1Team504Error1> onApiV1Team504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1Team400Error1(out var apiV1Team400Error1Value)) onApiV1Team400Error1(apiV1Team400Error1Value);
        else if (TryGetApiV1Team401Error1(out var apiV1Team401Error1Value)) onApiV1Team401Error1(
            apiV1Team401Error1Value);
        else if (TryGetApiV1Team403Error1(out var apiV1Team403Error1Value)) onApiV1Team403Error1(
            apiV1Team403Error1Value);
        else if (TryGetApiV1Team404Error1(out var apiV1Team404Error1Value)) onApiV1Team404Error1(
            apiV1Team404Error1Value);
        else if (TryGetApiV1Team429Error1(out var apiV1Team429Error1Value)) onApiV1Team429Error1(
            apiV1Team429Error1Value);
        else if (TryGetApiV1Team500Error1(out var apiV1Team500Error1Value)) onApiV1Team500Error1(
            apiV1Team500Error1Value);
        else if (TryGetApiV1Team502Error1(out var apiV1Team502Error1Value)) onApiV1Team502Error1(
            apiV1Team502Error1Value);
        else if (TryGetApiV1Team503Error1(out var apiV1Team503Error1Value)) onApiV1Team503Error1(
            apiV1Team503Error1Value);
        else if (TryGetApiV1Team504Error1(out var apiV1Team504Error1Value)) onApiV1Team504Error1(
            apiV1Team504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(TeamGetTeamError)} holds no value.");
    }

    private static Task<TeamGetTeamError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1Team400Error1>().As(AsApiV1Team400Error1),
            401 => response.Json<ApiV1Team401Error1>().As(AsApiV1Team401Error1),
            403 => response.Json<ApiV1Team403Error1>().As(AsApiV1Team403Error1),
            404 => response.Json<ApiV1Team404Error1>().As(AsApiV1Team404Error1),
            429 => response.Json<ApiV1Team429Error1>().As(AsApiV1Team429Error1),
            500 => response.Json<ApiV1Team500Error1>().As(AsApiV1Team500Error1),
            502 => response.Json<ApiV1Team502Error1>().As(AsApiV1Team502Error1),
            503 => response.Json<ApiV1Team503Error1>().As(AsApiV1Team503Error1),
            504 => response.Json<ApiV1Team504Error1>().As(AsApiV1Team504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<TeamGetTeamError> Response { get; } = new(Create);
}
