using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class ConversationPrivateReplyError : ApiError
{
    private readonly Optional<ApiV1ConversationsPrivateReply400Error1> _apiV1ConversationsPrivateReply400Error1Value;

    private readonly Optional<ApiV1ConversationsPrivateReply401Error1> _apiV1ConversationsPrivateReply401Error1Value;

    private readonly Optional<ApiV1ConversationsPrivateReply403Error1> _apiV1ConversationsPrivateReply403Error1Value;

    private readonly Optional<ApiV1ConversationsPrivateReply404Error1> _apiV1ConversationsPrivateReply404Error1Value;

    private readonly Optional<ApiV1ConversationsPrivateReply429Error1> _apiV1ConversationsPrivateReply429Error1Value;

    private readonly Optional<ApiV1ConversationsPrivateReply500Error1> _apiV1ConversationsPrivateReply500Error1Value;

    private readonly Optional<ApiV1ConversationsPrivateReply502Error1> _apiV1ConversationsPrivateReply502Error1Value;

    private readonly Optional<ApiV1ConversationsPrivateReply503Error1> _apiV1ConversationsPrivateReply503Error1Value;

    private readonly Optional<ApiV1ConversationsPrivateReply504Error1> _apiV1ConversationsPrivateReply504Error1Value;

    private ConversationPrivateReplyError(Optional<ApiV1ConversationsPrivateReply400Error1> apiV1ConversationsPrivateReply400Error1Value,
        Optional<ApiV1ConversationsPrivateReply401Error1> apiV1ConversationsPrivateReply401Error1Value,
        Optional<ApiV1ConversationsPrivateReply403Error1> apiV1ConversationsPrivateReply403Error1Value,
        Optional<ApiV1ConversationsPrivateReply404Error1> apiV1ConversationsPrivateReply404Error1Value,
        Optional<ApiV1ConversationsPrivateReply429Error1> apiV1ConversationsPrivateReply429Error1Value,
        Optional<ApiV1ConversationsPrivateReply500Error1> apiV1ConversationsPrivateReply500Error1Value,
        Optional<ApiV1ConversationsPrivateReply502Error1> apiV1ConversationsPrivateReply502Error1Value,
        Optional<ApiV1ConversationsPrivateReply503Error1> apiV1ConversationsPrivateReply503Error1Value,
        Optional<ApiV1ConversationsPrivateReply504Error1> apiV1ConversationsPrivateReply504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1ConversationsPrivateReply400Error1Value = apiV1ConversationsPrivateReply400Error1Value;
        _apiV1ConversationsPrivateReply401Error1Value = apiV1ConversationsPrivateReply401Error1Value;
        _apiV1ConversationsPrivateReply403Error1Value = apiV1ConversationsPrivateReply403Error1Value;
        _apiV1ConversationsPrivateReply404Error1Value = apiV1ConversationsPrivateReply404Error1Value;
        _apiV1ConversationsPrivateReply429Error1Value = apiV1ConversationsPrivateReply429Error1Value;
        _apiV1ConversationsPrivateReply500Error1Value = apiV1ConversationsPrivateReply500Error1Value;
        _apiV1ConversationsPrivateReply502Error1Value = apiV1ConversationsPrivateReply502Error1Value;
        _apiV1ConversationsPrivateReply503Error1Value = apiV1ConversationsPrivateReply503Error1Value;
        _apiV1ConversationsPrivateReply504Error1Value = apiV1ConversationsPrivateReply504Error1Value;
    }

    private static ConversationPrivateReplyError AsApiV1ConversationsPrivateReply400Error1(ApiV1ConversationsPrivateReply400Error1 value) =>
        new(
            Optional<ApiV1ConversationsPrivateReply400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationPrivateReplyError AsApiV1ConversationsPrivateReply401Error1(ApiV1ConversationsPrivateReply401Error1 value) =>
        new(
            default,
            Optional<ApiV1ConversationsPrivateReply401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationPrivateReplyError AsApiV1ConversationsPrivateReply403Error1(ApiV1ConversationsPrivateReply403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1ConversationsPrivateReply403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationPrivateReplyError AsApiV1ConversationsPrivateReply404Error1(ApiV1ConversationsPrivateReply404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1ConversationsPrivateReply404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationPrivateReplyError AsApiV1ConversationsPrivateReply429Error1(ApiV1ConversationsPrivateReply429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsPrivateReply429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static ConversationPrivateReplyError AsApiV1ConversationsPrivateReply500Error1(ApiV1ConversationsPrivateReply500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsPrivateReply500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static ConversationPrivateReplyError AsApiV1ConversationsPrivateReply502Error1(ApiV1ConversationsPrivateReply502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsPrivateReply502Error1>.Some(value),
            default,
            default,
            default);

    private static ConversationPrivateReplyError AsApiV1ConversationsPrivateReply503Error1(ApiV1ConversationsPrivateReply503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsPrivateReply503Error1>.Some(value),
            default,
            default);

    private static ConversationPrivateReplyError AsApiV1ConversationsPrivateReply504Error1(ApiV1ConversationsPrivateReply504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsPrivateReply504Error1>.Some(value),
            default);

    private static ConversationPrivateReplyError AsFallback(RawError value) =>
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

    public bool TryGetApiV1ConversationsPrivateReply400Error1([NotNullWhen(true)] out ApiV1ConversationsPrivateReply400Error1? value) =>
        _apiV1ConversationsPrivateReply400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsPrivateReply401Error1([NotNullWhen(true)] out ApiV1ConversationsPrivateReply401Error1? value) =>
        _apiV1ConversationsPrivateReply401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsPrivateReply403Error1([NotNullWhen(true)] out ApiV1ConversationsPrivateReply403Error1? value) =>
        _apiV1ConversationsPrivateReply403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsPrivateReply404Error1([NotNullWhen(true)] out ApiV1ConversationsPrivateReply404Error1? value) =>
        _apiV1ConversationsPrivateReply404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsPrivateReply429Error1([NotNullWhen(true)] out ApiV1ConversationsPrivateReply429Error1? value) =>
        _apiV1ConversationsPrivateReply429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsPrivateReply500Error1([NotNullWhen(true)] out ApiV1ConversationsPrivateReply500Error1? value) =>
        _apiV1ConversationsPrivateReply500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsPrivateReply502Error1([NotNullWhen(true)] out ApiV1ConversationsPrivateReply502Error1? value) =>
        _apiV1ConversationsPrivateReply502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsPrivateReply503Error1([NotNullWhen(true)] out ApiV1ConversationsPrivateReply503Error1? value) =>
        _apiV1ConversationsPrivateReply503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsPrivateReply504Error1([NotNullWhen(true)] out ApiV1ConversationsPrivateReply504Error1? value) =>
        _apiV1ConversationsPrivateReply504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1ConversationsPrivateReply400Error1, TResult> onApiV1ConversationsPrivateReply400Error1,
        Func<ApiV1ConversationsPrivateReply401Error1, TResult> onApiV1ConversationsPrivateReply401Error1,
        Func<ApiV1ConversationsPrivateReply403Error1, TResult> onApiV1ConversationsPrivateReply403Error1,
        Func<ApiV1ConversationsPrivateReply404Error1, TResult> onApiV1ConversationsPrivateReply404Error1,
        Func<ApiV1ConversationsPrivateReply429Error1, TResult> onApiV1ConversationsPrivateReply429Error1,
        Func<ApiV1ConversationsPrivateReply500Error1, TResult> onApiV1ConversationsPrivateReply500Error1,
        Func<ApiV1ConversationsPrivateReply502Error1, TResult> onApiV1ConversationsPrivateReply502Error1,
        Func<ApiV1ConversationsPrivateReply503Error1, TResult> onApiV1ConversationsPrivateReply503Error1,
        Func<ApiV1ConversationsPrivateReply504Error1, TResult> onApiV1ConversationsPrivateReply504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1ConversationsPrivateReply400Error1(
                out var apiV1ConversationsPrivateReply400Error1Value) => onApiV1ConversationsPrivateReply400Error1(
                apiV1ConversationsPrivateReply400Error1Value),
            _ when TryGetApiV1ConversationsPrivateReply401Error1(
                out var apiV1ConversationsPrivateReply401Error1Value) => onApiV1ConversationsPrivateReply401Error1(
                apiV1ConversationsPrivateReply401Error1Value),
            _ when TryGetApiV1ConversationsPrivateReply403Error1(
                out var apiV1ConversationsPrivateReply403Error1Value) => onApiV1ConversationsPrivateReply403Error1(
                apiV1ConversationsPrivateReply403Error1Value),
            _ when TryGetApiV1ConversationsPrivateReply404Error1(
                out var apiV1ConversationsPrivateReply404Error1Value) => onApiV1ConversationsPrivateReply404Error1(
                apiV1ConversationsPrivateReply404Error1Value),
            _ when TryGetApiV1ConversationsPrivateReply429Error1(
                out var apiV1ConversationsPrivateReply429Error1Value) => onApiV1ConversationsPrivateReply429Error1(
                apiV1ConversationsPrivateReply429Error1Value),
            _ when TryGetApiV1ConversationsPrivateReply500Error1(
                out var apiV1ConversationsPrivateReply500Error1Value) => onApiV1ConversationsPrivateReply500Error1(
                apiV1ConversationsPrivateReply500Error1Value),
            _ when TryGetApiV1ConversationsPrivateReply502Error1(
                out var apiV1ConversationsPrivateReply502Error1Value) => onApiV1ConversationsPrivateReply502Error1(
                apiV1ConversationsPrivateReply502Error1Value),
            _ when TryGetApiV1ConversationsPrivateReply503Error1(
                out var apiV1ConversationsPrivateReply503Error1Value) => onApiV1ConversationsPrivateReply503Error1(
                apiV1ConversationsPrivateReply503Error1Value),
            _ when TryGetApiV1ConversationsPrivateReply504Error1(
                out var apiV1ConversationsPrivateReply504Error1Value) => onApiV1ConversationsPrivateReply504Error1(
                apiV1ConversationsPrivateReply504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ConversationPrivateReplyError)} holds no value.")
        };

    public void Match(Action<ApiV1ConversationsPrivateReply400Error1> onApiV1ConversationsPrivateReply400Error1,
        Action<ApiV1ConversationsPrivateReply401Error1> onApiV1ConversationsPrivateReply401Error1,
        Action<ApiV1ConversationsPrivateReply403Error1> onApiV1ConversationsPrivateReply403Error1,
        Action<ApiV1ConversationsPrivateReply404Error1> onApiV1ConversationsPrivateReply404Error1,
        Action<ApiV1ConversationsPrivateReply429Error1> onApiV1ConversationsPrivateReply429Error1,
        Action<ApiV1ConversationsPrivateReply500Error1> onApiV1ConversationsPrivateReply500Error1,
        Action<ApiV1ConversationsPrivateReply502Error1> onApiV1ConversationsPrivateReply502Error1,
        Action<ApiV1ConversationsPrivateReply503Error1> onApiV1ConversationsPrivateReply503Error1,
        Action<ApiV1ConversationsPrivateReply504Error1> onApiV1ConversationsPrivateReply504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1ConversationsPrivateReply400Error1(
            out var apiV1ConversationsPrivateReply400Error1Value)) onApiV1ConversationsPrivateReply400Error1(
            apiV1ConversationsPrivateReply400Error1Value);
        else if (TryGetApiV1ConversationsPrivateReply401Error1(
            out var apiV1ConversationsPrivateReply401Error1Value)) onApiV1ConversationsPrivateReply401Error1(
            apiV1ConversationsPrivateReply401Error1Value);
        else if (TryGetApiV1ConversationsPrivateReply403Error1(
            out var apiV1ConversationsPrivateReply403Error1Value)) onApiV1ConversationsPrivateReply403Error1(
            apiV1ConversationsPrivateReply403Error1Value);
        else if (TryGetApiV1ConversationsPrivateReply404Error1(
            out var apiV1ConversationsPrivateReply404Error1Value)) onApiV1ConversationsPrivateReply404Error1(
            apiV1ConversationsPrivateReply404Error1Value);
        else if (TryGetApiV1ConversationsPrivateReply429Error1(
            out var apiV1ConversationsPrivateReply429Error1Value)) onApiV1ConversationsPrivateReply429Error1(
            apiV1ConversationsPrivateReply429Error1Value);
        else if (TryGetApiV1ConversationsPrivateReply500Error1(
            out var apiV1ConversationsPrivateReply500Error1Value)) onApiV1ConversationsPrivateReply500Error1(
            apiV1ConversationsPrivateReply500Error1Value);
        else if (TryGetApiV1ConversationsPrivateReply502Error1(
            out var apiV1ConversationsPrivateReply502Error1Value)) onApiV1ConversationsPrivateReply502Error1(
            apiV1ConversationsPrivateReply502Error1Value);
        else if (TryGetApiV1ConversationsPrivateReply503Error1(
            out var apiV1ConversationsPrivateReply503Error1Value)) onApiV1ConversationsPrivateReply503Error1(
            apiV1ConversationsPrivateReply503Error1Value);
        else if (TryGetApiV1ConversationsPrivateReply504Error1(
            out var apiV1ConversationsPrivateReply504Error1Value)) onApiV1ConversationsPrivateReply504Error1(
            apiV1ConversationsPrivateReply504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ConversationPrivateReplyError)} holds no value.");
    }

    private static Task<ConversationPrivateReplyError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1ConversationsPrivateReply400Error1>().As(
                AsApiV1ConversationsPrivateReply400Error1),
            401 => response.Json<ApiV1ConversationsPrivateReply401Error1>().As(
                AsApiV1ConversationsPrivateReply401Error1),
            403 => response.Json<ApiV1ConversationsPrivateReply403Error1>().As(
                AsApiV1ConversationsPrivateReply403Error1),
            404 => response.Json<ApiV1ConversationsPrivateReply404Error1>().As(
                AsApiV1ConversationsPrivateReply404Error1),
            429 => response.Json<ApiV1ConversationsPrivateReply429Error1>().As(
                AsApiV1ConversationsPrivateReply429Error1),
            500 => response.Json<ApiV1ConversationsPrivateReply500Error1>().As(
                AsApiV1ConversationsPrivateReply500Error1),
            502 => response.Json<ApiV1ConversationsPrivateReply502Error1>().As(
                AsApiV1ConversationsPrivateReply502Error1),
            503 => response.Json<ApiV1ConversationsPrivateReply503Error1>().As(
                AsApiV1ConversationsPrivateReply503Error1),
            504 => response.Json<ApiV1ConversationsPrivateReply504Error1>().As(
                AsApiV1ConversationsPrivateReply504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ConversationPrivateReplyError> Response { get; } = new(Create);
}
