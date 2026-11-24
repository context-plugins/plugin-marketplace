using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscDiscordDeleteMessageError : ApiError
{
    private readonly Optional<ApiV1MiscDiscordMessage400Error1> _apiV1MiscDiscordMessage400Error1Value;

    private readonly Optional<ApiV1MiscDiscordMessage401Error1> _apiV1MiscDiscordMessage401Error1Value;

    private readonly Optional<ApiV1MiscDiscordMessage403Error1> _apiV1MiscDiscordMessage403Error1Value;

    private readonly Optional<ApiV1MiscDiscordMessage404Error1> _apiV1MiscDiscordMessage404Error1Value;

    private readonly Optional<ApiV1MiscDiscordMessage429Error1> _apiV1MiscDiscordMessage429Error1Value;

    private readonly Optional<ApiV1MiscDiscordMessage500Error1> _apiV1MiscDiscordMessage500Error1Value;

    private readonly Optional<ApiV1MiscDiscordMessage502Error1> _apiV1MiscDiscordMessage502Error1Value;

    private readonly Optional<ApiV1MiscDiscordMessage503Error1> _apiV1MiscDiscordMessage503Error1Value;

    private readonly Optional<ApiV1MiscDiscordMessage504Error1> _apiV1MiscDiscordMessage504Error1Value;

    private MiscDiscordDeleteMessageError(Optional<ApiV1MiscDiscordMessage400Error1> apiV1MiscDiscordMessage400Error1Value,
        Optional<ApiV1MiscDiscordMessage401Error1> apiV1MiscDiscordMessage401Error1Value,
        Optional<ApiV1MiscDiscordMessage403Error1> apiV1MiscDiscordMessage403Error1Value,
        Optional<ApiV1MiscDiscordMessage404Error1> apiV1MiscDiscordMessage404Error1Value,
        Optional<ApiV1MiscDiscordMessage429Error1> apiV1MiscDiscordMessage429Error1Value,
        Optional<ApiV1MiscDiscordMessage500Error1> apiV1MiscDiscordMessage500Error1Value,
        Optional<ApiV1MiscDiscordMessage502Error1> apiV1MiscDiscordMessage502Error1Value,
        Optional<ApiV1MiscDiscordMessage503Error1> apiV1MiscDiscordMessage503Error1Value,
        Optional<ApiV1MiscDiscordMessage504Error1> apiV1MiscDiscordMessage504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscDiscordMessage400Error1Value = apiV1MiscDiscordMessage400Error1Value;
        _apiV1MiscDiscordMessage401Error1Value = apiV1MiscDiscordMessage401Error1Value;
        _apiV1MiscDiscordMessage403Error1Value = apiV1MiscDiscordMessage403Error1Value;
        _apiV1MiscDiscordMessage404Error1Value = apiV1MiscDiscordMessage404Error1Value;
        _apiV1MiscDiscordMessage429Error1Value = apiV1MiscDiscordMessage429Error1Value;
        _apiV1MiscDiscordMessage500Error1Value = apiV1MiscDiscordMessage500Error1Value;
        _apiV1MiscDiscordMessage502Error1Value = apiV1MiscDiscordMessage502Error1Value;
        _apiV1MiscDiscordMessage503Error1Value = apiV1MiscDiscordMessage503Error1Value;
        _apiV1MiscDiscordMessage504Error1Value = apiV1MiscDiscordMessage504Error1Value;
    }

    private static MiscDiscordDeleteMessageError AsApiV1MiscDiscordMessage400Error1(ApiV1MiscDiscordMessage400Error1 value) =>
        new(
            Optional<ApiV1MiscDiscordMessage400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscDiscordDeleteMessageError AsApiV1MiscDiscordMessage401Error1(ApiV1MiscDiscordMessage401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscDiscordMessage401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscDiscordDeleteMessageError AsApiV1MiscDiscordMessage403Error1(ApiV1MiscDiscordMessage403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscDiscordMessage403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscDiscordDeleteMessageError AsApiV1MiscDiscordMessage404Error1(ApiV1MiscDiscordMessage404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscDiscordMessage404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscDiscordDeleteMessageError AsApiV1MiscDiscordMessage429Error1(ApiV1MiscDiscordMessage429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscDiscordMessage429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscDiscordDeleteMessageError AsApiV1MiscDiscordMessage500Error1(ApiV1MiscDiscordMessage500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscDiscordMessage500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscDiscordDeleteMessageError AsApiV1MiscDiscordMessage502Error1(ApiV1MiscDiscordMessage502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscDiscordMessage502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscDiscordDeleteMessageError AsApiV1MiscDiscordMessage503Error1(ApiV1MiscDiscordMessage503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscDiscordMessage503Error1>.Some(value),
            default,
            default);

    private static MiscDiscordDeleteMessageError AsApiV1MiscDiscordMessage504Error1(ApiV1MiscDiscordMessage504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscDiscordMessage504Error1>.Some(value),
            default);

    private static MiscDiscordDeleteMessageError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscDiscordMessage400Error1([NotNullWhen(true)] out ApiV1MiscDiscordMessage400Error1? value) =>
        _apiV1MiscDiscordMessage400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscDiscordMessage401Error1([NotNullWhen(true)] out ApiV1MiscDiscordMessage401Error1? value) =>
        _apiV1MiscDiscordMessage401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscDiscordMessage403Error1([NotNullWhen(true)] out ApiV1MiscDiscordMessage403Error1? value) =>
        _apiV1MiscDiscordMessage403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscDiscordMessage404Error1([NotNullWhen(true)] out ApiV1MiscDiscordMessage404Error1? value) =>
        _apiV1MiscDiscordMessage404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscDiscordMessage429Error1([NotNullWhen(true)] out ApiV1MiscDiscordMessage429Error1? value) =>
        _apiV1MiscDiscordMessage429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscDiscordMessage500Error1([NotNullWhen(true)] out ApiV1MiscDiscordMessage500Error1? value) =>
        _apiV1MiscDiscordMessage500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscDiscordMessage502Error1([NotNullWhen(true)] out ApiV1MiscDiscordMessage502Error1? value) =>
        _apiV1MiscDiscordMessage502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscDiscordMessage503Error1([NotNullWhen(true)] out ApiV1MiscDiscordMessage503Error1? value) =>
        _apiV1MiscDiscordMessage503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscDiscordMessage504Error1([NotNullWhen(true)] out ApiV1MiscDiscordMessage504Error1? value) =>
        _apiV1MiscDiscordMessage504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscDiscordMessage400Error1, TResult> onApiV1MiscDiscordMessage400Error1,
        Func<ApiV1MiscDiscordMessage401Error1, TResult> onApiV1MiscDiscordMessage401Error1,
        Func<ApiV1MiscDiscordMessage403Error1, TResult> onApiV1MiscDiscordMessage403Error1,
        Func<ApiV1MiscDiscordMessage404Error1, TResult> onApiV1MiscDiscordMessage404Error1,
        Func<ApiV1MiscDiscordMessage429Error1, TResult> onApiV1MiscDiscordMessage429Error1,
        Func<ApiV1MiscDiscordMessage500Error1, TResult> onApiV1MiscDiscordMessage500Error1,
        Func<ApiV1MiscDiscordMessage502Error1, TResult> onApiV1MiscDiscordMessage502Error1,
        Func<ApiV1MiscDiscordMessage503Error1, TResult> onApiV1MiscDiscordMessage503Error1,
        Func<ApiV1MiscDiscordMessage504Error1, TResult> onApiV1MiscDiscordMessage504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscDiscordMessage400Error1(
                out var apiV1MiscDiscordMessage400Error1Value) => onApiV1MiscDiscordMessage400Error1(
                apiV1MiscDiscordMessage400Error1Value),
            _ when TryGetApiV1MiscDiscordMessage401Error1(
                out var apiV1MiscDiscordMessage401Error1Value) => onApiV1MiscDiscordMessage401Error1(
                apiV1MiscDiscordMessage401Error1Value),
            _ when TryGetApiV1MiscDiscordMessage403Error1(
                out var apiV1MiscDiscordMessage403Error1Value) => onApiV1MiscDiscordMessage403Error1(
                apiV1MiscDiscordMessage403Error1Value),
            _ when TryGetApiV1MiscDiscordMessage404Error1(
                out var apiV1MiscDiscordMessage404Error1Value) => onApiV1MiscDiscordMessage404Error1(
                apiV1MiscDiscordMessage404Error1Value),
            _ when TryGetApiV1MiscDiscordMessage429Error1(
                out var apiV1MiscDiscordMessage429Error1Value) => onApiV1MiscDiscordMessage429Error1(
                apiV1MiscDiscordMessage429Error1Value),
            _ when TryGetApiV1MiscDiscordMessage500Error1(
                out var apiV1MiscDiscordMessage500Error1Value) => onApiV1MiscDiscordMessage500Error1(
                apiV1MiscDiscordMessage500Error1Value),
            _ when TryGetApiV1MiscDiscordMessage502Error1(
                out var apiV1MiscDiscordMessage502Error1Value) => onApiV1MiscDiscordMessage502Error1(
                apiV1MiscDiscordMessage502Error1Value),
            _ when TryGetApiV1MiscDiscordMessage503Error1(
                out var apiV1MiscDiscordMessage503Error1Value) => onApiV1MiscDiscordMessage503Error1(
                apiV1MiscDiscordMessage503Error1Value),
            _ when TryGetApiV1MiscDiscordMessage504Error1(
                out var apiV1MiscDiscordMessage504Error1Value) => onApiV1MiscDiscordMessage504Error1(
                apiV1MiscDiscordMessage504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscDiscordDeleteMessageError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscDiscordMessage400Error1> onApiV1MiscDiscordMessage400Error1,
        Action<ApiV1MiscDiscordMessage401Error1> onApiV1MiscDiscordMessage401Error1,
        Action<ApiV1MiscDiscordMessage403Error1> onApiV1MiscDiscordMessage403Error1,
        Action<ApiV1MiscDiscordMessage404Error1> onApiV1MiscDiscordMessage404Error1,
        Action<ApiV1MiscDiscordMessage429Error1> onApiV1MiscDiscordMessage429Error1,
        Action<ApiV1MiscDiscordMessage500Error1> onApiV1MiscDiscordMessage500Error1,
        Action<ApiV1MiscDiscordMessage502Error1> onApiV1MiscDiscordMessage502Error1,
        Action<ApiV1MiscDiscordMessage503Error1> onApiV1MiscDiscordMessage503Error1,
        Action<ApiV1MiscDiscordMessage504Error1> onApiV1MiscDiscordMessage504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscDiscordMessage400Error1(
            out var apiV1MiscDiscordMessage400Error1Value)) onApiV1MiscDiscordMessage400Error1(
            apiV1MiscDiscordMessage400Error1Value);
        else if (TryGetApiV1MiscDiscordMessage401Error1(
            out var apiV1MiscDiscordMessage401Error1Value)) onApiV1MiscDiscordMessage401Error1(
            apiV1MiscDiscordMessage401Error1Value);
        else if (TryGetApiV1MiscDiscordMessage403Error1(
            out var apiV1MiscDiscordMessage403Error1Value)) onApiV1MiscDiscordMessage403Error1(
            apiV1MiscDiscordMessage403Error1Value);
        else if (TryGetApiV1MiscDiscordMessage404Error1(
            out var apiV1MiscDiscordMessage404Error1Value)) onApiV1MiscDiscordMessage404Error1(
            apiV1MiscDiscordMessage404Error1Value);
        else if (TryGetApiV1MiscDiscordMessage429Error1(
            out var apiV1MiscDiscordMessage429Error1Value)) onApiV1MiscDiscordMessage429Error1(
            apiV1MiscDiscordMessage429Error1Value);
        else if (TryGetApiV1MiscDiscordMessage500Error1(
            out var apiV1MiscDiscordMessage500Error1Value)) onApiV1MiscDiscordMessage500Error1(
            apiV1MiscDiscordMessage500Error1Value);
        else if (TryGetApiV1MiscDiscordMessage502Error1(
            out var apiV1MiscDiscordMessage502Error1Value)) onApiV1MiscDiscordMessage502Error1(
            apiV1MiscDiscordMessage502Error1Value);
        else if (TryGetApiV1MiscDiscordMessage503Error1(
            out var apiV1MiscDiscordMessage503Error1Value)) onApiV1MiscDiscordMessage503Error1(
            apiV1MiscDiscordMessage503Error1Value);
        else if (TryGetApiV1MiscDiscordMessage504Error1(
            out var apiV1MiscDiscordMessage504Error1Value)) onApiV1MiscDiscordMessage504Error1(
            apiV1MiscDiscordMessage504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscDiscordDeleteMessageError)} holds no value.");
    }

    private static Task<MiscDiscordDeleteMessageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscDiscordMessage400Error1>().As(AsApiV1MiscDiscordMessage400Error1),
            401 => response.Json<ApiV1MiscDiscordMessage401Error1>().As(AsApiV1MiscDiscordMessage401Error1),
            403 => response.Json<ApiV1MiscDiscordMessage403Error1>().As(AsApiV1MiscDiscordMessage403Error1),
            404 => response.Json<ApiV1MiscDiscordMessage404Error1>().As(AsApiV1MiscDiscordMessage404Error1),
            429 => response.Json<ApiV1MiscDiscordMessage429Error1>().As(AsApiV1MiscDiscordMessage429Error1),
            500 => response.Json<ApiV1MiscDiscordMessage500Error1>().As(AsApiV1MiscDiscordMessage500Error1),
            502 => response.Json<ApiV1MiscDiscordMessage502Error1>().As(AsApiV1MiscDiscordMessage502Error1),
            503 => response.Json<ApiV1MiscDiscordMessage503Error1>().As(AsApiV1MiscDiscordMessage503Error1),
            504 => response.Json<ApiV1MiscDiscordMessage504Error1>().As(AsApiV1MiscDiscordMessage504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscDiscordDeleteMessageError> Response { get; } = new(Create);
}
