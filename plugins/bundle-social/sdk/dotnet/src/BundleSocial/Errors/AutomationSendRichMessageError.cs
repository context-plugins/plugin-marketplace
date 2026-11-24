using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class AutomationSendRichMessageError : ApiError
{
    private readonly Optional<ApiV1AutomationRichMessagesConversations400Error1> _apiV1AutomationRichMessagesConversations400Error1Value;

    private readonly Optional<ApiV1AutomationRichMessagesConversations401Error1> _apiV1AutomationRichMessagesConversations401Error1Value;

    private readonly Optional<ApiV1AutomationRichMessagesConversations403Error1> _apiV1AutomationRichMessagesConversations403Error1Value;

    private readonly Optional<ApiV1AutomationRichMessagesConversations404Error1> _apiV1AutomationRichMessagesConversations404Error1Value;

    private readonly Optional<ApiV1AutomationRichMessagesConversations429Error1> _apiV1AutomationRichMessagesConversations429Error1Value;

    private readonly Optional<ApiV1AutomationRichMessagesConversations500Error1> _apiV1AutomationRichMessagesConversations500Error1Value;

    private readonly Optional<ApiV1AutomationRichMessagesConversations502Error1> _apiV1AutomationRichMessagesConversations502Error1Value;

    private readonly Optional<ApiV1AutomationRichMessagesConversations503Error1> _apiV1AutomationRichMessagesConversations503Error1Value;

    private readonly Optional<ApiV1AutomationRichMessagesConversations504Error1> _apiV1AutomationRichMessagesConversations504Error1Value;

    private AutomationSendRichMessageError(Optional<ApiV1AutomationRichMessagesConversations400Error1> apiV1AutomationRichMessagesConversations400Error1Value,
        Optional<ApiV1AutomationRichMessagesConversations401Error1> apiV1AutomationRichMessagesConversations401Error1Value,
        Optional<ApiV1AutomationRichMessagesConversations403Error1> apiV1AutomationRichMessagesConversations403Error1Value,
        Optional<ApiV1AutomationRichMessagesConversations404Error1> apiV1AutomationRichMessagesConversations404Error1Value,
        Optional<ApiV1AutomationRichMessagesConversations429Error1> apiV1AutomationRichMessagesConversations429Error1Value,
        Optional<ApiV1AutomationRichMessagesConversations500Error1> apiV1AutomationRichMessagesConversations500Error1Value,
        Optional<ApiV1AutomationRichMessagesConversations502Error1> apiV1AutomationRichMessagesConversations502Error1Value,
        Optional<ApiV1AutomationRichMessagesConversations503Error1> apiV1AutomationRichMessagesConversations503Error1Value,
        Optional<ApiV1AutomationRichMessagesConversations504Error1> apiV1AutomationRichMessagesConversations504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1AutomationRichMessagesConversations400Error1Value =
            apiV1AutomationRichMessagesConversations400Error1Value;
        _apiV1AutomationRichMessagesConversations401Error1Value =
            apiV1AutomationRichMessagesConversations401Error1Value;
        _apiV1AutomationRichMessagesConversations403Error1Value =
            apiV1AutomationRichMessagesConversations403Error1Value;
        _apiV1AutomationRichMessagesConversations404Error1Value =
            apiV1AutomationRichMessagesConversations404Error1Value;
        _apiV1AutomationRichMessagesConversations429Error1Value =
            apiV1AutomationRichMessagesConversations429Error1Value;
        _apiV1AutomationRichMessagesConversations500Error1Value =
            apiV1AutomationRichMessagesConversations500Error1Value;
        _apiV1AutomationRichMessagesConversations502Error1Value =
            apiV1AutomationRichMessagesConversations502Error1Value;
        _apiV1AutomationRichMessagesConversations503Error1Value =
            apiV1AutomationRichMessagesConversations503Error1Value;
        _apiV1AutomationRichMessagesConversations504Error1Value =
            apiV1AutomationRichMessagesConversations504Error1Value;
    }

    private static AutomationSendRichMessageError AsApiV1AutomationRichMessagesConversations400Error1(ApiV1AutomationRichMessagesConversations400Error1 value) =>
        new(
            Optional<ApiV1AutomationRichMessagesConversations400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationSendRichMessageError AsApiV1AutomationRichMessagesConversations401Error1(ApiV1AutomationRichMessagesConversations401Error1 value) =>
        new(
            default,
            Optional<ApiV1AutomationRichMessagesConversations401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationSendRichMessageError AsApiV1AutomationRichMessagesConversations403Error1(ApiV1AutomationRichMessagesConversations403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1AutomationRichMessagesConversations403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationSendRichMessageError AsApiV1AutomationRichMessagesConversations404Error1(ApiV1AutomationRichMessagesConversations404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1AutomationRichMessagesConversations404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static AutomationSendRichMessageError AsApiV1AutomationRichMessagesConversations429Error1(ApiV1AutomationRichMessagesConversations429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationRichMessagesConversations429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static AutomationSendRichMessageError AsApiV1AutomationRichMessagesConversations500Error1(ApiV1AutomationRichMessagesConversations500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationRichMessagesConversations500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static AutomationSendRichMessageError AsApiV1AutomationRichMessagesConversations502Error1(ApiV1AutomationRichMessagesConversations502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationRichMessagesConversations502Error1>.Some(value),
            default,
            default,
            default);

    private static AutomationSendRichMessageError AsApiV1AutomationRichMessagesConversations503Error1(ApiV1AutomationRichMessagesConversations503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationRichMessagesConversations503Error1>.Some(value),
            default,
            default);

    private static AutomationSendRichMessageError AsApiV1AutomationRichMessagesConversations504Error1(ApiV1AutomationRichMessagesConversations504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1AutomationRichMessagesConversations504Error1>.Some(value),
            default);

    private static AutomationSendRichMessageError AsFallback(RawError value) =>
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

    public bool TryGetApiV1AutomationRichMessagesConversations400Error1([NotNullWhen(true)] out ApiV1AutomationRichMessagesConversations400Error1? value) =>
        _apiV1AutomationRichMessagesConversations400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationRichMessagesConversations401Error1([NotNullWhen(true)] out ApiV1AutomationRichMessagesConversations401Error1? value) =>
        _apiV1AutomationRichMessagesConversations401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationRichMessagesConversations403Error1([NotNullWhen(true)] out ApiV1AutomationRichMessagesConversations403Error1? value) =>
        _apiV1AutomationRichMessagesConversations403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationRichMessagesConversations404Error1([NotNullWhen(true)] out ApiV1AutomationRichMessagesConversations404Error1? value) =>
        _apiV1AutomationRichMessagesConversations404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationRichMessagesConversations429Error1([NotNullWhen(true)] out ApiV1AutomationRichMessagesConversations429Error1? value) =>
        _apiV1AutomationRichMessagesConversations429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationRichMessagesConversations500Error1([NotNullWhen(true)] out ApiV1AutomationRichMessagesConversations500Error1? value) =>
        _apiV1AutomationRichMessagesConversations500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationRichMessagesConversations502Error1([NotNullWhen(true)] out ApiV1AutomationRichMessagesConversations502Error1? value) =>
        _apiV1AutomationRichMessagesConversations502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationRichMessagesConversations503Error1([NotNullWhen(true)] out ApiV1AutomationRichMessagesConversations503Error1? value) =>
        _apiV1AutomationRichMessagesConversations503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1AutomationRichMessagesConversations504Error1([NotNullWhen(true)] out ApiV1AutomationRichMessagesConversations504Error1? value) =>
        _apiV1AutomationRichMessagesConversations504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1AutomationRichMessagesConversations400Error1, TResult> onApiV1AutomationRichMessagesConversations400Error1,
        Func<ApiV1AutomationRichMessagesConversations401Error1, TResult> onApiV1AutomationRichMessagesConversations401Error1,
        Func<ApiV1AutomationRichMessagesConversations403Error1, TResult> onApiV1AutomationRichMessagesConversations403Error1,
        Func<ApiV1AutomationRichMessagesConversations404Error1, TResult> onApiV1AutomationRichMessagesConversations404Error1,
        Func<ApiV1AutomationRichMessagesConversations429Error1, TResult> onApiV1AutomationRichMessagesConversations429Error1,
        Func<ApiV1AutomationRichMessagesConversations500Error1, TResult> onApiV1AutomationRichMessagesConversations500Error1,
        Func<ApiV1AutomationRichMessagesConversations502Error1, TResult> onApiV1AutomationRichMessagesConversations502Error1,
        Func<ApiV1AutomationRichMessagesConversations503Error1, TResult> onApiV1AutomationRichMessagesConversations503Error1,
        Func<ApiV1AutomationRichMessagesConversations504Error1, TResult> onApiV1AutomationRichMessagesConversations504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1AutomationRichMessagesConversations400Error1(
                out var apiV1AutomationRichMessagesConversations400Error1Value) => onApiV1AutomationRichMessagesConversations400Error1(
                apiV1AutomationRichMessagesConversations400Error1Value),
            _ when TryGetApiV1AutomationRichMessagesConversations401Error1(
                out var apiV1AutomationRichMessagesConversations401Error1Value) => onApiV1AutomationRichMessagesConversations401Error1(
                apiV1AutomationRichMessagesConversations401Error1Value),
            _ when TryGetApiV1AutomationRichMessagesConversations403Error1(
                out var apiV1AutomationRichMessagesConversations403Error1Value) => onApiV1AutomationRichMessagesConversations403Error1(
                apiV1AutomationRichMessagesConversations403Error1Value),
            _ when TryGetApiV1AutomationRichMessagesConversations404Error1(
                out var apiV1AutomationRichMessagesConversations404Error1Value) => onApiV1AutomationRichMessagesConversations404Error1(
                apiV1AutomationRichMessagesConversations404Error1Value),
            _ when TryGetApiV1AutomationRichMessagesConversations429Error1(
                out var apiV1AutomationRichMessagesConversations429Error1Value) => onApiV1AutomationRichMessagesConversations429Error1(
                apiV1AutomationRichMessagesConversations429Error1Value),
            _ when TryGetApiV1AutomationRichMessagesConversations500Error1(
                out var apiV1AutomationRichMessagesConversations500Error1Value) => onApiV1AutomationRichMessagesConversations500Error1(
                apiV1AutomationRichMessagesConversations500Error1Value),
            _ when TryGetApiV1AutomationRichMessagesConversations502Error1(
                out var apiV1AutomationRichMessagesConversations502Error1Value) => onApiV1AutomationRichMessagesConversations502Error1(
                apiV1AutomationRichMessagesConversations502Error1Value),
            _ when TryGetApiV1AutomationRichMessagesConversations503Error1(
                out var apiV1AutomationRichMessagesConversations503Error1Value) => onApiV1AutomationRichMessagesConversations503Error1(
                apiV1AutomationRichMessagesConversations503Error1Value),
            _ when TryGetApiV1AutomationRichMessagesConversations504Error1(
                out var apiV1AutomationRichMessagesConversations504Error1Value) => onApiV1AutomationRichMessagesConversations504Error1(
                apiV1AutomationRichMessagesConversations504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(AutomationSendRichMessageError)} holds no value.")
        };

    public void Match(Action<ApiV1AutomationRichMessagesConversations400Error1> onApiV1AutomationRichMessagesConversations400Error1,
        Action<ApiV1AutomationRichMessagesConversations401Error1> onApiV1AutomationRichMessagesConversations401Error1,
        Action<ApiV1AutomationRichMessagesConversations403Error1> onApiV1AutomationRichMessagesConversations403Error1,
        Action<ApiV1AutomationRichMessagesConversations404Error1> onApiV1AutomationRichMessagesConversations404Error1,
        Action<ApiV1AutomationRichMessagesConversations429Error1> onApiV1AutomationRichMessagesConversations429Error1,
        Action<ApiV1AutomationRichMessagesConversations500Error1> onApiV1AutomationRichMessagesConversations500Error1,
        Action<ApiV1AutomationRichMessagesConversations502Error1> onApiV1AutomationRichMessagesConversations502Error1,
        Action<ApiV1AutomationRichMessagesConversations503Error1> onApiV1AutomationRichMessagesConversations503Error1,
        Action<ApiV1AutomationRichMessagesConversations504Error1> onApiV1AutomationRichMessagesConversations504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1AutomationRichMessagesConversations400Error1(
            out var apiV1AutomationRichMessagesConversations400Error1Value)) onApiV1AutomationRichMessagesConversations400Error1(
            apiV1AutomationRichMessagesConversations400Error1Value);
        else if (TryGetApiV1AutomationRichMessagesConversations401Error1(
            out var apiV1AutomationRichMessagesConversations401Error1Value)) onApiV1AutomationRichMessagesConversations401Error1(
            apiV1AutomationRichMessagesConversations401Error1Value);
        else if (TryGetApiV1AutomationRichMessagesConversations403Error1(
            out var apiV1AutomationRichMessagesConversations403Error1Value)) onApiV1AutomationRichMessagesConversations403Error1(
            apiV1AutomationRichMessagesConversations403Error1Value);
        else if (TryGetApiV1AutomationRichMessagesConversations404Error1(
            out var apiV1AutomationRichMessagesConversations404Error1Value)) onApiV1AutomationRichMessagesConversations404Error1(
            apiV1AutomationRichMessagesConversations404Error1Value);
        else if (TryGetApiV1AutomationRichMessagesConversations429Error1(
            out var apiV1AutomationRichMessagesConversations429Error1Value)) onApiV1AutomationRichMessagesConversations429Error1(
            apiV1AutomationRichMessagesConversations429Error1Value);
        else if (TryGetApiV1AutomationRichMessagesConversations500Error1(
            out var apiV1AutomationRichMessagesConversations500Error1Value)) onApiV1AutomationRichMessagesConversations500Error1(
            apiV1AutomationRichMessagesConversations500Error1Value);
        else if (TryGetApiV1AutomationRichMessagesConversations502Error1(
            out var apiV1AutomationRichMessagesConversations502Error1Value)) onApiV1AutomationRichMessagesConversations502Error1(
            apiV1AutomationRichMessagesConversations502Error1Value);
        else if (TryGetApiV1AutomationRichMessagesConversations503Error1(
            out var apiV1AutomationRichMessagesConversations503Error1Value)) onApiV1AutomationRichMessagesConversations503Error1(
            apiV1AutomationRichMessagesConversations503Error1Value);
        else if (TryGetApiV1AutomationRichMessagesConversations504Error1(
            out var apiV1AutomationRichMessagesConversations504Error1Value)) onApiV1AutomationRichMessagesConversations504Error1(
            apiV1AutomationRichMessagesConversations504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(AutomationSendRichMessageError)} holds no value.");
    }

    private static Task<AutomationSendRichMessageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1AutomationRichMessagesConversations400Error1>().As(
                AsApiV1AutomationRichMessagesConversations400Error1),
            401 => response.Json<ApiV1AutomationRichMessagesConversations401Error1>().As(
                AsApiV1AutomationRichMessagesConversations401Error1),
            403 => response.Json<ApiV1AutomationRichMessagesConversations403Error1>().As(
                AsApiV1AutomationRichMessagesConversations403Error1),
            404 => response.Json<ApiV1AutomationRichMessagesConversations404Error1>().As(
                AsApiV1AutomationRichMessagesConversations404Error1),
            429 => response.Json<ApiV1AutomationRichMessagesConversations429Error1>().As(
                AsApiV1AutomationRichMessagesConversations429Error1),
            500 => response.Json<ApiV1AutomationRichMessagesConversations500Error1>().As(
                AsApiV1AutomationRichMessagesConversations500Error1),
            502 => response.Json<ApiV1AutomationRichMessagesConversations502Error1>().As(
                AsApiV1AutomationRichMessagesConversations502Error1),
            503 => response.Json<ApiV1AutomationRichMessagesConversations503Error1>().As(
                AsApiV1AutomationRichMessagesConversations503Error1),
            504 => response.Json<ApiV1AutomationRichMessagesConversations504Error1>().As(
                AsApiV1AutomationRichMessagesConversations504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<AutomationSendRichMessageError> Response { get; } = new(Create);
}
