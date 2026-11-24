using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class ConversationOpenError : ApiError
{
    private readonly Optional<ApiV1ConversationsOpen400Error1> _apiV1ConversationsOpen400Error1Value;

    private readonly Optional<ApiV1ConversationsOpen401Error1> _apiV1ConversationsOpen401Error1Value;

    private readonly Optional<ApiV1ConversationsOpen403Error1> _apiV1ConversationsOpen403Error1Value;

    private readonly Optional<ApiV1ConversationsOpen404Error1> _apiV1ConversationsOpen404Error1Value;

    private readonly Optional<ApiV1ConversationsOpen429Error1> _apiV1ConversationsOpen429Error1Value;

    private readonly Optional<ApiV1ConversationsOpen500Error1> _apiV1ConversationsOpen500Error1Value;

    private readonly Optional<ApiV1ConversationsOpen502Error1> _apiV1ConversationsOpen502Error1Value;

    private readonly Optional<ApiV1ConversationsOpen503Error1> _apiV1ConversationsOpen503Error1Value;

    private readonly Optional<ApiV1ConversationsOpen504Error1> _apiV1ConversationsOpen504Error1Value;

    private ConversationOpenError(Optional<ApiV1ConversationsOpen400Error1> apiV1ConversationsOpen400Error1Value,
        Optional<ApiV1ConversationsOpen401Error1> apiV1ConversationsOpen401Error1Value,
        Optional<ApiV1ConversationsOpen403Error1> apiV1ConversationsOpen403Error1Value,
        Optional<ApiV1ConversationsOpen404Error1> apiV1ConversationsOpen404Error1Value,
        Optional<ApiV1ConversationsOpen429Error1> apiV1ConversationsOpen429Error1Value,
        Optional<ApiV1ConversationsOpen500Error1> apiV1ConversationsOpen500Error1Value,
        Optional<ApiV1ConversationsOpen502Error1> apiV1ConversationsOpen502Error1Value,
        Optional<ApiV1ConversationsOpen503Error1> apiV1ConversationsOpen503Error1Value,
        Optional<ApiV1ConversationsOpen504Error1> apiV1ConversationsOpen504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1ConversationsOpen400Error1Value = apiV1ConversationsOpen400Error1Value;
        _apiV1ConversationsOpen401Error1Value = apiV1ConversationsOpen401Error1Value;
        _apiV1ConversationsOpen403Error1Value = apiV1ConversationsOpen403Error1Value;
        _apiV1ConversationsOpen404Error1Value = apiV1ConversationsOpen404Error1Value;
        _apiV1ConversationsOpen429Error1Value = apiV1ConversationsOpen429Error1Value;
        _apiV1ConversationsOpen500Error1Value = apiV1ConversationsOpen500Error1Value;
        _apiV1ConversationsOpen502Error1Value = apiV1ConversationsOpen502Error1Value;
        _apiV1ConversationsOpen503Error1Value = apiV1ConversationsOpen503Error1Value;
        _apiV1ConversationsOpen504Error1Value = apiV1ConversationsOpen504Error1Value;
    }

    private static ConversationOpenError AsApiV1ConversationsOpen400Error1(ApiV1ConversationsOpen400Error1 value) =>
        new(
            Optional<ApiV1ConversationsOpen400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationOpenError AsApiV1ConversationsOpen401Error1(ApiV1ConversationsOpen401Error1 value) =>
        new(
            default,
            Optional<ApiV1ConversationsOpen401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationOpenError AsApiV1ConversationsOpen403Error1(ApiV1ConversationsOpen403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1ConversationsOpen403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationOpenError AsApiV1ConversationsOpen404Error1(ApiV1ConversationsOpen404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1ConversationsOpen404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationOpenError AsApiV1ConversationsOpen429Error1(ApiV1ConversationsOpen429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsOpen429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static ConversationOpenError AsApiV1ConversationsOpen500Error1(ApiV1ConversationsOpen500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsOpen500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static ConversationOpenError AsApiV1ConversationsOpen502Error1(ApiV1ConversationsOpen502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsOpen502Error1>.Some(value),
            default,
            default,
            default);

    private static ConversationOpenError AsApiV1ConversationsOpen503Error1(ApiV1ConversationsOpen503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsOpen503Error1>.Some(value),
            default,
            default);

    private static ConversationOpenError AsApiV1ConversationsOpen504Error1(ApiV1ConversationsOpen504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsOpen504Error1>.Some(value),
            default);

    private static ConversationOpenError AsFallback(RawError value) =>
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

    public bool TryGetApiV1ConversationsOpen400Error1([NotNullWhen(true)] out ApiV1ConversationsOpen400Error1? value) =>
        _apiV1ConversationsOpen400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsOpen401Error1([NotNullWhen(true)] out ApiV1ConversationsOpen401Error1? value) =>
        _apiV1ConversationsOpen401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsOpen403Error1([NotNullWhen(true)] out ApiV1ConversationsOpen403Error1? value) =>
        _apiV1ConversationsOpen403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsOpen404Error1([NotNullWhen(true)] out ApiV1ConversationsOpen404Error1? value) =>
        _apiV1ConversationsOpen404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsOpen429Error1([NotNullWhen(true)] out ApiV1ConversationsOpen429Error1? value) =>
        _apiV1ConversationsOpen429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsOpen500Error1([NotNullWhen(true)] out ApiV1ConversationsOpen500Error1? value) =>
        _apiV1ConversationsOpen500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsOpen502Error1([NotNullWhen(true)] out ApiV1ConversationsOpen502Error1? value) =>
        _apiV1ConversationsOpen502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsOpen503Error1([NotNullWhen(true)] out ApiV1ConversationsOpen503Error1? value) =>
        _apiV1ConversationsOpen503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsOpen504Error1([NotNullWhen(true)] out ApiV1ConversationsOpen504Error1? value) =>
        _apiV1ConversationsOpen504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1ConversationsOpen400Error1, TResult> onApiV1ConversationsOpen400Error1,
        Func<ApiV1ConversationsOpen401Error1, TResult> onApiV1ConversationsOpen401Error1,
        Func<ApiV1ConversationsOpen403Error1, TResult> onApiV1ConversationsOpen403Error1,
        Func<ApiV1ConversationsOpen404Error1, TResult> onApiV1ConversationsOpen404Error1,
        Func<ApiV1ConversationsOpen429Error1, TResult> onApiV1ConversationsOpen429Error1,
        Func<ApiV1ConversationsOpen500Error1, TResult> onApiV1ConversationsOpen500Error1,
        Func<ApiV1ConversationsOpen502Error1, TResult> onApiV1ConversationsOpen502Error1,
        Func<ApiV1ConversationsOpen503Error1, TResult> onApiV1ConversationsOpen503Error1,
        Func<ApiV1ConversationsOpen504Error1, TResult> onApiV1ConversationsOpen504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1ConversationsOpen400Error1(
                out var apiV1ConversationsOpen400Error1Value) => onApiV1ConversationsOpen400Error1(
                apiV1ConversationsOpen400Error1Value),
            _ when TryGetApiV1ConversationsOpen401Error1(
                out var apiV1ConversationsOpen401Error1Value) => onApiV1ConversationsOpen401Error1(
                apiV1ConversationsOpen401Error1Value),
            _ when TryGetApiV1ConversationsOpen403Error1(
                out var apiV1ConversationsOpen403Error1Value) => onApiV1ConversationsOpen403Error1(
                apiV1ConversationsOpen403Error1Value),
            _ when TryGetApiV1ConversationsOpen404Error1(
                out var apiV1ConversationsOpen404Error1Value) => onApiV1ConversationsOpen404Error1(
                apiV1ConversationsOpen404Error1Value),
            _ when TryGetApiV1ConversationsOpen429Error1(
                out var apiV1ConversationsOpen429Error1Value) => onApiV1ConversationsOpen429Error1(
                apiV1ConversationsOpen429Error1Value),
            _ when TryGetApiV1ConversationsOpen500Error1(
                out var apiV1ConversationsOpen500Error1Value) => onApiV1ConversationsOpen500Error1(
                apiV1ConversationsOpen500Error1Value),
            _ when TryGetApiV1ConversationsOpen502Error1(
                out var apiV1ConversationsOpen502Error1Value) => onApiV1ConversationsOpen502Error1(
                apiV1ConversationsOpen502Error1Value),
            _ when TryGetApiV1ConversationsOpen503Error1(
                out var apiV1ConversationsOpen503Error1Value) => onApiV1ConversationsOpen503Error1(
                apiV1ConversationsOpen503Error1Value),
            _ when TryGetApiV1ConversationsOpen504Error1(
                out var apiV1ConversationsOpen504Error1Value) => onApiV1ConversationsOpen504Error1(
                apiV1ConversationsOpen504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ConversationOpenError)} holds no value.")
        };

    public void Match(Action<ApiV1ConversationsOpen400Error1> onApiV1ConversationsOpen400Error1,
        Action<ApiV1ConversationsOpen401Error1> onApiV1ConversationsOpen401Error1,
        Action<ApiV1ConversationsOpen403Error1> onApiV1ConversationsOpen403Error1,
        Action<ApiV1ConversationsOpen404Error1> onApiV1ConversationsOpen404Error1,
        Action<ApiV1ConversationsOpen429Error1> onApiV1ConversationsOpen429Error1,
        Action<ApiV1ConversationsOpen500Error1> onApiV1ConversationsOpen500Error1,
        Action<ApiV1ConversationsOpen502Error1> onApiV1ConversationsOpen502Error1,
        Action<ApiV1ConversationsOpen503Error1> onApiV1ConversationsOpen503Error1,
        Action<ApiV1ConversationsOpen504Error1> onApiV1ConversationsOpen504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1ConversationsOpen400Error1(
            out var apiV1ConversationsOpen400Error1Value)) onApiV1ConversationsOpen400Error1(
            apiV1ConversationsOpen400Error1Value);
        else if (TryGetApiV1ConversationsOpen401Error1(
            out var apiV1ConversationsOpen401Error1Value)) onApiV1ConversationsOpen401Error1(
            apiV1ConversationsOpen401Error1Value);
        else if (TryGetApiV1ConversationsOpen403Error1(
            out var apiV1ConversationsOpen403Error1Value)) onApiV1ConversationsOpen403Error1(
            apiV1ConversationsOpen403Error1Value);
        else if (TryGetApiV1ConversationsOpen404Error1(
            out var apiV1ConversationsOpen404Error1Value)) onApiV1ConversationsOpen404Error1(
            apiV1ConversationsOpen404Error1Value);
        else if (TryGetApiV1ConversationsOpen429Error1(
            out var apiV1ConversationsOpen429Error1Value)) onApiV1ConversationsOpen429Error1(
            apiV1ConversationsOpen429Error1Value);
        else if (TryGetApiV1ConversationsOpen500Error1(
            out var apiV1ConversationsOpen500Error1Value)) onApiV1ConversationsOpen500Error1(
            apiV1ConversationsOpen500Error1Value);
        else if (TryGetApiV1ConversationsOpen502Error1(
            out var apiV1ConversationsOpen502Error1Value)) onApiV1ConversationsOpen502Error1(
            apiV1ConversationsOpen502Error1Value);
        else if (TryGetApiV1ConversationsOpen503Error1(
            out var apiV1ConversationsOpen503Error1Value)) onApiV1ConversationsOpen503Error1(
            apiV1ConversationsOpen503Error1Value);
        else if (TryGetApiV1ConversationsOpen504Error1(
            out var apiV1ConversationsOpen504Error1Value)) onApiV1ConversationsOpen504Error1(
            apiV1ConversationsOpen504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ConversationOpenError)} holds no value.");
    }

    private static Task<ConversationOpenError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1ConversationsOpen400Error1>().As(AsApiV1ConversationsOpen400Error1),
            401 => response.Json<ApiV1ConversationsOpen401Error1>().As(AsApiV1ConversationsOpen401Error1),
            403 => response.Json<ApiV1ConversationsOpen403Error1>().As(AsApiV1ConversationsOpen403Error1),
            404 => response.Json<ApiV1ConversationsOpen404Error1>().As(AsApiV1ConversationsOpen404Error1),
            429 => response.Json<ApiV1ConversationsOpen429Error1>().As(AsApiV1ConversationsOpen429Error1),
            500 => response.Json<ApiV1ConversationsOpen500Error1>().As(AsApiV1ConversationsOpen500Error1),
            502 => response.Json<ApiV1ConversationsOpen502Error1>().As(AsApiV1ConversationsOpen502Error1),
            503 => response.Json<ApiV1ConversationsOpen503Error1>().As(AsApiV1ConversationsOpen503Error1),
            504 => response.Json<ApiV1ConversationsOpen504Error1>().As(AsApiV1ConversationsOpen504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ConversationOpenError> Response { get; } = new(Create);
}
