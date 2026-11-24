using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class ConversationSendMessageError : ApiError
{
    private readonly Optional<ApiV1ConversationsMessages400Error1> _apiV1ConversationsMessages400Error1Value;

    private readonly Optional<ApiV1ConversationsMessages401Error1> _apiV1ConversationsMessages401Error1Value;

    private readonly Optional<ApiV1ConversationsMessages403Error1> _apiV1ConversationsMessages403Error1Value;

    private readonly Optional<ApiV1ConversationsMessages404Error1> _apiV1ConversationsMessages404Error1Value;

    private readonly Optional<ApiV1ConversationsMessages429Error1> _apiV1ConversationsMessages429Error1Value;

    private readonly Optional<ApiV1ConversationsMessages500Error1> _apiV1ConversationsMessages500Error1Value;

    private readonly Optional<ApiV1ConversationsMessages502Error1> _apiV1ConversationsMessages502Error1Value;

    private readonly Optional<ApiV1ConversationsMessages503Error1> _apiV1ConversationsMessages503Error1Value;

    private readonly Optional<ApiV1ConversationsMessages504Error1> _apiV1ConversationsMessages504Error1Value;

    private ConversationSendMessageError(Optional<ApiV1ConversationsMessages400Error1> apiV1ConversationsMessages400Error1Value,
        Optional<ApiV1ConversationsMessages401Error1> apiV1ConversationsMessages401Error1Value,
        Optional<ApiV1ConversationsMessages403Error1> apiV1ConversationsMessages403Error1Value,
        Optional<ApiV1ConversationsMessages404Error1> apiV1ConversationsMessages404Error1Value,
        Optional<ApiV1ConversationsMessages429Error1> apiV1ConversationsMessages429Error1Value,
        Optional<ApiV1ConversationsMessages500Error1> apiV1ConversationsMessages500Error1Value,
        Optional<ApiV1ConversationsMessages502Error1> apiV1ConversationsMessages502Error1Value,
        Optional<ApiV1ConversationsMessages503Error1> apiV1ConversationsMessages503Error1Value,
        Optional<ApiV1ConversationsMessages504Error1> apiV1ConversationsMessages504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1ConversationsMessages400Error1Value = apiV1ConversationsMessages400Error1Value;
        _apiV1ConversationsMessages401Error1Value = apiV1ConversationsMessages401Error1Value;
        _apiV1ConversationsMessages403Error1Value = apiV1ConversationsMessages403Error1Value;
        _apiV1ConversationsMessages404Error1Value = apiV1ConversationsMessages404Error1Value;
        _apiV1ConversationsMessages429Error1Value = apiV1ConversationsMessages429Error1Value;
        _apiV1ConversationsMessages500Error1Value = apiV1ConversationsMessages500Error1Value;
        _apiV1ConversationsMessages502Error1Value = apiV1ConversationsMessages502Error1Value;
        _apiV1ConversationsMessages503Error1Value = apiV1ConversationsMessages503Error1Value;
        _apiV1ConversationsMessages504Error1Value = apiV1ConversationsMessages504Error1Value;
    }

    private static ConversationSendMessageError AsApiV1ConversationsMessages400Error1(ApiV1ConversationsMessages400Error1 value) =>
        new(
            Optional<ApiV1ConversationsMessages400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationSendMessageError AsApiV1ConversationsMessages401Error1(ApiV1ConversationsMessages401Error1 value) =>
        new(
            default,
            Optional<ApiV1ConversationsMessages401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationSendMessageError AsApiV1ConversationsMessages403Error1(ApiV1ConversationsMessages403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1ConversationsMessages403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationSendMessageError AsApiV1ConversationsMessages404Error1(ApiV1ConversationsMessages404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1ConversationsMessages404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationSendMessageError AsApiV1ConversationsMessages429Error1(ApiV1ConversationsMessages429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsMessages429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static ConversationSendMessageError AsApiV1ConversationsMessages500Error1(ApiV1ConversationsMessages500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsMessages500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static ConversationSendMessageError AsApiV1ConversationsMessages502Error1(ApiV1ConversationsMessages502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsMessages502Error1>.Some(value),
            default,
            default,
            default);

    private static ConversationSendMessageError AsApiV1ConversationsMessages503Error1(ApiV1ConversationsMessages503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsMessages503Error1>.Some(value),
            default,
            default);

    private static ConversationSendMessageError AsApiV1ConversationsMessages504Error1(ApiV1ConversationsMessages504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsMessages504Error1>.Some(value),
            default);

    private static ConversationSendMessageError AsFallback(RawError value) =>
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

    public bool TryGetApiV1ConversationsMessages400Error1([NotNullWhen(true)] out ApiV1ConversationsMessages400Error1? value) =>
        _apiV1ConversationsMessages400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsMessages401Error1([NotNullWhen(true)] out ApiV1ConversationsMessages401Error1? value) =>
        _apiV1ConversationsMessages401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsMessages403Error1([NotNullWhen(true)] out ApiV1ConversationsMessages403Error1? value) =>
        _apiV1ConversationsMessages403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsMessages404Error1([NotNullWhen(true)] out ApiV1ConversationsMessages404Error1? value) =>
        _apiV1ConversationsMessages404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsMessages429Error1([NotNullWhen(true)] out ApiV1ConversationsMessages429Error1? value) =>
        _apiV1ConversationsMessages429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsMessages500Error1([NotNullWhen(true)] out ApiV1ConversationsMessages500Error1? value) =>
        _apiV1ConversationsMessages500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsMessages502Error1([NotNullWhen(true)] out ApiV1ConversationsMessages502Error1? value) =>
        _apiV1ConversationsMessages502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsMessages503Error1([NotNullWhen(true)] out ApiV1ConversationsMessages503Error1? value) =>
        _apiV1ConversationsMessages503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsMessages504Error1([NotNullWhen(true)] out ApiV1ConversationsMessages504Error1? value) =>
        _apiV1ConversationsMessages504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1ConversationsMessages400Error1, TResult> onApiV1ConversationsMessages400Error1,
        Func<ApiV1ConversationsMessages401Error1, TResult> onApiV1ConversationsMessages401Error1,
        Func<ApiV1ConversationsMessages403Error1, TResult> onApiV1ConversationsMessages403Error1,
        Func<ApiV1ConversationsMessages404Error1, TResult> onApiV1ConversationsMessages404Error1,
        Func<ApiV1ConversationsMessages429Error1, TResult> onApiV1ConversationsMessages429Error1,
        Func<ApiV1ConversationsMessages500Error1, TResult> onApiV1ConversationsMessages500Error1,
        Func<ApiV1ConversationsMessages502Error1, TResult> onApiV1ConversationsMessages502Error1,
        Func<ApiV1ConversationsMessages503Error1, TResult> onApiV1ConversationsMessages503Error1,
        Func<ApiV1ConversationsMessages504Error1, TResult> onApiV1ConversationsMessages504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1ConversationsMessages400Error1(
                out var apiV1ConversationsMessages400Error1Value) => onApiV1ConversationsMessages400Error1(
                apiV1ConversationsMessages400Error1Value),
            _ when TryGetApiV1ConversationsMessages401Error1(
                out var apiV1ConversationsMessages401Error1Value) => onApiV1ConversationsMessages401Error1(
                apiV1ConversationsMessages401Error1Value),
            _ when TryGetApiV1ConversationsMessages403Error1(
                out var apiV1ConversationsMessages403Error1Value) => onApiV1ConversationsMessages403Error1(
                apiV1ConversationsMessages403Error1Value),
            _ when TryGetApiV1ConversationsMessages404Error1(
                out var apiV1ConversationsMessages404Error1Value) => onApiV1ConversationsMessages404Error1(
                apiV1ConversationsMessages404Error1Value),
            _ when TryGetApiV1ConversationsMessages429Error1(
                out var apiV1ConversationsMessages429Error1Value) => onApiV1ConversationsMessages429Error1(
                apiV1ConversationsMessages429Error1Value),
            _ when TryGetApiV1ConversationsMessages500Error1(
                out var apiV1ConversationsMessages500Error1Value) => onApiV1ConversationsMessages500Error1(
                apiV1ConversationsMessages500Error1Value),
            _ when TryGetApiV1ConversationsMessages502Error1(
                out var apiV1ConversationsMessages502Error1Value) => onApiV1ConversationsMessages502Error1(
                apiV1ConversationsMessages502Error1Value),
            _ when TryGetApiV1ConversationsMessages503Error1(
                out var apiV1ConversationsMessages503Error1Value) => onApiV1ConversationsMessages503Error1(
                apiV1ConversationsMessages503Error1Value),
            _ when TryGetApiV1ConversationsMessages504Error1(
                out var apiV1ConversationsMessages504Error1Value) => onApiV1ConversationsMessages504Error1(
                apiV1ConversationsMessages504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ConversationSendMessageError)} holds no value.")
        };

    public void Match(Action<ApiV1ConversationsMessages400Error1> onApiV1ConversationsMessages400Error1,
        Action<ApiV1ConversationsMessages401Error1> onApiV1ConversationsMessages401Error1,
        Action<ApiV1ConversationsMessages403Error1> onApiV1ConversationsMessages403Error1,
        Action<ApiV1ConversationsMessages404Error1> onApiV1ConversationsMessages404Error1,
        Action<ApiV1ConversationsMessages429Error1> onApiV1ConversationsMessages429Error1,
        Action<ApiV1ConversationsMessages500Error1> onApiV1ConversationsMessages500Error1,
        Action<ApiV1ConversationsMessages502Error1> onApiV1ConversationsMessages502Error1,
        Action<ApiV1ConversationsMessages503Error1> onApiV1ConversationsMessages503Error1,
        Action<ApiV1ConversationsMessages504Error1> onApiV1ConversationsMessages504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1ConversationsMessages400Error1(
            out var apiV1ConversationsMessages400Error1Value)) onApiV1ConversationsMessages400Error1(
            apiV1ConversationsMessages400Error1Value);
        else if (TryGetApiV1ConversationsMessages401Error1(
            out var apiV1ConversationsMessages401Error1Value)) onApiV1ConversationsMessages401Error1(
            apiV1ConversationsMessages401Error1Value);
        else if (TryGetApiV1ConversationsMessages403Error1(
            out var apiV1ConversationsMessages403Error1Value)) onApiV1ConversationsMessages403Error1(
            apiV1ConversationsMessages403Error1Value);
        else if (TryGetApiV1ConversationsMessages404Error1(
            out var apiV1ConversationsMessages404Error1Value)) onApiV1ConversationsMessages404Error1(
            apiV1ConversationsMessages404Error1Value);
        else if (TryGetApiV1ConversationsMessages429Error1(
            out var apiV1ConversationsMessages429Error1Value)) onApiV1ConversationsMessages429Error1(
            apiV1ConversationsMessages429Error1Value);
        else if (TryGetApiV1ConversationsMessages500Error1(
            out var apiV1ConversationsMessages500Error1Value)) onApiV1ConversationsMessages500Error1(
            apiV1ConversationsMessages500Error1Value);
        else if (TryGetApiV1ConversationsMessages502Error1(
            out var apiV1ConversationsMessages502Error1Value)) onApiV1ConversationsMessages502Error1(
            apiV1ConversationsMessages502Error1Value);
        else if (TryGetApiV1ConversationsMessages503Error1(
            out var apiV1ConversationsMessages503Error1Value)) onApiV1ConversationsMessages503Error1(
            apiV1ConversationsMessages503Error1Value);
        else if (TryGetApiV1ConversationsMessages504Error1(
            out var apiV1ConversationsMessages504Error1Value)) onApiV1ConversationsMessages504Error1(
            apiV1ConversationsMessages504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ConversationSendMessageError)} holds no value.");
    }

    private static Task<ConversationSendMessageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1ConversationsMessages400Error1>().As(AsApiV1ConversationsMessages400Error1),
            401 => response.Json<ApiV1ConversationsMessages401Error1>().As(AsApiV1ConversationsMessages401Error1),
            403 => response.Json<ApiV1ConversationsMessages403Error1>().As(AsApiV1ConversationsMessages403Error1),
            404 => response.Json<ApiV1ConversationsMessages404Error1>().As(AsApiV1ConversationsMessages404Error1),
            429 => response.Json<ApiV1ConversationsMessages429Error1>().As(AsApiV1ConversationsMessages429Error1),
            500 => response.Json<ApiV1ConversationsMessages500Error1>().As(AsApiV1ConversationsMessages500Error1),
            502 => response.Json<ApiV1ConversationsMessages502Error1>().As(AsApiV1ConversationsMessages502Error1),
            503 => response.Json<ApiV1ConversationsMessages503Error1>().As(AsApiV1ConversationsMessages503Error1),
            504 => response.Json<ApiV1ConversationsMessages504Error1>().As(AsApiV1ConversationsMessages504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ConversationSendMessageError> Response { get; } = new(Create);
}
