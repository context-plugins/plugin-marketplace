using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class ConversationGetListError : ApiError
{
    private readonly Optional<ApiV1Conversations400Error1> _apiV1Conversations400Error1Value;

    private readonly Optional<ApiV1Conversations401Error1> _apiV1Conversations401Error1Value;

    private readonly Optional<ApiV1Conversations403Error1> _apiV1Conversations403Error1Value;

    private readonly Optional<ApiV1Conversations404Error1> _apiV1Conversations404Error1Value;

    private readonly Optional<ApiV1Conversations429Error1> _apiV1Conversations429Error1Value;

    private readonly Optional<ApiV1Conversations500Error1> _apiV1Conversations500Error1Value;

    private readonly Optional<ApiV1Conversations502Error1> _apiV1Conversations502Error1Value;

    private readonly Optional<ApiV1Conversations503Error1> _apiV1Conversations503Error1Value;

    private readonly Optional<ApiV1Conversations504Error1> _apiV1Conversations504Error1Value;

    private ConversationGetListError(Optional<ApiV1Conversations400Error1> apiV1Conversations400Error1Value,
        Optional<ApiV1Conversations401Error1> apiV1Conversations401Error1Value,
        Optional<ApiV1Conversations403Error1> apiV1Conversations403Error1Value,
        Optional<ApiV1Conversations404Error1> apiV1Conversations404Error1Value,
        Optional<ApiV1Conversations429Error1> apiV1Conversations429Error1Value,
        Optional<ApiV1Conversations500Error1> apiV1Conversations500Error1Value,
        Optional<ApiV1Conversations502Error1> apiV1Conversations502Error1Value,
        Optional<ApiV1Conversations503Error1> apiV1Conversations503Error1Value,
        Optional<ApiV1Conversations504Error1> apiV1Conversations504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1Conversations400Error1Value = apiV1Conversations400Error1Value;
        _apiV1Conversations401Error1Value = apiV1Conversations401Error1Value;
        _apiV1Conversations403Error1Value = apiV1Conversations403Error1Value;
        _apiV1Conversations404Error1Value = apiV1Conversations404Error1Value;
        _apiV1Conversations429Error1Value = apiV1Conversations429Error1Value;
        _apiV1Conversations500Error1Value = apiV1Conversations500Error1Value;
        _apiV1Conversations502Error1Value = apiV1Conversations502Error1Value;
        _apiV1Conversations503Error1Value = apiV1Conversations503Error1Value;
        _apiV1Conversations504Error1Value = apiV1Conversations504Error1Value;
    }

    private static ConversationGetListError AsApiV1Conversations400Error1(ApiV1Conversations400Error1 value) =>
        new(
            Optional<ApiV1Conversations400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationGetListError AsApiV1Conversations401Error1(ApiV1Conversations401Error1 value) =>
        new(
            default,
            Optional<ApiV1Conversations401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationGetListError AsApiV1Conversations403Error1(ApiV1Conversations403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1Conversations403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationGetListError AsApiV1Conversations404Error1(ApiV1Conversations404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1Conversations404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationGetListError AsApiV1Conversations429Error1(ApiV1Conversations429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1Conversations429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static ConversationGetListError AsApiV1Conversations500Error1(ApiV1Conversations500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Conversations500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static ConversationGetListError AsApiV1Conversations502Error1(ApiV1Conversations502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Conversations502Error1>.Some(value),
            default,
            default,
            default);

    private static ConversationGetListError AsApiV1Conversations503Error1(ApiV1Conversations503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Conversations503Error1>.Some(value),
            default,
            default);

    private static ConversationGetListError AsApiV1Conversations504Error1(ApiV1Conversations504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Conversations504Error1>.Some(value),
            default);

    private static ConversationGetListError AsFallback(RawError value) =>
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

    public bool TryGetApiV1Conversations400Error1([NotNullWhen(true)] out ApiV1Conversations400Error1? value) =>
        _apiV1Conversations400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Conversations401Error1([NotNullWhen(true)] out ApiV1Conversations401Error1? value) =>
        _apiV1Conversations401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Conversations403Error1([NotNullWhen(true)] out ApiV1Conversations403Error1? value) =>
        _apiV1Conversations403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Conversations404Error1([NotNullWhen(true)] out ApiV1Conversations404Error1? value) =>
        _apiV1Conversations404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Conversations429Error1([NotNullWhen(true)] out ApiV1Conversations429Error1? value) =>
        _apiV1Conversations429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Conversations500Error1([NotNullWhen(true)] out ApiV1Conversations500Error1? value) =>
        _apiV1Conversations500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Conversations502Error1([NotNullWhen(true)] out ApiV1Conversations502Error1? value) =>
        _apiV1Conversations502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Conversations503Error1([NotNullWhen(true)] out ApiV1Conversations503Error1? value) =>
        _apiV1Conversations503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Conversations504Error1([NotNullWhen(true)] out ApiV1Conversations504Error1? value) =>
        _apiV1Conversations504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1Conversations400Error1, TResult> onApiV1Conversations400Error1,
        Func<ApiV1Conversations401Error1, TResult> onApiV1Conversations401Error1,
        Func<ApiV1Conversations403Error1, TResult> onApiV1Conversations403Error1,
        Func<ApiV1Conversations404Error1, TResult> onApiV1Conversations404Error1,
        Func<ApiV1Conversations429Error1, TResult> onApiV1Conversations429Error1,
        Func<ApiV1Conversations500Error1, TResult> onApiV1Conversations500Error1,
        Func<ApiV1Conversations502Error1, TResult> onApiV1Conversations502Error1,
        Func<ApiV1Conversations503Error1, TResult> onApiV1Conversations503Error1,
        Func<ApiV1Conversations504Error1, TResult> onApiV1Conversations504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1Conversations400Error1(
                out var apiV1Conversations400Error1Value) => onApiV1Conversations400Error1(
                apiV1Conversations400Error1Value),
            _ when TryGetApiV1Conversations401Error1(
                out var apiV1Conversations401Error1Value) => onApiV1Conversations401Error1(
                apiV1Conversations401Error1Value),
            _ when TryGetApiV1Conversations403Error1(
                out var apiV1Conversations403Error1Value) => onApiV1Conversations403Error1(
                apiV1Conversations403Error1Value),
            _ when TryGetApiV1Conversations404Error1(
                out var apiV1Conversations404Error1Value) => onApiV1Conversations404Error1(
                apiV1Conversations404Error1Value),
            _ when TryGetApiV1Conversations429Error1(
                out var apiV1Conversations429Error1Value) => onApiV1Conversations429Error1(
                apiV1Conversations429Error1Value),
            _ when TryGetApiV1Conversations500Error1(
                out var apiV1Conversations500Error1Value) => onApiV1Conversations500Error1(
                apiV1Conversations500Error1Value),
            _ when TryGetApiV1Conversations502Error1(
                out var apiV1Conversations502Error1Value) => onApiV1Conversations502Error1(
                apiV1Conversations502Error1Value),
            _ when TryGetApiV1Conversations503Error1(
                out var apiV1Conversations503Error1Value) => onApiV1Conversations503Error1(
                apiV1Conversations503Error1Value),
            _ when TryGetApiV1Conversations504Error1(
                out var apiV1Conversations504Error1Value) => onApiV1Conversations504Error1(
                apiV1Conversations504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ConversationGetListError)} holds no value.")
        };

    public void Match(Action<ApiV1Conversations400Error1> onApiV1Conversations400Error1,
        Action<ApiV1Conversations401Error1> onApiV1Conversations401Error1,
        Action<ApiV1Conversations403Error1> onApiV1Conversations403Error1,
        Action<ApiV1Conversations404Error1> onApiV1Conversations404Error1,
        Action<ApiV1Conversations429Error1> onApiV1Conversations429Error1,
        Action<ApiV1Conversations500Error1> onApiV1Conversations500Error1,
        Action<ApiV1Conversations502Error1> onApiV1Conversations502Error1,
        Action<ApiV1Conversations503Error1> onApiV1Conversations503Error1,
        Action<ApiV1Conversations504Error1> onApiV1Conversations504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1Conversations400Error1(out var apiV1Conversations400Error1Value)) onApiV1Conversations400Error1(
            apiV1Conversations400Error1Value);
        else if (TryGetApiV1Conversations401Error1(
            out var apiV1Conversations401Error1Value)) onApiV1Conversations401Error1(apiV1Conversations401Error1Value);
        else if (TryGetApiV1Conversations403Error1(
            out var apiV1Conversations403Error1Value)) onApiV1Conversations403Error1(apiV1Conversations403Error1Value);
        else if (TryGetApiV1Conversations404Error1(
            out var apiV1Conversations404Error1Value)) onApiV1Conversations404Error1(apiV1Conversations404Error1Value);
        else if (TryGetApiV1Conversations429Error1(
            out var apiV1Conversations429Error1Value)) onApiV1Conversations429Error1(apiV1Conversations429Error1Value);
        else if (TryGetApiV1Conversations500Error1(
            out var apiV1Conversations500Error1Value)) onApiV1Conversations500Error1(apiV1Conversations500Error1Value);
        else if (TryGetApiV1Conversations502Error1(
            out var apiV1Conversations502Error1Value)) onApiV1Conversations502Error1(apiV1Conversations502Error1Value);
        else if (TryGetApiV1Conversations503Error1(
            out var apiV1Conversations503Error1Value)) onApiV1Conversations503Error1(apiV1Conversations503Error1Value);
        else if (TryGetApiV1Conversations504Error1(
            out var apiV1Conversations504Error1Value)) onApiV1Conversations504Error1(apiV1Conversations504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ConversationGetListError)} holds no value.");
    }

    private static Task<ConversationGetListError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1Conversations400Error1>().As(AsApiV1Conversations400Error1),
            401 => response.Json<ApiV1Conversations401Error1>().As(AsApiV1Conversations401Error1),
            403 => response.Json<ApiV1Conversations403Error1>().As(AsApiV1Conversations403Error1),
            404 => response.Json<ApiV1Conversations404Error1>().As(AsApiV1Conversations404Error1),
            429 => response.Json<ApiV1Conversations429Error1>().As(AsApiV1Conversations429Error1),
            500 => response.Json<ApiV1Conversations500Error1>().As(AsApiV1Conversations500Error1),
            502 => response.Json<ApiV1Conversations502Error1>().As(AsApiV1Conversations502Error1),
            503 => response.Json<ApiV1Conversations503Error1>().As(AsApiV1Conversations503Error1),
            504 => response.Json<ApiV1Conversations504Error1>().As(AsApiV1Conversations504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ConversationGetListError> Response { get; } = new(Create);
}
