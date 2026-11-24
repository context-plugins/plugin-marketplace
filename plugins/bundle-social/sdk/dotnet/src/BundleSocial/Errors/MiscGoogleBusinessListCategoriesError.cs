using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscGoogleBusinessListCategoriesError : ApiError
{
    private readonly Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1> _apiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1> _apiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1> _apiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1> _apiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1> _apiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1> _apiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1> _apiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1> _apiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1> _apiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1Value;

    private MiscGoogleBusinessListCategoriesError(Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1> apiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1> apiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1> apiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1> apiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1> apiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1> apiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1> apiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1> apiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1> apiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1Value =
            apiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1Value;
        _apiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1Value =
            apiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1Value;
        _apiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1Value =
            apiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1Value;
        _apiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1Value =
            apiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1Value;
        _apiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1Value =
            apiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1Value;
        _apiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1Value =
            apiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1Value;
        _apiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1Value =
            apiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1Value;
        _apiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1Value =
            apiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1Value;
        _apiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1Value =
            apiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1Value;
    }

    private static MiscGoogleBusinessListCategoriesError AsApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1(ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1 value) =>
        new(
            Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessListCategoriesError AsApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1(ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessListCategoriesError AsApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1(ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessListCategoriesError AsApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1(ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessListCategoriesError AsApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1(ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessListCategoriesError AsApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1(ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessListCategoriesError AsApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1(ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscGoogleBusinessListCategoriesError AsApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1(ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1>.Some(value),
            default,
            default);

    private static MiscGoogleBusinessListCategoriesError AsApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1(ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1>.Some(value),
            default);

    private static MiscGoogleBusinessListCategoriesError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1? value) =>
        _apiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1? value) =>
        _apiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1? value) =>
        _apiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1? value) =>
        _apiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1? value) =>
        _apiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1? value) =>
        _apiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1? value) =>
        _apiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1? value) =>
        _apiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1? value) =>
        _apiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1, TResult> onApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1,
        Func<ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1, TResult> onApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1,
        Func<ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1, TResult> onApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1,
        Func<ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1, TResult> onApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1,
        Func<ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1, TResult> onApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1,
        Func<ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1, TResult> onApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1,
        Func<ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1, TResult> onApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1,
        Func<ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1, TResult> onApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1,
        Func<ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1, TResult> onApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1(
                out var apiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1Value) => onApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1(
                apiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1(
                out var apiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1Value) => onApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1(
                apiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1(
                out var apiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1Value) => onApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1(
                apiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1(
                out var apiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1Value) => onApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1(
                apiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1(
                out var apiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1Value) => onApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1(
                apiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1(
                out var apiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1Value) => onApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1(
                apiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1(
                out var apiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1Value) => onApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1(
                apiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1(
                out var apiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1Value) => onApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1(
                apiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1(
                out var apiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1Value) => onApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1(
                apiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(MiscGoogleBusinessListCategoriesError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1> onApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1,
        Action<ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1> onApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1,
        Action<ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1> onApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1,
        Action<ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1> onApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1,
        Action<ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1> onApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1,
        Action<ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1> onApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1,
        Action<ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1> onApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1,
        Action<ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1> onApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1,
        Action<ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1> onApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1(
            out var apiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1Value)) onApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1(
            apiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1(
            out var apiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1Value)) onApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1(
            apiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1(
            out var apiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1Value)) onApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1(
            apiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1(
            out var apiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1Value)) onApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1(
            apiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1(
            out var apiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1Value)) onApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1(
            apiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1(
            out var apiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1Value)) onApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1(
            apiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1(
            out var apiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1Value)) onApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1(
            apiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1(
            out var apiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1Value)) onApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1(
            apiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1(
            out var apiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1Value)) onApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1(
            apiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscGoogleBusinessListCategoriesError)} holds no value.");
    }

    private static Task<MiscGoogleBusinessListCategoriesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1>().As(
                AsApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1),
            401 => response.Json<ApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1>().As(
                AsApiV1MiscGoogleBusinessLocationCategoriesAvailable401Error1),
            403 => response.Json<ApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1>().As(
                AsApiV1MiscGoogleBusinessLocationCategoriesAvailable403Error1),
            404 => response.Json<ApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1>().As(
                AsApiV1MiscGoogleBusinessLocationCategoriesAvailable404Error1),
            429 => response.Json<ApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1>().As(
                AsApiV1MiscGoogleBusinessLocationCategoriesAvailable429Error1),
            500 => response.Json<ApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1>().As(
                AsApiV1MiscGoogleBusinessLocationCategoriesAvailable500Error1),
            502 => response.Json<ApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1>().As(
                AsApiV1MiscGoogleBusinessLocationCategoriesAvailable502Error1),
            503 => response.Json<ApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1>().As(
                AsApiV1MiscGoogleBusinessLocationCategoriesAvailable503Error1),
            504 => response.Json<ApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1>().As(
                AsApiV1MiscGoogleBusinessLocationCategoriesAvailable504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscGoogleBusinessListCategoriesError> Response { get; } = new(Create);
}
