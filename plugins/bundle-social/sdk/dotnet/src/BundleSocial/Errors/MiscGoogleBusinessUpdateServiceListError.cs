using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscGoogleBusinessUpdateServiceListError : ApiError
{
    private readonly Optional<ApiV1MiscGoogleBusinessLocationServiceList400Error1> _apiV1MiscGoogleBusinessLocationServiceList400Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationServiceList401Error1> _apiV1MiscGoogleBusinessLocationServiceList401Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationServiceList403Error1> _apiV1MiscGoogleBusinessLocationServiceList403Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationServiceList404Error1> _apiV1MiscGoogleBusinessLocationServiceList404Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationServiceList429Error1> _apiV1MiscGoogleBusinessLocationServiceList429Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationServiceList500Error1> _apiV1MiscGoogleBusinessLocationServiceList500Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationServiceList502Error1> _apiV1MiscGoogleBusinessLocationServiceList502Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationServiceList503Error1> _apiV1MiscGoogleBusinessLocationServiceList503Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationServiceList504Error1> _apiV1MiscGoogleBusinessLocationServiceList504Error1Value;

    private MiscGoogleBusinessUpdateServiceListError(Optional<ApiV1MiscGoogleBusinessLocationServiceList400Error1> apiV1MiscGoogleBusinessLocationServiceList400Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationServiceList401Error1> apiV1MiscGoogleBusinessLocationServiceList401Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationServiceList403Error1> apiV1MiscGoogleBusinessLocationServiceList403Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationServiceList404Error1> apiV1MiscGoogleBusinessLocationServiceList404Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationServiceList429Error1> apiV1MiscGoogleBusinessLocationServiceList429Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationServiceList500Error1> apiV1MiscGoogleBusinessLocationServiceList500Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationServiceList502Error1> apiV1MiscGoogleBusinessLocationServiceList502Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationServiceList503Error1> apiV1MiscGoogleBusinessLocationServiceList503Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationServiceList504Error1> apiV1MiscGoogleBusinessLocationServiceList504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscGoogleBusinessLocationServiceList400Error1Value =
            apiV1MiscGoogleBusinessLocationServiceList400Error1Value;
        _apiV1MiscGoogleBusinessLocationServiceList401Error1Value =
            apiV1MiscGoogleBusinessLocationServiceList401Error1Value;
        _apiV1MiscGoogleBusinessLocationServiceList403Error1Value =
            apiV1MiscGoogleBusinessLocationServiceList403Error1Value;
        _apiV1MiscGoogleBusinessLocationServiceList404Error1Value =
            apiV1MiscGoogleBusinessLocationServiceList404Error1Value;
        _apiV1MiscGoogleBusinessLocationServiceList429Error1Value =
            apiV1MiscGoogleBusinessLocationServiceList429Error1Value;
        _apiV1MiscGoogleBusinessLocationServiceList500Error1Value =
            apiV1MiscGoogleBusinessLocationServiceList500Error1Value;
        _apiV1MiscGoogleBusinessLocationServiceList502Error1Value =
            apiV1MiscGoogleBusinessLocationServiceList502Error1Value;
        _apiV1MiscGoogleBusinessLocationServiceList503Error1Value =
            apiV1MiscGoogleBusinessLocationServiceList503Error1Value;
        _apiV1MiscGoogleBusinessLocationServiceList504Error1Value =
            apiV1MiscGoogleBusinessLocationServiceList504Error1Value;
    }

    private static MiscGoogleBusinessUpdateServiceListError AsApiV1MiscGoogleBusinessLocationServiceList400Error1(ApiV1MiscGoogleBusinessLocationServiceList400Error1 value) =>
        new(
            Optional<ApiV1MiscGoogleBusinessLocationServiceList400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateServiceListError AsApiV1MiscGoogleBusinessLocationServiceList401Error1(ApiV1MiscGoogleBusinessLocationServiceList401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscGoogleBusinessLocationServiceList401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateServiceListError AsApiV1MiscGoogleBusinessLocationServiceList403Error1(ApiV1MiscGoogleBusinessLocationServiceList403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationServiceList403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateServiceListError AsApiV1MiscGoogleBusinessLocationServiceList404Error1(ApiV1MiscGoogleBusinessLocationServiceList404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationServiceList404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateServiceListError AsApiV1MiscGoogleBusinessLocationServiceList429Error1(ApiV1MiscGoogleBusinessLocationServiceList429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationServiceList429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateServiceListError AsApiV1MiscGoogleBusinessLocationServiceList500Error1(ApiV1MiscGoogleBusinessLocationServiceList500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationServiceList500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateServiceListError AsApiV1MiscGoogleBusinessLocationServiceList502Error1(ApiV1MiscGoogleBusinessLocationServiceList502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationServiceList502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateServiceListError AsApiV1MiscGoogleBusinessLocationServiceList503Error1(ApiV1MiscGoogleBusinessLocationServiceList503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationServiceList503Error1>.Some(value),
            default,
            default);

    private static MiscGoogleBusinessUpdateServiceListError AsApiV1MiscGoogleBusinessLocationServiceList504Error1(ApiV1MiscGoogleBusinessLocationServiceList504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationServiceList504Error1>.Some(value),
            default);

    private static MiscGoogleBusinessUpdateServiceListError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscGoogleBusinessLocationServiceList400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList400Error1? value) =>
        _apiV1MiscGoogleBusinessLocationServiceList400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationServiceList401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList401Error1? value) =>
        _apiV1MiscGoogleBusinessLocationServiceList401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationServiceList403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList403Error1? value) =>
        _apiV1MiscGoogleBusinessLocationServiceList403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationServiceList404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList404Error1? value) =>
        _apiV1MiscGoogleBusinessLocationServiceList404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationServiceList429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList429Error1? value) =>
        _apiV1MiscGoogleBusinessLocationServiceList429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationServiceList500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList500Error1? value) =>
        _apiV1MiscGoogleBusinessLocationServiceList500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationServiceList502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList502Error1? value) =>
        _apiV1MiscGoogleBusinessLocationServiceList502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationServiceList503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList503Error1? value) =>
        _apiV1MiscGoogleBusinessLocationServiceList503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationServiceList504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationServiceList504Error1? value) =>
        _apiV1MiscGoogleBusinessLocationServiceList504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscGoogleBusinessLocationServiceList400Error1, TResult> onApiV1MiscGoogleBusinessLocationServiceList400Error1,
        Func<ApiV1MiscGoogleBusinessLocationServiceList401Error1, TResult> onApiV1MiscGoogleBusinessLocationServiceList401Error1,
        Func<ApiV1MiscGoogleBusinessLocationServiceList403Error1, TResult> onApiV1MiscGoogleBusinessLocationServiceList403Error1,
        Func<ApiV1MiscGoogleBusinessLocationServiceList404Error1, TResult> onApiV1MiscGoogleBusinessLocationServiceList404Error1,
        Func<ApiV1MiscGoogleBusinessLocationServiceList429Error1, TResult> onApiV1MiscGoogleBusinessLocationServiceList429Error1,
        Func<ApiV1MiscGoogleBusinessLocationServiceList500Error1, TResult> onApiV1MiscGoogleBusinessLocationServiceList500Error1,
        Func<ApiV1MiscGoogleBusinessLocationServiceList502Error1, TResult> onApiV1MiscGoogleBusinessLocationServiceList502Error1,
        Func<ApiV1MiscGoogleBusinessLocationServiceList503Error1, TResult> onApiV1MiscGoogleBusinessLocationServiceList503Error1,
        Func<ApiV1MiscGoogleBusinessLocationServiceList504Error1, TResult> onApiV1MiscGoogleBusinessLocationServiceList504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscGoogleBusinessLocationServiceList400Error1(
                out var apiV1MiscGoogleBusinessLocationServiceList400Error1Value) => onApiV1MiscGoogleBusinessLocationServiceList400Error1(
                apiV1MiscGoogleBusinessLocationServiceList400Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationServiceList401Error1(
                out var apiV1MiscGoogleBusinessLocationServiceList401Error1Value) => onApiV1MiscGoogleBusinessLocationServiceList401Error1(
                apiV1MiscGoogleBusinessLocationServiceList401Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationServiceList403Error1(
                out var apiV1MiscGoogleBusinessLocationServiceList403Error1Value) => onApiV1MiscGoogleBusinessLocationServiceList403Error1(
                apiV1MiscGoogleBusinessLocationServiceList403Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationServiceList404Error1(
                out var apiV1MiscGoogleBusinessLocationServiceList404Error1Value) => onApiV1MiscGoogleBusinessLocationServiceList404Error1(
                apiV1MiscGoogleBusinessLocationServiceList404Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationServiceList429Error1(
                out var apiV1MiscGoogleBusinessLocationServiceList429Error1Value) => onApiV1MiscGoogleBusinessLocationServiceList429Error1(
                apiV1MiscGoogleBusinessLocationServiceList429Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationServiceList500Error1(
                out var apiV1MiscGoogleBusinessLocationServiceList500Error1Value) => onApiV1MiscGoogleBusinessLocationServiceList500Error1(
                apiV1MiscGoogleBusinessLocationServiceList500Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationServiceList502Error1(
                out var apiV1MiscGoogleBusinessLocationServiceList502Error1Value) => onApiV1MiscGoogleBusinessLocationServiceList502Error1(
                apiV1MiscGoogleBusinessLocationServiceList502Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationServiceList503Error1(
                out var apiV1MiscGoogleBusinessLocationServiceList503Error1Value) => onApiV1MiscGoogleBusinessLocationServiceList503Error1(
                apiV1MiscGoogleBusinessLocationServiceList503Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationServiceList504Error1(
                out var apiV1MiscGoogleBusinessLocationServiceList504Error1Value) => onApiV1MiscGoogleBusinessLocationServiceList504Error1(
                apiV1MiscGoogleBusinessLocationServiceList504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(MiscGoogleBusinessUpdateServiceListError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscGoogleBusinessLocationServiceList400Error1> onApiV1MiscGoogleBusinessLocationServiceList400Error1,
        Action<ApiV1MiscGoogleBusinessLocationServiceList401Error1> onApiV1MiscGoogleBusinessLocationServiceList401Error1,
        Action<ApiV1MiscGoogleBusinessLocationServiceList403Error1> onApiV1MiscGoogleBusinessLocationServiceList403Error1,
        Action<ApiV1MiscGoogleBusinessLocationServiceList404Error1> onApiV1MiscGoogleBusinessLocationServiceList404Error1,
        Action<ApiV1MiscGoogleBusinessLocationServiceList429Error1> onApiV1MiscGoogleBusinessLocationServiceList429Error1,
        Action<ApiV1MiscGoogleBusinessLocationServiceList500Error1> onApiV1MiscGoogleBusinessLocationServiceList500Error1,
        Action<ApiV1MiscGoogleBusinessLocationServiceList502Error1> onApiV1MiscGoogleBusinessLocationServiceList502Error1,
        Action<ApiV1MiscGoogleBusinessLocationServiceList503Error1> onApiV1MiscGoogleBusinessLocationServiceList503Error1,
        Action<ApiV1MiscGoogleBusinessLocationServiceList504Error1> onApiV1MiscGoogleBusinessLocationServiceList504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscGoogleBusinessLocationServiceList400Error1(
            out var apiV1MiscGoogleBusinessLocationServiceList400Error1Value)) onApiV1MiscGoogleBusinessLocationServiceList400Error1(
            apiV1MiscGoogleBusinessLocationServiceList400Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationServiceList401Error1(
            out var apiV1MiscGoogleBusinessLocationServiceList401Error1Value)) onApiV1MiscGoogleBusinessLocationServiceList401Error1(
            apiV1MiscGoogleBusinessLocationServiceList401Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationServiceList403Error1(
            out var apiV1MiscGoogleBusinessLocationServiceList403Error1Value)) onApiV1MiscGoogleBusinessLocationServiceList403Error1(
            apiV1MiscGoogleBusinessLocationServiceList403Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationServiceList404Error1(
            out var apiV1MiscGoogleBusinessLocationServiceList404Error1Value)) onApiV1MiscGoogleBusinessLocationServiceList404Error1(
            apiV1MiscGoogleBusinessLocationServiceList404Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationServiceList429Error1(
            out var apiV1MiscGoogleBusinessLocationServiceList429Error1Value)) onApiV1MiscGoogleBusinessLocationServiceList429Error1(
            apiV1MiscGoogleBusinessLocationServiceList429Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationServiceList500Error1(
            out var apiV1MiscGoogleBusinessLocationServiceList500Error1Value)) onApiV1MiscGoogleBusinessLocationServiceList500Error1(
            apiV1MiscGoogleBusinessLocationServiceList500Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationServiceList502Error1(
            out var apiV1MiscGoogleBusinessLocationServiceList502Error1Value)) onApiV1MiscGoogleBusinessLocationServiceList502Error1(
            apiV1MiscGoogleBusinessLocationServiceList502Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationServiceList503Error1(
            out var apiV1MiscGoogleBusinessLocationServiceList503Error1Value)) onApiV1MiscGoogleBusinessLocationServiceList503Error1(
            apiV1MiscGoogleBusinessLocationServiceList503Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationServiceList504Error1(
            out var apiV1MiscGoogleBusinessLocationServiceList504Error1Value)) onApiV1MiscGoogleBusinessLocationServiceList504Error1(
            apiV1MiscGoogleBusinessLocationServiceList504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscGoogleBusinessUpdateServiceListError)} holds no value.");
    }

    private static Task<MiscGoogleBusinessUpdateServiceListError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscGoogleBusinessLocationServiceList400Error1>().As(
                AsApiV1MiscGoogleBusinessLocationServiceList400Error1),
            401 => response.Json<ApiV1MiscGoogleBusinessLocationServiceList401Error1>().As(
                AsApiV1MiscGoogleBusinessLocationServiceList401Error1),
            403 => response.Json<ApiV1MiscGoogleBusinessLocationServiceList403Error1>().As(
                AsApiV1MiscGoogleBusinessLocationServiceList403Error1),
            404 => response.Json<ApiV1MiscGoogleBusinessLocationServiceList404Error1>().As(
                AsApiV1MiscGoogleBusinessLocationServiceList404Error1),
            429 => response.Json<ApiV1MiscGoogleBusinessLocationServiceList429Error1>().As(
                AsApiV1MiscGoogleBusinessLocationServiceList429Error1),
            500 => response.Json<ApiV1MiscGoogleBusinessLocationServiceList500Error1>().As(
                AsApiV1MiscGoogleBusinessLocationServiceList500Error1),
            502 => response.Json<ApiV1MiscGoogleBusinessLocationServiceList502Error1>().As(
                AsApiV1MiscGoogleBusinessLocationServiceList502Error1),
            503 => response.Json<ApiV1MiscGoogleBusinessLocationServiceList503Error1>().As(
                AsApiV1MiscGoogleBusinessLocationServiceList503Error1),
            504 => response.Json<ApiV1MiscGoogleBusinessLocationServiceList504Error1>().As(
                AsApiV1MiscGoogleBusinessLocationServiceList504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscGoogleBusinessUpdateServiceListError> Response { get; } = new(Create);
}
