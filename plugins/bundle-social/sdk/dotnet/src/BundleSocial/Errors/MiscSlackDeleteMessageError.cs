using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscSlackDeleteMessageError : ApiError
{
    private readonly Optional<ApiV1MiscSlackMessage400Error1> _apiV1MiscSlackMessage400Error1Value;

    private readonly Optional<ApiV1MiscSlackMessage401Error1> _apiV1MiscSlackMessage401Error1Value;

    private readonly Optional<ApiV1MiscSlackMessage403Error1> _apiV1MiscSlackMessage403Error1Value;

    private readonly Optional<ApiV1MiscSlackMessage404Error1> _apiV1MiscSlackMessage404Error1Value;

    private readonly Optional<ApiV1MiscSlackMessage429Error1> _apiV1MiscSlackMessage429Error1Value;

    private readonly Optional<ApiV1MiscSlackMessage500Error1> _apiV1MiscSlackMessage500Error1Value;

    private readonly Optional<ApiV1MiscSlackMessage502Error1> _apiV1MiscSlackMessage502Error1Value;

    private readonly Optional<ApiV1MiscSlackMessage503Error1> _apiV1MiscSlackMessage503Error1Value;

    private readonly Optional<ApiV1MiscSlackMessage504Error1> _apiV1MiscSlackMessage504Error1Value;

    private MiscSlackDeleteMessageError(Optional<ApiV1MiscSlackMessage400Error1> apiV1MiscSlackMessage400Error1Value,
        Optional<ApiV1MiscSlackMessage401Error1> apiV1MiscSlackMessage401Error1Value,
        Optional<ApiV1MiscSlackMessage403Error1> apiV1MiscSlackMessage403Error1Value,
        Optional<ApiV1MiscSlackMessage404Error1> apiV1MiscSlackMessage404Error1Value,
        Optional<ApiV1MiscSlackMessage429Error1> apiV1MiscSlackMessage429Error1Value,
        Optional<ApiV1MiscSlackMessage500Error1> apiV1MiscSlackMessage500Error1Value,
        Optional<ApiV1MiscSlackMessage502Error1> apiV1MiscSlackMessage502Error1Value,
        Optional<ApiV1MiscSlackMessage503Error1> apiV1MiscSlackMessage503Error1Value,
        Optional<ApiV1MiscSlackMessage504Error1> apiV1MiscSlackMessage504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscSlackMessage400Error1Value = apiV1MiscSlackMessage400Error1Value;
        _apiV1MiscSlackMessage401Error1Value = apiV1MiscSlackMessage401Error1Value;
        _apiV1MiscSlackMessage403Error1Value = apiV1MiscSlackMessage403Error1Value;
        _apiV1MiscSlackMessage404Error1Value = apiV1MiscSlackMessage404Error1Value;
        _apiV1MiscSlackMessage429Error1Value = apiV1MiscSlackMessage429Error1Value;
        _apiV1MiscSlackMessage500Error1Value = apiV1MiscSlackMessage500Error1Value;
        _apiV1MiscSlackMessage502Error1Value = apiV1MiscSlackMessage502Error1Value;
        _apiV1MiscSlackMessage503Error1Value = apiV1MiscSlackMessage503Error1Value;
        _apiV1MiscSlackMessage504Error1Value = apiV1MiscSlackMessage504Error1Value;
    }

    private static MiscSlackDeleteMessageError AsApiV1MiscSlackMessage400Error1(ApiV1MiscSlackMessage400Error1 value) =>
        new(
            Optional<ApiV1MiscSlackMessage400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscSlackDeleteMessageError AsApiV1MiscSlackMessage401Error1(ApiV1MiscSlackMessage401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscSlackMessage401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscSlackDeleteMessageError AsApiV1MiscSlackMessage403Error1(ApiV1MiscSlackMessage403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscSlackMessage403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscSlackDeleteMessageError AsApiV1MiscSlackMessage404Error1(ApiV1MiscSlackMessage404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscSlackMessage404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscSlackDeleteMessageError AsApiV1MiscSlackMessage429Error1(ApiV1MiscSlackMessage429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscSlackMessage429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscSlackDeleteMessageError AsApiV1MiscSlackMessage500Error1(ApiV1MiscSlackMessage500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscSlackMessage500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscSlackDeleteMessageError AsApiV1MiscSlackMessage502Error1(ApiV1MiscSlackMessage502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscSlackMessage502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscSlackDeleteMessageError AsApiV1MiscSlackMessage503Error1(ApiV1MiscSlackMessage503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscSlackMessage503Error1>.Some(value),
            default,
            default);

    private static MiscSlackDeleteMessageError AsApiV1MiscSlackMessage504Error1(ApiV1MiscSlackMessage504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscSlackMessage504Error1>.Some(value),
            default);

    private static MiscSlackDeleteMessageError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscSlackMessage400Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage400Error1? value) =>
        _apiV1MiscSlackMessage400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscSlackMessage401Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage401Error1? value) =>
        _apiV1MiscSlackMessage401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscSlackMessage403Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage403Error1? value) =>
        _apiV1MiscSlackMessage403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscSlackMessage404Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage404Error1? value) =>
        _apiV1MiscSlackMessage404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscSlackMessage429Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage429Error1? value) =>
        _apiV1MiscSlackMessage429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscSlackMessage500Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage500Error1? value) =>
        _apiV1MiscSlackMessage500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscSlackMessage502Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage502Error1? value) =>
        _apiV1MiscSlackMessage502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscSlackMessage503Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage503Error1? value) =>
        _apiV1MiscSlackMessage503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscSlackMessage504Error1([NotNullWhen(true)] out ApiV1MiscSlackMessage504Error1? value) =>
        _apiV1MiscSlackMessage504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscSlackMessage400Error1, TResult> onApiV1MiscSlackMessage400Error1,
        Func<ApiV1MiscSlackMessage401Error1, TResult> onApiV1MiscSlackMessage401Error1,
        Func<ApiV1MiscSlackMessage403Error1, TResult> onApiV1MiscSlackMessage403Error1,
        Func<ApiV1MiscSlackMessage404Error1, TResult> onApiV1MiscSlackMessage404Error1,
        Func<ApiV1MiscSlackMessage429Error1, TResult> onApiV1MiscSlackMessage429Error1,
        Func<ApiV1MiscSlackMessage500Error1, TResult> onApiV1MiscSlackMessage500Error1,
        Func<ApiV1MiscSlackMessage502Error1, TResult> onApiV1MiscSlackMessage502Error1,
        Func<ApiV1MiscSlackMessage503Error1, TResult> onApiV1MiscSlackMessage503Error1,
        Func<ApiV1MiscSlackMessage504Error1, TResult> onApiV1MiscSlackMessage504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscSlackMessage400Error1(
                out var apiV1MiscSlackMessage400Error1Value) => onApiV1MiscSlackMessage400Error1(
                apiV1MiscSlackMessage400Error1Value),
            _ when TryGetApiV1MiscSlackMessage401Error1(
                out var apiV1MiscSlackMessage401Error1Value) => onApiV1MiscSlackMessage401Error1(
                apiV1MiscSlackMessage401Error1Value),
            _ when TryGetApiV1MiscSlackMessage403Error1(
                out var apiV1MiscSlackMessage403Error1Value) => onApiV1MiscSlackMessage403Error1(
                apiV1MiscSlackMessage403Error1Value),
            _ when TryGetApiV1MiscSlackMessage404Error1(
                out var apiV1MiscSlackMessage404Error1Value) => onApiV1MiscSlackMessage404Error1(
                apiV1MiscSlackMessage404Error1Value),
            _ when TryGetApiV1MiscSlackMessage429Error1(
                out var apiV1MiscSlackMessage429Error1Value) => onApiV1MiscSlackMessage429Error1(
                apiV1MiscSlackMessage429Error1Value),
            _ when TryGetApiV1MiscSlackMessage500Error1(
                out var apiV1MiscSlackMessage500Error1Value) => onApiV1MiscSlackMessage500Error1(
                apiV1MiscSlackMessage500Error1Value),
            _ when TryGetApiV1MiscSlackMessage502Error1(
                out var apiV1MiscSlackMessage502Error1Value) => onApiV1MiscSlackMessage502Error1(
                apiV1MiscSlackMessage502Error1Value),
            _ when TryGetApiV1MiscSlackMessage503Error1(
                out var apiV1MiscSlackMessage503Error1Value) => onApiV1MiscSlackMessage503Error1(
                apiV1MiscSlackMessage503Error1Value),
            _ when TryGetApiV1MiscSlackMessage504Error1(
                out var apiV1MiscSlackMessage504Error1Value) => onApiV1MiscSlackMessage504Error1(
                apiV1MiscSlackMessage504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscSlackDeleteMessageError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscSlackMessage400Error1> onApiV1MiscSlackMessage400Error1,
        Action<ApiV1MiscSlackMessage401Error1> onApiV1MiscSlackMessage401Error1,
        Action<ApiV1MiscSlackMessage403Error1> onApiV1MiscSlackMessage403Error1,
        Action<ApiV1MiscSlackMessage404Error1> onApiV1MiscSlackMessage404Error1,
        Action<ApiV1MiscSlackMessage429Error1> onApiV1MiscSlackMessage429Error1,
        Action<ApiV1MiscSlackMessage500Error1> onApiV1MiscSlackMessage500Error1,
        Action<ApiV1MiscSlackMessage502Error1> onApiV1MiscSlackMessage502Error1,
        Action<ApiV1MiscSlackMessage503Error1> onApiV1MiscSlackMessage503Error1,
        Action<ApiV1MiscSlackMessage504Error1> onApiV1MiscSlackMessage504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscSlackMessage400Error1(
            out var apiV1MiscSlackMessage400Error1Value)) onApiV1MiscSlackMessage400Error1(
            apiV1MiscSlackMessage400Error1Value);
        else if (TryGetApiV1MiscSlackMessage401Error1(
            out var apiV1MiscSlackMessage401Error1Value)) onApiV1MiscSlackMessage401Error1(
            apiV1MiscSlackMessage401Error1Value);
        else if (TryGetApiV1MiscSlackMessage403Error1(
            out var apiV1MiscSlackMessage403Error1Value)) onApiV1MiscSlackMessage403Error1(
            apiV1MiscSlackMessage403Error1Value);
        else if (TryGetApiV1MiscSlackMessage404Error1(
            out var apiV1MiscSlackMessage404Error1Value)) onApiV1MiscSlackMessage404Error1(
            apiV1MiscSlackMessage404Error1Value);
        else if (TryGetApiV1MiscSlackMessage429Error1(
            out var apiV1MiscSlackMessage429Error1Value)) onApiV1MiscSlackMessage429Error1(
            apiV1MiscSlackMessage429Error1Value);
        else if (TryGetApiV1MiscSlackMessage500Error1(
            out var apiV1MiscSlackMessage500Error1Value)) onApiV1MiscSlackMessage500Error1(
            apiV1MiscSlackMessage500Error1Value);
        else if (TryGetApiV1MiscSlackMessage502Error1(
            out var apiV1MiscSlackMessage502Error1Value)) onApiV1MiscSlackMessage502Error1(
            apiV1MiscSlackMessage502Error1Value);
        else if (TryGetApiV1MiscSlackMessage503Error1(
            out var apiV1MiscSlackMessage503Error1Value)) onApiV1MiscSlackMessage503Error1(
            apiV1MiscSlackMessage503Error1Value);
        else if (TryGetApiV1MiscSlackMessage504Error1(
            out var apiV1MiscSlackMessage504Error1Value)) onApiV1MiscSlackMessage504Error1(
            apiV1MiscSlackMessage504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscSlackDeleteMessageError)} holds no value.");
    }

    private static Task<MiscSlackDeleteMessageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscSlackMessage400Error1>().As(AsApiV1MiscSlackMessage400Error1),
            401 => response.Json<ApiV1MiscSlackMessage401Error1>().As(AsApiV1MiscSlackMessage401Error1),
            403 => response.Json<ApiV1MiscSlackMessage403Error1>().As(AsApiV1MiscSlackMessage403Error1),
            404 => response.Json<ApiV1MiscSlackMessage404Error1>().As(AsApiV1MiscSlackMessage404Error1),
            429 => response.Json<ApiV1MiscSlackMessage429Error1>().As(AsApiV1MiscSlackMessage429Error1),
            500 => response.Json<ApiV1MiscSlackMessage500Error1>().As(AsApiV1MiscSlackMessage500Error1),
            502 => response.Json<ApiV1MiscSlackMessage502Error1>().As(AsApiV1MiscSlackMessage502Error1),
            503 => response.Json<ApiV1MiscSlackMessage503Error1>().As(AsApiV1MiscSlackMessage503Error1),
            504 => response.Json<ApiV1MiscSlackMessage504Error1>().As(AsApiV1MiscSlackMessage504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscSlackDeleteMessageError> Response { get; } = new(Create);
}
