using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class ConversationMarkReadError : ApiError
{
    private readonly Optional<ApiV1ConversationsRead400Error1> _apiV1ConversationsRead400Error1Value;

    private readonly Optional<ApiV1ConversationsRead401Error1> _apiV1ConversationsRead401Error1Value;

    private readonly Optional<ApiV1ConversationsRead403Error1> _apiV1ConversationsRead403Error1Value;

    private readonly Optional<ApiV1ConversationsRead404Error1> _apiV1ConversationsRead404Error1Value;

    private readonly Optional<ApiV1ConversationsRead429Error1> _apiV1ConversationsRead429Error1Value;

    private readonly Optional<ApiV1ConversationsRead500Error1> _apiV1ConversationsRead500Error1Value;

    private readonly Optional<ApiV1ConversationsRead502Error1> _apiV1ConversationsRead502Error1Value;

    private readonly Optional<ApiV1ConversationsRead503Error1> _apiV1ConversationsRead503Error1Value;

    private readonly Optional<ApiV1ConversationsRead504Error1> _apiV1ConversationsRead504Error1Value;

    private ConversationMarkReadError(Optional<ApiV1ConversationsRead400Error1> apiV1ConversationsRead400Error1Value,
        Optional<ApiV1ConversationsRead401Error1> apiV1ConversationsRead401Error1Value,
        Optional<ApiV1ConversationsRead403Error1> apiV1ConversationsRead403Error1Value,
        Optional<ApiV1ConversationsRead404Error1> apiV1ConversationsRead404Error1Value,
        Optional<ApiV1ConversationsRead429Error1> apiV1ConversationsRead429Error1Value,
        Optional<ApiV1ConversationsRead500Error1> apiV1ConversationsRead500Error1Value,
        Optional<ApiV1ConversationsRead502Error1> apiV1ConversationsRead502Error1Value,
        Optional<ApiV1ConversationsRead503Error1> apiV1ConversationsRead503Error1Value,
        Optional<ApiV1ConversationsRead504Error1> apiV1ConversationsRead504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1ConversationsRead400Error1Value = apiV1ConversationsRead400Error1Value;
        _apiV1ConversationsRead401Error1Value = apiV1ConversationsRead401Error1Value;
        _apiV1ConversationsRead403Error1Value = apiV1ConversationsRead403Error1Value;
        _apiV1ConversationsRead404Error1Value = apiV1ConversationsRead404Error1Value;
        _apiV1ConversationsRead429Error1Value = apiV1ConversationsRead429Error1Value;
        _apiV1ConversationsRead500Error1Value = apiV1ConversationsRead500Error1Value;
        _apiV1ConversationsRead502Error1Value = apiV1ConversationsRead502Error1Value;
        _apiV1ConversationsRead503Error1Value = apiV1ConversationsRead503Error1Value;
        _apiV1ConversationsRead504Error1Value = apiV1ConversationsRead504Error1Value;
    }

    private static ConversationMarkReadError AsApiV1ConversationsRead400Error1(ApiV1ConversationsRead400Error1 value) =>
        new(
            Optional<ApiV1ConversationsRead400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationMarkReadError AsApiV1ConversationsRead401Error1(ApiV1ConversationsRead401Error1 value) =>
        new(
            default,
            Optional<ApiV1ConversationsRead401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationMarkReadError AsApiV1ConversationsRead403Error1(ApiV1ConversationsRead403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1ConversationsRead403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationMarkReadError AsApiV1ConversationsRead404Error1(ApiV1ConversationsRead404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1ConversationsRead404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationMarkReadError AsApiV1ConversationsRead429Error1(ApiV1ConversationsRead429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsRead429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static ConversationMarkReadError AsApiV1ConversationsRead500Error1(ApiV1ConversationsRead500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsRead500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static ConversationMarkReadError AsApiV1ConversationsRead502Error1(ApiV1ConversationsRead502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsRead502Error1>.Some(value),
            default,
            default,
            default);

    private static ConversationMarkReadError AsApiV1ConversationsRead503Error1(ApiV1ConversationsRead503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsRead503Error1>.Some(value),
            default,
            default);

    private static ConversationMarkReadError AsApiV1ConversationsRead504Error1(ApiV1ConversationsRead504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsRead504Error1>.Some(value),
            default);

    private static ConversationMarkReadError AsFallback(RawError value) =>
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

    public bool TryGetApiV1ConversationsRead400Error1([NotNullWhen(true)] out ApiV1ConversationsRead400Error1? value) =>
        _apiV1ConversationsRead400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsRead401Error1([NotNullWhen(true)] out ApiV1ConversationsRead401Error1? value) =>
        _apiV1ConversationsRead401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsRead403Error1([NotNullWhen(true)] out ApiV1ConversationsRead403Error1? value) =>
        _apiV1ConversationsRead403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsRead404Error1([NotNullWhen(true)] out ApiV1ConversationsRead404Error1? value) =>
        _apiV1ConversationsRead404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsRead429Error1([NotNullWhen(true)] out ApiV1ConversationsRead429Error1? value) =>
        _apiV1ConversationsRead429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsRead500Error1([NotNullWhen(true)] out ApiV1ConversationsRead500Error1? value) =>
        _apiV1ConversationsRead500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsRead502Error1([NotNullWhen(true)] out ApiV1ConversationsRead502Error1? value) =>
        _apiV1ConversationsRead502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsRead503Error1([NotNullWhen(true)] out ApiV1ConversationsRead503Error1? value) =>
        _apiV1ConversationsRead503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsRead504Error1([NotNullWhen(true)] out ApiV1ConversationsRead504Error1? value) =>
        _apiV1ConversationsRead504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1ConversationsRead400Error1, TResult> onApiV1ConversationsRead400Error1,
        Func<ApiV1ConversationsRead401Error1, TResult> onApiV1ConversationsRead401Error1,
        Func<ApiV1ConversationsRead403Error1, TResult> onApiV1ConversationsRead403Error1,
        Func<ApiV1ConversationsRead404Error1, TResult> onApiV1ConversationsRead404Error1,
        Func<ApiV1ConversationsRead429Error1, TResult> onApiV1ConversationsRead429Error1,
        Func<ApiV1ConversationsRead500Error1, TResult> onApiV1ConversationsRead500Error1,
        Func<ApiV1ConversationsRead502Error1, TResult> onApiV1ConversationsRead502Error1,
        Func<ApiV1ConversationsRead503Error1, TResult> onApiV1ConversationsRead503Error1,
        Func<ApiV1ConversationsRead504Error1, TResult> onApiV1ConversationsRead504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1ConversationsRead400Error1(
                out var apiV1ConversationsRead400Error1Value) => onApiV1ConversationsRead400Error1(
                apiV1ConversationsRead400Error1Value),
            _ when TryGetApiV1ConversationsRead401Error1(
                out var apiV1ConversationsRead401Error1Value) => onApiV1ConversationsRead401Error1(
                apiV1ConversationsRead401Error1Value),
            _ when TryGetApiV1ConversationsRead403Error1(
                out var apiV1ConversationsRead403Error1Value) => onApiV1ConversationsRead403Error1(
                apiV1ConversationsRead403Error1Value),
            _ when TryGetApiV1ConversationsRead404Error1(
                out var apiV1ConversationsRead404Error1Value) => onApiV1ConversationsRead404Error1(
                apiV1ConversationsRead404Error1Value),
            _ when TryGetApiV1ConversationsRead429Error1(
                out var apiV1ConversationsRead429Error1Value) => onApiV1ConversationsRead429Error1(
                apiV1ConversationsRead429Error1Value),
            _ when TryGetApiV1ConversationsRead500Error1(
                out var apiV1ConversationsRead500Error1Value) => onApiV1ConversationsRead500Error1(
                apiV1ConversationsRead500Error1Value),
            _ when TryGetApiV1ConversationsRead502Error1(
                out var apiV1ConversationsRead502Error1Value) => onApiV1ConversationsRead502Error1(
                apiV1ConversationsRead502Error1Value),
            _ when TryGetApiV1ConversationsRead503Error1(
                out var apiV1ConversationsRead503Error1Value) => onApiV1ConversationsRead503Error1(
                apiV1ConversationsRead503Error1Value),
            _ when TryGetApiV1ConversationsRead504Error1(
                out var apiV1ConversationsRead504Error1Value) => onApiV1ConversationsRead504Error1(
                apiV1ConversationsRead504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ConversationMarkReadError)} holds no value.")
        };

    public void Match(Action<ApiV1ConversationsRead400Error1> onApiV1ConversationsRead400Error1,
        Action<ApiV1ConversationsRead401Error1> onApiV1ConversationsRead401Error1,
        Action<ApiV1ConversationsRead403Error1> onApiV1ConversationsRead403Error1,
        Action<ApiV1ConversationsRead404Error1> onApiV1ConversationsRead404Error1,
        Action<ApiV1ConversationsRead429Error1> onApiV1ConversationsRead429Error1,
        Action<ApiV1ConversationsRead500Error1> onApiV1ConversationsRead500Error1,
        Action<ApiV1ConversationsRead502Error1> onApiV1ConversationsRead502Error1,
        Action<ApiV1ConversationsRead503Error1> onApiV1ConversationsRead503Error1,
        Action<ApiV1ConversationsRead504Error1> onApiV1ConversationsRead504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1ConversationsRead400Error1(
            out var apiV1ConversationsRead400Error1Value)) onApiV1ConversationsRead400Error1(
            apiV1ConversationsRead400Error1Value);
        else if (TryGetApiV1ConversationsRead401Error1(
            out var apiV1ConversationsRead401Error1Value)) onApiV1ConversationsRead401Error1(
            apiV1ConversationsRead401Error1Value);
        else if (TryGetApiV1ConversationsRead403Error1(
            out var apiV1ConversationsRead403Error1Value)) onApiV1ConversationsRead403Error1(
            apiV1ConversationsRead403Error1Value);
        else if (TryGetApiV1ConversationsRead404Error1(
            out var apiV1ConversationsRead404Error1Value)) onApiV1ConversationsRead404Error1(
            apiV1ConversationsRead404Error1Value);
        else if (TryGetApiV1ConversationsRead429Error1(
            out var apiV1ConversationsRead429Error1Value)) onApiV1ConversationsRead429Error1(
            apiV1ConversationsRead429Error1Value);
        else if (TryGetApiV1ConversationsRead500Error1(
            out var apiV1ConversationsRead500Error1Value)) onApiV1ConversationsRead500Error1(
            apiV1ConversationsRead500Error1Value);
        else if (TryGetApiV1ConversationsRead502Error1(
            out var apiV1ConversationsRead502Error1Value)) onApiV1ConversationsRead502Error1(
            apiV1ConversationsRead502Error1Value);
        else if (TryGetApiV1ConversationsRead503Error1(
            out var apiV1ConversationsRead503Error1Value)) onApiV1ConversationsRead503Error1(
            apiV1ConversationsRead503Error1Value);
        else if (TryGetApiV1ConversationsRead504Error1(
            out var apiV1ConversationsRead504Error1Value)) onApiV1ConversationsRead504Error1(
            apiV1ConversationsRead504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ConversationMarkReadError)} holds no value.");
    }

    private static Task<ConversationMarkReadError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1ConversationsRead400Error1>().As(AsApiV1ConversationsRead400Error1),
            401 => response.Json<ApiV1ConversationsRead401Error1>().As(AsApiV1ConversationsRead401Error1),
            403 => response.Json<ApiV1ConversationsRead403Error1>().As(AsApiV1ConversationsRead403Error1),
            404 => response.Json<ApiV1ConversationsRead404Error1>().As(AsApiV1ConversationsRead404Error1),
            429 => response.Json<ApiV1ConversationsRead429Error1>().As(AsApiV1ConversationsRead429Error1),
            500 => response.Json<ApiV1ConversationsRead500Error1>().As(AsApiV1ConversationsRead500Error1),
            502 => response.Json<ApiV1ConversationsRead502Error1>().As(AsApiV1ConversationsRead502Error1),
            503 => response.Json<ApiV1ConversationsRead503Error1>().As(AsApiV1ConversationsRead503Error1),
            504 => response.Json<ApiV1ConversationsRead504Error1>().As(AsApiV1ConversationsRead504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ConversationMarkReadError> Response { get; } = new(Create);
}
