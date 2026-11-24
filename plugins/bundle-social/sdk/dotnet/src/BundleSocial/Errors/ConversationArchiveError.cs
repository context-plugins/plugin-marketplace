using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class ConversationArchiveError : ApiError
{
    private readonly Optional<ApiV1ConversationsArchive400Error1> _apiV1ConversationsArchive400Error1Value;

    private readonly Optional<ApiV1ConversationsArchive401Error1> _apiV1ConversationsArchive401Error1Value;

    private readonly Optional<ApiV1ConversationsArchive403Error1> _apiV1ConversationsArchive403Error1Value;

    private readonly Optional<ApiV1ConversationsArchive404Error1> _apiV1ConversationsArchive404Error1Value;

    private readonly Optional<ApiV1ConversationsArchive429Error1> _apiV1ConversationsArchive429Error1Value;

    private readonly Optional<ApiV1ConversationsArchive500Error1> _apiV1ConversationsArchive500Error1Value;

    private readonly Optional<ApiV1ConversationsArchive502Error1> _apiV1ConversationsArchive502Error1Value;

    private readonly Optional<ApiV1ConversationsArchive503Error1> _apiV1ConversationsArchive503Error1Value;

    private readonly Optional<ApiV1ConversationsArchive504Error1> _apiV1ConversationsArchive504Error1Value;

    private ConversationArchiveError(Optional<ApiV1ConversationsArchive400Error1> apiV1ConversationsArchive400Error1Value,
        Optional<ApiV1ConversationsArchive401Error1> apiV1ConversationsArchive401Error1Value,
        Optional<ApiV1ConversationsArchive403Error1> apiV1ConversationsArchive403Error1Value,
        Optional<ApiV1ConversationsArchive404Error1> apiV1ConversationsArchive404Error1Value,
        Optional<ApiV1ConversationsArchive429Error1> apiV1ConversationsArchive429Error1Value,
        Optional<ApiV1ConversationsArchive500Error1> apiV1ConversationsArchive500Error1Value,
        Optional<ApiV1ConversationsArchive502Error1> apiV1ConversationsArchive502Error1Value,
        Optional<ApiV1ConversationsArchive503Error1> apiV1ConversationsArchive503Error1Value,
        Optional<ApiV1ConversationsArchive504Error1> apiV1ConversationsArchive504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1ConversationsArchive400Error1Value = apiV1ConversationsArchive400Error1Value;
        _apiV1ConversationsArchive401Error1Value = apiV1ConversationsArchive401Error1Value;
        _apiV1ConversationsArchive403Error1Value = apiV1ConversationsArchive403Error1Value;
        _apiV1ConversationsArchive404Error1Value = apiV1ConversationsArchive404Error1Value;
        _apiV1ConversationsArchive429Error1Value = apiV1ConversationsArchive429Error1Value;
        _apiV1ConversationsArchive500Error1Value = apiV1ConversationsArchive500Error1Value;
        _apiV1ConversationsArchive502Error1Value = apiV1ConversationsArchive502Error1Value;
        _apiV1ConversationsArchive503Error1Value = apiV1ConversationsArchive503Error1Value;
        _apiV1ConversationsArchive504Error1Value = apiV1ConversationsArchive504Error1Value;
    }

    private static ConversationArchiveError AsApiV1ConversationsArchive400Error1(ApiV1ConversationsArchive400Error1 value) =>
        new(
            Optional<ApiV1ConversationsArchive400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationArchiveError AsApiV1ConversationsArchive401Error1(ApiV1ConversationsArchive401Error1 value) =>
        new(
            default,
            Optional<ApiV1ConversationsArchive401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationArchiveError AsApiV1ConversationsArchive403Error1(ApiV1ConversationsArchive403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1ConversationsArchive403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationArchiveError AsApiV1ConversationsArchive404Error1(ApiV1ConversationsArchive404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1ConversationsArchive404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static ConversationArchiveError AsApiV1ConversationsArchive429Error1(ApiV1ConversationsArchive429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsArchive429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static ConversationArchiveError AsApiV1ConversationsArchive500Error1(ApiV1ConversationsArchive500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsArchive500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static ConversationArchiveError AsApiV1ConversationsArchive502Error1(ApiV1ConversationsArchive502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsArchive502Error1>.Some(value),
            default,
            default,
            default);

    private static ConversationArchiveError AsApiV1ConversationsArchive503Error1(ApiV1ConversationsArchive503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsArchive503Error1>.Some(value),
            default,
            default);

    private static ConversationArchiveError AsApiV1ConversationsArchive504Error1(ApiV1ConversationsArchive504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1ConversationsArchive504Error1>.Some(value),
            default);

    private static ConversationArchiveError AsFallback(RawError value) =>
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

    public bool TryGetApiV1ConversationsArchive400Error1([NotNullWhen(true)] out ApiV1ConversationsArchive400Error1? value) =>
        _apiV1ConversationsArchive400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsArchive401Error1([NotNullWhen(true)] out ApiV1ConversationsArchive401Error1? value) =>
        _apiV1ConversationsArchive401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsArchive403Error1([NotNullWhen(true)] out ApiV1ConversationsArchive403Error1? value) =>
        _apiV1ConversationsArchive403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsArchive404Error1([NotNullWhen(true)] out ApiV1ConversationsArchive404Error1? value) =>
        _apiV1ConversationsArchive404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsArchive429Error1([NotNullWhen(true)] out ApiV1ConversationsArchive429Error1? value) =>
        _apiV1ConversationsArchive429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsArchive500Error1([NotNullWhen(true)] out ApiV1ConversationsArchive500Error1? value) =>
        _apiV1ConversationsArchive500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsArchive502Error1([NotNullWhen(true)] out ApiV1ConversationsArchive502Error1? value) =>
        _apiV1ConversationsArchive502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsArchive503Error1([NotNullWhen(true)] out ApiV1ConversationsArchive503Error1? value) =>
        _apiV1ConversationsArchive503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1ConversationsArchive504Error1([NotNullWhen(true)] out ApiV1ConversationsArchive504Error1? value) =>
        _apiV1ConversationsArchive504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1ConversationsArchive400Error1, TResult> onApiV1ConversationsArchive400Error1,
        Func<ApiV1ConversationsArchive401Error1, TResult> onApiV1ConversationsArchive401Error1,
        Func<ApiV1ConversationsArchive403Error1, TResult> onApiV1ConversationsArchive403Error1,
        Func<ApiV1ConversationsArchive404Error1, TResult> onApiV1ConversationsArchive404Error1,
        Func<ApiV1ConversationsArchive429Error1, TResult> onApiV1ConversationsArchive429Error1,
        Func<ApiV1ConversationsArchive500Error1, TResult> onApiV1ConversationsArchive500Error1,
        Func<ApiV1ConversationsArchive502Error1, TResult> onApiV1ConversationsArchive502Error1,
        Func<ApiV1ConversationsArchive503Error1, TResult> onApiV1ConversationsArchive503Error1,
        Func<ApiV1ConversationsArchive504Error1, TResult> onApiV1ConversationsArchive504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1ConversationsArchive400Error1(
                out var apiV1ConversationsArchive400Error1Value) => onApiV1ConversationsArchive400Error1(
                apiV1ConversationsArchive400Error1Value),
            _ when TryGetApiV1ConversationsArchive401Error1(
                out var apiV1ConversationsArchive401Error1Value) => onApiV1ConversationsArchive401Error1(
                apiV1ConversationsArchive401Error1Value),
            _ when TryGetApiV1ConversationsArchive403Error1(
                out var apiV1ConversationsArchive403Error1Value) => onApiV1ConversationsArchive403Error1(
                apiV1ConversationsArchive403Error1Value),
            _ when TryGetApiV1ConversationsArchive404Error1(
                out var apiV1ConversationsArchive404Error1Value) => onApiV1ConversationsArchive404Error1(
                apiV1ConversationsArchive404Error1Value),
            _ when TryGetApiV1ConversationsArchive429Error1(
                out var apiV1ConversationsArchive429Error1Value) => onApiV1ConversationsArchive429Error1(
                apiV1ConversationsArchive429Error1Value),
            _ when TryGetApiV1ConversationsArchive500Error1(
                out var apiV1ConversationsArchive500Error1Value) => onApiV1ConversationsArchive500Error1(
                apiV1ConversationsArchive500Error1Value),
            _ when TryGetApiV1ConversationsArchive502Error1(
                out var apiV1ConversationsArchive502Error1Value) => onApiV1ConversationsArchive502Error1(
                apiV1ConversationsArchive502Error1Value),
            _ when TryGetApiV1ConversationsArchive503Error1(
                out var apiV1ConversationsArchive503Error1Value) => onApiV1ConversationsArchive503Error1(
                apiV1ConversationsArchive503Error1Value),
            _ when TryGetApiV1ConversationsArchive504Error1(
                out var apiV1ConversationsArchive504Error1Value) => onApiV1ConversationsArchive504Error1(
                apiV1ConversationsArchive504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ConversationArchiveError)} holds no value.")
        };

    public void Match(Action<ApiV1ConversationsArchive400Error1> onApiV1ConversationsArchive400Error1,
        Action<ApiV1ConversationsArchive401Error1> onApiV1ConversationsArchive401Error1,
        Action<ApiV1ConversationsArchive403Error1> onApiV1ConversationsArchive403Error1,
        Action<ApiV1ConversationsArchive404Error1> onApiV1ConversationsArchive404Error1,
        Action<ApiV1ConversationsArchive429Error1> onApiV1ConversationsArchive429Error1,
        Action<ApiV1ConversationsArchive500Error1> onApiV1ConversationsArchive500Error1,
        Action<ApiV1ConversationsArchive502Error1> onApiV1ConversationsArchive502Error1,
        Action<ApiV1ConversationsArchive503Error1> onApiV1ConversationsArchive503Error1,
        Action<ApiV1ConversationsArchive504Error1> onApiV1ConversationsArchive504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1ConversationsArchive400Error1(
            out var apiV1ConversationsArchive400Error1Value)) onApiV1ConversationsArchive400Error1(
            apiV1ConversationsArchive400Error1Value);
        else if (TryGetApiV1ConversationsArchive401Error1(
            out var apiV1ConversationsArchive401Error1Value)) onApiV1ConversationsArchive401Error1(
            apiV1ConversationsArchive401Error1Value);
        else if (TryGetApiV1ConversationsArchive403Error1(
            out var apiV1ConversationsArchive403Error1Value)) onApiV1ConversationsArchive403Error1(
            apiV1ConversationsArchive403Error1Value);
        else if (TryGetApiV1ConversationsArchive404Error1(
            out var apiV1ConversationsArchive404Error1Value)) onApiV1ConversationsArchive404Error1(
            apiV1ConversationsArchive404Error1Value);
        else if (TryGetApiV1ConversationsArchive429Error1(
            out var apiV1ConversationsArchive429Error1Value)) onApiV1ConversationsArchive429Error1(
            apiV1ConversationsArchive429Error1Value);
        else if (TryGetApiV1ConversationsArchive500Error1(
            out var apiV1ConversationsArchive500Error1Value)) onApiV1ConversationsArchive500Error1(
            apiV1ConversationsArchive500Error1Value);
        else if (TryGetApiV1ConversationsArchive502Error1(
            out var apiV1ConversationsArchive502Error1Value)) onApiV1ConversationsArchive502Error1(
            apiV1ConversationsArchive502Error1Value);
        else if (TryGetApiV1ConversationsArchive503Error1(
            out var apiV1ConversationsArchive503Error1Value)) onApiV1ConversationsArchive503Error1(
            apiV1ConversationsArchive503Error1Value);
        else if (TryGetApiV1ConversationsArchive504Error1(
            out var apiV1ConversationsArchive504Error1Value)) onApiV1ConversationsArchive504Error1(
            apiV1ConversationsArchive504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ConversationArchiveError)} holds no value.");
    }

    private static Task<ConversationArchiveError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1ConversationsArchive400Error1>().As(AsApiV1ConversationsArchive400Error1),
            401 => response.Json<ApiV1ConversationsArchive401Error1>().As(AsApiV1ConversationsArchive401Error1),
            403 => response.Json<ApiV1ConversationsArchive403Error1>().As(AsApiV1ConversationsArchive403Error1),
            404 => response.Json<ApiV1ConversationsArchive404Error1>().As(AsApiV1ConversationsArchive404Error1),
            429 => response.Json<ApiV1ConversationsArchive429Error1>().As(AsApiV1ConversationsArchive429Error1),
            500 => response.Json<ApiV1ConversationsArchive500Error1>().As(AsApiV1ConversationsArchive500Error1),
            502 => response.Json<ApiV1ConversationsArchive502Error1>().As(AsApiV1ConversationsArchive502Error1),
            503 => response.Json<ApiV1ConversationsArchive503Error1>().As(AsApiV1ConversationsArchive503Error1),
            504 => response.Json<ApiV1ConversationsArchive504Error1>().As(AsApiV1ConversationsArchive504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ConversationArchiveError> Response { get; } = new(Create);
}
