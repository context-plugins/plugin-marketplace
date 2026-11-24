using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class SocialAccountGetAccountsToDeleteError : ApiError
{
    private readonly Optional<ApiV1SocialAccountToDelete400Error1> _apiV1SocialAccountToDelete400Error1Value;

    private readonly Optional<ApiV1SocialAccountToDelete401Error1> _apiV1SocialAccountToDelete401Error1Value;

    private readonly Optional<ApiV1SocialAccountToDelete403Error1> _apiV1SocialAccountToDelete403Error1Value;

    private readonly Optional<ApiV1SocialAccountToDelete404Error1> _apiV1SocialAccountToDelete404Error1Value;

    private readonly Optional<ApiV1SocialAccountToDelete429Error1> _apiV1SocialAccountToDelete429Error1Value;

    private readonly Optional<ApiV1SocialAccountToDelete500Error1> _apiV1SocialAccountToDelete500Error1Value;

    private readonly Optional<ApiV1SocialAccountToDelete502Error1> _apiV1SocialAccountToDelete502Error1Value;

    private readonly Optional<ApiV1SocialAccountToDelete503Error1> _apiV1SocialAccountToDelete503Error1Value;

    private readonly Optional<ApiV1SocialAccountToDelete504Error1> _apiV1SocialAccountToDelete504Error1Value;

    private SocialAccountGetAccountsToDeleteError(Optional<ApiV1SocialAccountToDelete400Error1> apiV1SocialAccountToDelete400Error1Value,
        Optional<ApiV1SocialAccountToDelete401Error1> apiV1SocialAccountToDelete401Error1Value,
        Optional<ApiV1SocialAccountToDelete403Error1> apiV1SocialAccountToDelete403Error1Value,
        Optional<ApiV1SocialAccountToDelete404Error1> apiV1SocialAccountToDelete404Error1Value,
        Optional<ApiV1SocialAccountToDelete429Error1> apiV1SocialAccountToDelete429Error1Value,
        Optional<ApiV1SocialAccountToDelete500Error1> apiV1SocialAccountToDelete500Error1Value,
        Optional<ApiV1SocialAccountToDelete502Error1> apiV1SocialAccountToDelete502Error1Value,
        Optional<ApiV1SocialAccountToDelete503Error1> apiV1SocialAccountToDelete503Error1Value,
        Optional<ApiV1SocialAccountToDelete504Error1> apiV1SocialAccountToDelete504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1SocialAccountToDelete400Error1Value = apiV1SocialAccountToDelete400Error1Value;
        _apiV1SocialAccountToDelete401Error1Value = apiV1SocialAccountToDelete401Error1Value;
        _apiV1SocialAccountToDelete403Error1Value = apiV1SocialAccountToDelete403Error1Value;
        _apiV1SocialAccountToDelete404Error1Value = apiV1SocialAccountToDelete404Error1Value;
        _apiV1SocialAccountToDelete429Error1Value = apiV1SocialAccountToDelete429Error1Value;
        _apiV1SocialAccountToDelete500Error1Value = apiV1SocialAccountToDelete500Error1Value;
        _apiV1SocialAccountToDelete502Error1Value = apiV1SocialAccountToDelete502Error1Value;
        _apiV1SocialAccountToDelete503Error1Value = apiV1SocialAccountToDelete503Error1Value;
        _apiV1SocialAccountToDelete504Error1Value = apiV1SocialAccountToDelete504Error1Value;
    }

    private static SocialAccountGetAccountsToDeleteError AsApiV1SocialAccountToDelete400Error1(ApiV1SocialAccountToDelete400Error1 value) =>
        new(
            Optional<ApiV1SocialAccountToDelete400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountGetAccountsToDeleteError AsApiV1SocialAccountToDelete401Error1(ApiV1SocialAccountToDelete401Error1 value) =>
        new(
            default,
            Optional<ApiV1SocialAccountToDelete401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountGetAccountsToDeleteError AsApiV1SocialAccountToDelete403Error1(ApiV1SocialAccountToDelete403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1SocialAccountToDelete403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountGetAccountsToDeleteError AsApiV1SocialAccountToDelete404Error1(ApiV1SocialAccountToDelete404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1SocialAccountToDelete404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountGetAccountsToDeleteError AsApiV1SocialAccountToDelete429Error1(ApiV1SocialAccountToDelete429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountToDelete429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static SocialAccountGetAccountsToDeleteError AsApiV1SocialAccountToDelete500Error1(ApiV1SocialAccountToDelete500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountToDelete500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static SocialAccountGetAccountsToDeleteError AsApiV1SocialAccountToDelete502Error1(ApiV1SocialAccountToDelete502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountToDelete502Error1>.Some(value),
            default,
            default,
            default);

    private static SocialAccountGetAccountsToDeleteError AsApiV1SocialAccountToDelete503Error1(ApiV1SocialAccountToDelete503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountToDelete503Error1>.Some(value),
            default,
            default);

    private static SocialAccountGetAccountsToDeleteError AsApiV1SocialAccountToDelete504Error1(ApiV1SocialAccountToDelete504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1SocialAccountToDelete504Error1>.Some(value),
            default);

    private static SocialAccountGetAccountsToDeleteError AsFallback(RawError value) =>
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

    public bool TryGetApiV1SocialAccountToDelete400Error1([NotNullWhen(true)] out ApiV1SocialAccountToDelete400Error1? value) =>
        _apiV1SocialAccountToDelete400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountToDelete401Error1([NotNullWhen(true)] out ApiV1SocialAccountToDelete401Error1? value) =>
        _apiV1SocialAccountToDelete401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountToDelete403Error1([NotNullWhen(true)] out ApiV1SocialAccountToDelete403Error1? value) =>
        _apiV1SocialAccountToDelete403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountToDelete404Error1([NotNullWhen(true)] out ApiV1SocialAccountToDelete404Error1? value) =>
        _apiV1SocialAccountToDelete404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountToDelete429Error1([NotNullWhen(true)] out ApiV1SocialAccountToDelete429Error1? value) =>
        _apiV1SocialAccountToDelete429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountToDelete500Error1([NotNullWhen(true)] out ApiV1SocialAccountToDelete500Error1? value) =>
        _apiV1SocialAccountToDelete500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountToDelete502Error1([NotNullWhen(true)] out ApiV1SocialAccountToDelete502Error1? value) =>
        _apiV1SocialAccountToDelete502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountToDelete503Error1([NotNullWhen(true)] out ApiV1SocialAccountToDelete503Error1? value) =>
        _apiV1SocialAccountToDelete503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1SocialAccountToDelete504Error1([NotNullWhen(true)] out ApiV1SocialAccountToDelete504Error1? value) =>
        _apiV1SocialAccountToDelete504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1SocialAccountToDelete400Error1, TResult> onApiV1SocialAccountToDelete400Error1,
        Func<ApiV1SocialAccountToDelete401Error1, TResult> onApiV1SocialAccountToDelete401Error1,
        Func<ApiV1SocialAccountToDelete403Error1, TResult> onApiV1SocialAccountToDelete403Error1,
        Func<ApiV1SocialAccountToDelete404Error1, TResult> onApiV1SocialAccountToDelete404Error1,
        Func<ApiV1SocialAccountToDelete429Error1, TResult> onApiV1SocialAccountToDelete429Error1,
        Func<ApiV1SocialAccountToDelete500Error1, TResult> onApiV1SocialAccountToDelete500Error1,
        Func<ApiV1SocialAccountToDelete502Error1, TResult> onApiV1SocialAccountToDelete502Error1,
        Func<ApiV1SocialAccountToDelete503Error1, TResult> onApiV1SocialAccountToDelete503Error1,
        Func<ApiV1SocialAccountToDelete504Error1, TResult> onApiV1SocialAccountToDelete504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1SocialAccountToDelete400Error1(
                out var apiV1SocialAccountToDelete400Error1Value) => onApiV1SocialAccountToDelete400Error1(
                apiV1SocialAccountToDelete400Error1Value),
            _ when TryGetApiV1SocialAccountToDelete401Error1(
                out var apiV1SocialAccountToDelete401Error1Value) => onApiV1SocialAccountToDelete401Error1(
                apiV1SocialAccountToDelete401Error1Value),
            _ when TryGetApiV1SocialAccountToDelete403Error1(
                out var apiV1SocialAccountToDelete403Error1Value) => onApiV1SocialAccountToDelete403Error1(
                apiV1SocialAccountToDelete403Error1Value),
            _ when TryGetApiV1SocialAccountToDelete404Error1(
                out var apiV1SocialAccountToDelete404Error1Value) => onApiV1SocialAccountToDelete404Error1(
                apiV1SocialAccountToDelete404Error1Value),
            _ when TryGetApiV1SocialAccountToDelete429Error1(
                out var apiV1SocialAccountToDelete429Error1Value) => onApiV1SocialAccountToDelete429Error1(
                apiV1SocialAccountToDelete429Error1Value),
            _ when TryGetApiV1SocialAccountToDelete500Error1(
                out var apiV1SocialAccountToDelete500Error1Value) => onApiV1SocialAccountToDelete500Error1(
                apiV1SocialAccountToDelete500Error1Value),
            _ when TryGetApiV1SocialAccountToDelete502Error1(
                out var apiV1SocialAccountToDelete502Error1Value) => onApiV1SocialAccountToDelete502Error1(
                apiV1SocialAccountToDelete502Error1Value),
            _ when TryGetApiV1SocialAccountToDelete503Error1(
                out var apiV1SocialAccountToDelete503Error1Value) => onApiV1SocialAccountToDelete503Error1(
                apiV1SocialAccountToDelete503Error1Value),
            _ when TryGetApiV1SocialAccountToDelete504Error1(
                out var apiV1SocialAccountToDelete504Error1Value) => onApiV1SocialAccountToDelete504Error1(
                apiV1SocialAccountToDelete504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(SocialAccountGetAccountsToDeleteError)} holds no value.")
        };

    public void Match(Action<ApiV1SocialAccountToDelete400Error1> onApiV1SocialAccountToDelete400Error1,
        Action<ApiV1SocialAccountToDelete401Error1> onApiV1SocialAccountToDelete401Error1,
        Action<ApiV1SocialAccountToDelete403Error1> onApiV1SocialAccountToDelete403Error1,
        Action<ApiV1SocialAccountToDelete404Error1> onApiV1SocialAccountToDelete404Error1,
        Action<ApiV1SocialAccountToDelete429Error1> onApiV1SocialAccountToDelete429Error1,
        Action<ApiV1SocialAccountToDelete500Error1> onApiV1SocialAccountToDelete500Error1,
        Action<ApiV1SocialAccountToDelete502Error1> onApiV1SocialAccountToDelete502Error1,
        Action<ApiV1SocialAccountToDelete503Error1> onApiV1SocialAccountToDelete503Error1,
        Action<ApiV1SocialAccountToDelete504Error1> onApiV1SocialAccountToDelete504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1SocialAccountToDelete400Error1(
            out var apiV1SocialAccountToDelete400Error1Value)) onApiV1SocialAccountToDelete400Error1(
            apiV1SocialAccountToDelete400Error1Value);
        else if (TryGetApiV1SocialAccountToDelete401Error1(
            out var apiV1SocialAccountToDelete401Error1Value)) onApiV1SocialAccountToDelete401Error1(
            apiV1SocialAccountToDelete401Error1Value);
        else if (TryGetApiV1SocialAccountToDelete403Error1(
            out var apiV1SocialAccountToDelete403Error1Value)) onApiV1SocialAccountToDelete403Error1(
            apiV1SocialAccountToDelete403Error1Value);
        else if (TryGetApiV1SocialAccountToDelete404Error1(
            out var apiV1SocialAccountToDelete404Error1Value)) onApiV1SocialAccountToDelete404Error1(
            apiV1SocialAccountToDelete404Error1Value);
        else if (TryGetApiV1SocialAccountToDelete429Error1(
            out var apiV1SocialAccountToDelete429Error1Value)) onApiV1SocialAccountToDelete429Error1(
            apiV1SocialAccountToDelete429Error1Value);
        else if (TryGetApiV1SocialAccountToDelete500Error1(
            out var apiV1SocialAccountToDelete500Error1Value)) onApiV1SocialAccountToDelete500Error1(
            apiV1SocialAccountToDelete500Error1Value);
        else if (TryGetApiV1SocialAccountToDelete502Error1(
            out var apiV1SocialAccountToDelete502Error1Value)) onApiV1SocialAccountToDelete502Error1(
            apiV1SocialAccountToDelete502Error1Value);
        else if (TryGetApiV1SocialAccountToDelete503Error1(
            out var apiV1SocialAccountToDelete503Error1Value)) onApiV1SocialAccountToDelete503Error1(
            apiV1SocialAccountToDelete503Error1Value);
        else if (TryGetApiV1SocialAccountToDelete504Error1(
            out var apiV1SocialAccountToDelete504Error1Value)) onApiV1SocialAccountToDelete504Error1(
            apiV1SocialAccountToDelete504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(SocialAccountGetAccountsToDeleteError)} holds no value.");
    }

    private static Task<SocialAccountGetAccountsToDeleteError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1SocialAccountToDelete400Error1>().As(AsApiV1SocialAccountToDelete400Error1),
            401 => response.Json<ApiV1SocialAccountToDelete401Error1>().As(AsApiV1SocialAccountToDelete401Error1),
            403 => response.Json<ApiV1SocialAccountToDelete403Error1>().As(AsApiV1SocialAccountToDelete403Error1),
            404 => response.Json<ApiV1SocialAccountToDelete404Error1>().As(AsApiV1SocialAccountToDelete404Error1),
            429 => response.Json<ApiV1SocialAccountToDelete429Error1>().As(AsApiV1SocialAccountToDelete429Error1),
            500 => response.Json<ApiV1SocialAccountToDelete500Error1>().As(AsApiV1SocialAccountToDelete500Error1),
            502 => response.Json<ApiV1SocialAccountToDelete502Error1>().As(AsApiV1SocialAccountToDelete502Error1),
            503 => response.Json<ApiV1SocialAccountToDelete503Error1>().As(AsApiV1SocialAccountToDelete503Error1),
            504 => response.Json<ApiV1SocialAccountToDelete504Error1>().As(AsApiV1SocialAccountToDelete504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<SocialAccountGetAccountsToDeleteError> Response { get; } = new(Create);
}
