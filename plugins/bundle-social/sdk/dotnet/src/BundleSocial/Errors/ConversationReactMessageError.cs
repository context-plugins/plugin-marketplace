using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class ConversationReactMessageError : ApiError
{
    private readonly Optional<ApiV1ConversationsMessagesReaction400Error1> _apiV1ConversationsMessagesReaction400Error1Value;

    private readonly Optional<ApiV1ConversationsMessagesReaction401Error1> _apiV1ConversationsMessagesReaction401Error1Value;

    private readonly Optional<ApiV1ConversationsMessagesReaction403Error1> _apiV1ConversationsMessagesReaction403Error1Value;

    private readonly Optional<ApiV1ConversationsMessagesReaction404Error1> _apiV1ConversationsMessagesReaction404Error1Value;

    private readonly Optional<ApiV1ConversationsMessagesReaction429Error1> _apiV1ConversationsMessagesReaction429Error1Value;

    private readonly Optional<ApiV1ConversationsMessagesReaction500Error1> _apiV1ConversationsMessagesReaction500Error1Value;

    private readonly Optional<ApiV1ConversationsMessagesReaction502Error1> _apiV1ConversationsMessagesReaction502Error1Value;

    private readonly Optional<ApiV1ConversationsMessagesReaction503Error1> _apiV1ConversationsMessagesReaction503Error1Value;

    private readonly Optional<ApiV1ConversationsMessagesReaction504Error1> _apiV1ConversationsMessagesReaction504Error1Value;

    private ConversationReactMessageError(Optional<ApiV1ConversationsMessagesReaction400Error1> apiV1ConversationsMessagesReaction400Error1Value,
        Optional<ApiV1ConversationsMessagesReaction401Error1> apiV1ConversationsMessagesReaction401Error1Value,
        Optional<ApiV1ConversationsMessagesReaction403Error1> apiV1ConversationsMessagesReaction403Error1Value,
        Optional<ApiV1ConversationsMessagesReaction404Error1> apiV1ConversationsMessagesReaction404Error1Value,
        Optional<ApiV1ConversationsMessagesReaction429Error1> apiV1ConversationsMessagesReaction429Error1Value,
        Optional<ApiV1ConversationsMessagesReaction500Error1> apiV1ConversationsMessagesReaction500Error1Value,
        Optional<ApiV1ConversationsMessagesReaction502Error1> apiV1ConversationsMessagesReaction502Error1Value,
        Optional<ApiV1ConversationsMessagesReaction503Error1> apiV1ConversationsMessagesReaction503Error1Value,
        Optional<ApiV1ConversationsMessagesReaction504Error1> apiV1ConversationsMessagesReaction504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1ConversationsMessagesReaction400Error1Value = apiV1ConversationsMessagesReaction400Error1Value;
        _apiV1ConversationsMessagesReaction401Error1Value = apiV1ConversationsMessagesReaction401Error1Value;
        _apiV1ConversationsMessagesReaction403Error1Value = apiV1ConversationsMessagesReaction403Error1Value;
        _apiV1ConversationsMessagesReaction404Error1Value = apiV1ConversationsMessagesReaction404Error1Value;
        _apiV1ConversationsMessagesReaction429Error1Value = apiV1ConversationsMessagesReaction429Error1Value;
        _apiV1ConversationsMessagesReaction500Error1Value = apiV1ConversationsMessagesReaction500Error1Value;
        _apiV1ConversationsMessagesReaction502Error1Value = apiV1ConversationsMessagesReaction502Error1Value;
        _apiV1ConversationsMessagesReaction503Error1Value = apiV1ConversationsMessagesReaction503Error1Value;
        _apiV1ConversationsMessagesReaction504Error1Value = apiV1ConversationsMessagesReaction504Error1Value;
    }

    private static ConversationReactMessageError AsApiV1ConversationsMessagesReaction400Error1(ApiV1ConversationsMessagesReaction400Error1 value) =>
        new(
            Optional<ApiV1ConversationsMessagesReaction400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationReactMessageError AsApiV1ConversationsMessagesReaction401Error1(ApiV1ConversationsMessagesReaction401Error1 value) =>
        new(
            default,
            Optional<ApiV1ConversationsMessagesReaction401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationReactMessageError AsApiV1ConversationsMessagesReaction403Error1(ApiV1ConversationsMessagesReaction403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1ConversationsMessagesReaction403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationReactMessageError AsApiV1ConversationsMessagesReaction404Error1(ApiV1ConversationsMessagesReaction404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1ConversationsMessagesReaction404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationReactMessageError AsApiV1ConversationsMessagesReaction429Error1(ApiV1ConversationsMessagesReaction429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsMessagesReaction429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static ConversationReactMessageError AsApiV1ConversationsMessagesReaction500Error1(ApiV1ConversationsMessagesReaction500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsMessagesReaction500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static ConversationReactMessageError AsApiV1ConversationsMessagesReaction502Error1(ApiV1ConversationsMessagesReaction502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsMessagesReaction502Error1>.Some(value),
            default,
            default,
            default);

    private static ConversationReactMessageError AsApiV1ConversationsMessagesReaction503Error1(ApiV1ConversationsMessagesReaction503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsMessagesReaction503Error1>.Some(value),
            default,
            default);

    private static ConversationReactMessageError AsApiV1ConversationsMessagesReaction504Error1(ApiV1ConversationsMessagesReaction504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsMessagesReaction504Error1>.Some(value),
            default);

    private static ConversationReactMessageError AsFallback(RawError value) =>
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

    public bool TryGetApiV1ConversationsMessagesReaction400Error1([NotNullWhen(true)] out ApiV1ConversationsMessagesReaction400Error1? value) =>
        _apiV1ConversationsMessagesReaction400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsMessagesReaction401Error1([NotNullWhen(true)] out ApiV1ConversationsMessagesReaction401Error1? value) =>
        _apiV1ConversationsMessagesReaction401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsMessagesReaction403Error1([NotNullWhen(true)] out ApiV1ConversationsMessagesReaction403Error1? value) =>
        _apiV1ConversationsMessagesReaction403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsMessagesReaction404Error1([NotNullWhen(true)] out ApiV1ConversationsMessagesReaction404Error1? value) =>
        _apiV1ConversationsMessagesReaction404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsMessagesReaction429Error1([NotNullWhen(true)] out ApiV1ConversationsMessagesReaction429Error1? value) =>
        _apiV1ConversationsMessagesReaction429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsMessagesReaction500Error1([NotNullWhen(true)] out ApiV1ConversationsMessagesReaction500Error1? value) =>
        _apiV1ConversationsMessagesReaction500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsMessagesReaction502Error1([NotNullWhen(true)] out ApiV1ConversationsMessagesReaction502Error1? value) =>
        _apiV1ConversationsMessagesReaction502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsMessagesReaction503Error1([NotNullWhen(true)] out ApiV1ConversationsMessagesReaction503Error1? value) =>
        _apiV1ConversationsMessagesReaction503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsMessagesReaction504Error1([NotNullWhen(true)] out ApiV1ConversationsMessagesReaction504Error1? value) =>
        _apiV1ConversationsMessagesReaction504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1ConversationsMessagesReaction400Error1, TResult> onApiV1ConversationsMessagesReaction400Error1,
        Func<ApiV1ConversationsMessagesReaction401Error1, TResult> onApiV1ConversationsMessagesReaction401Error1,
        Func<ApiV1ConversationsMessagesReaction403Error1, TResult> onApiV1ConversationsMessagesReaction403Error1,
        Func<ApiV1ConversationsMessagesReaction404Error1, TResult> onApiV1ConversationsMessagesReaction404Error1,
        Func<ApiV1ConversationsMessagesReaction429Error1, TResult> onApiV1ConversationsMessagesReaction429Error1,
        Func<ApiV1ConversationsMessagesReaction500Error1, TResult> onApiV1ConversationsMessagesReaction500Error1,
        Func<ApiV1ConversationsMessagesReaction502Error1, TResult> onApiV1ConversationsMessagesReaction502Error1,
        Func<ApiV1ConversationsMessagesReaction503Error1, TResult> onApiV1ConversationsMessagesReaction503Error1,
        Func<ApiV1ConversationsMessagesReaction504Error1, TResult> onApiV1ConversationsMessagesReaction504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1ConversationsMessagesReaction400Error1(
                out var apiV1ConversationsMessagesReaction400Error1Value) => onApiV1ConversationsMessagesReaction400Error1(
                apiV1ConversationsMessagesReaction400Error1Value),
            _ when TryGetApiV1ConversationsMessagesReaction401Error1(
                out var apiV1ConversationsMessagesReaction401Error1Value) => onApiV1ConversationsMessagesReaction401Error1(
                apiV1ConversationsMessagesReaction401Error1Value),
            _ when TryGetApiV1ConversationsMessagesReaction403Error1(
                out var apiV1ConversationsMessagesReaction403Error1Value) => onApiV1ConversationsMessagesReaction403Error1(
                apiV1ConversationsMessagesReaction403Error1Value),
            _ when TryGetApiV1ConversationsMessagesReaction404Error1(
                out var apiV1ConversationsMessagesReaction404Error1Value) => onApiV1ConversationsMessagesReaction404Error1(
                apiV1ConversationsMessagesReaction404Error1Value),
            _ when TryGetApiV1ConversationsMessagesReaction429Error1(
                out var apiV1ConversationsMessagesReaction429Error1Value) => onApiV1ConversationsMessagesReaction429Error1(
                apiV1ConversationsMessagesReaction429Error1Value),
            _ when TryGetApiV1ConversationsMessagesReaction500Error1(
                out var apiV1ConversationsMessagesReaction500Error1Value) => onApiV1ConversationsMessagesReaction500Error1(
                apiV1ConversationsMessagesReaction500Error1Value),
            _ when TryGetApiV1ConversationsMessagesReaction502Error1(
                out var apiV1ConversationsMessagesReaction502Error1Value) => onApiV1ConversationsMessagesReaction502Error1(
                apiV1ConversationsMessagesReaction502Error1Value),
            _ when TryGetApiV1ConversationsMessagesReaction503Error1(
                out var apiV1ConversationsMessagesReaction503Error1Value) => onApiV1ConversationsMessagesReaction503Error1(
                apiV1ConversationsMessagesReaction503Error1Value),
            _ when TryGetApiV1ConversationsMessagesReaction504Error1(
                out var apiV1ConversationsMessagesReaction504Error1Value) => onApiV1ConversationsMessagesReaction504Error1(
                apiV1ConversationsMessagesReaction504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ConversationReactMessageError)} holds no value.")
        };

    public void Match(Action<ApiV1ConversationsMessagesReaction400Error1> onApiV1ConversationsMessagesReaction400Error1,
        Action<ApiV1ConversationsMessagesReaction401Error1> onApiV1ConversationsMessagesReaction401Error1,
        Action<ApiV1ConversationsMessagesReaction403Error1> onApiV1ConversationsMessagesReaction403Error1,
        Action<ApiV1ConversationsMessagesReaction404Error1> onApiV1ConversationsMessagesReaction404Error1,
        Action<ApiV1ConversationsMessagesReaction429Error1> onApiV1ConversationsMessagesReaction429Error1,
        Action<ApiV1ConversationsMessagesReaction500Error1> onApiV1ConversationsMessagesReaction500Error1,
        Action<ApiV1ConversationsMessagesReaction502Error1> onApiV1ConversationsMessagesReaction502Error1,
        Action<ApiV1ConversationsMessagesReaction503Error1> onApiV1ConversationsMessagesReaction503Error1,
        Action<ApiV1ConversationsMessagesReaction504Error1> onApiV1ConversationsMessagesReaction504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1ConversationsMessagesReaction400Error1(
            out var apiV1ConversationsMessagesReaction400Error1Value)) onApiV1ConversationsMessagesReaction400Error1(
            apiV1ConversationsMessagesReaction400Error1Value);
        else if (TryGetApiV1ConversationsMessagesReaction401Error1(
            out var apiV1ConversationsMessagesReaction401Error1Value)) onApiV1ConversationsMessagesReaction401Error1(
            apiV1ConversationsMessagesReaction401Error1Value);
        else if (TryGetApiV1ConversationsMessagesReaction403Error1(
            out var apiV1ConversationsMessagesReaction403Error1Value)) onApiV1ConversationsMessagesReaction403Error1(
            apiV1ConversationsMessagesReaction403Error1Value);
        else if (TryGetApiV1ConversationsMessagesReaction404Error1(
            out var apiV1ConversationsMessagesReaction404Error1Value)) onApiV1ConversationsMessagesReaction404Error1(
            apiV1ConversationsMessagesReaction404Error1Value);
        else if (TryGetApiV1ConversationsMessagesReaction429Error1(
            out var apiV1ConversationsMessagesReaction429Error1Value)) onApiV1ConversationsMessagesReaction429Error1(
            apiV1ConversationsMessagesReaction429Error1Value);
        else if (TryGetApiV1ConversationsMessagesReaction500Error1(
            out var apiV1ConversationsMessagesReaction500Error1Value)) onApiV1ConversationsMessagesReaction500Error1(
            apiV1ConversationsMessagesReaction500Error1Value);
        else if (TryGetApiV1ConversationsMessagesReaction502Error1(
            out var apiV1ConversationsMessagesReaction502Error1Value)) onApiV1ConversationsMessagesReaction502Error1(
            apiV1ConversationsMessagesReaction502Error1Value);
        else if (TryGetApiV1ConversationsMessagesReaction503Error1(
            out var apiV1ConversationsMessagesReaction503Error1Value)) onApiV1ConversationsMessagesReaction503Error1(
            apiV1ConversationsMessagesReaction503Error1Value);
        else if (TryGetApiV1ConversationsMessagesReaction504Error1(
            out var apiV1ConversationsMessagesReaction504Error1Value)) onApiV1ConversationsMessagesReaction504Error1(
            apiV1ConversationsMessagesReaction504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ConversationReactMessageError)} holds no value.");
    }

    private static Task<ConversationReactMessageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1ConversationsMessagesReaction400Error1>().As(
                AsApiV1ConversationsMessagesReaction400Error1),
            401 => response.Json<ApiV1ConversationsMessagesReaction401Error1>().As(
                AsApiV1ConversationsMessagesReaction401Error1),
            403 => response.Json<ApiV1ConversationsMessagesReaction403Error1>().As(
                AsApiV1ConversationsMessagesReaction403Error1),
            404 => response.Json<ApiV1ConversationsMessagesReaction404Error1>().As(
                AsApiV1ConversationsMessagesReaction404Error1),
            429 => response.Json<ApiV1ConversationsMessagesReaction429Error1>().As(
                AsApiV1ConversationsMessagesReaction429Error1),
            500 => response.Json<ApiV1ConversationsMessagesReaction500Error1>().As(
                AsApiV1ConversationsMessagesReaction500Error1),
            502 => response.Json<ApiV1ConversationsMessagesReaction502Error1>().As(
                AsApiV1ConversationsMessagesReaction502Error1),
            503 => response.Json<ApiV1ConversationsMessagesReaction503Error1>().As(
                AsApiV1ConversationsMessagesReaction503Error1),
            504 => response.Json<ApiV1ConversationsMessagesReaction504Error1>().As(
                AsApiV1ConversationsMessagesReaction504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ConversationReactMessageError> Response { get; } = new(Create);
}
