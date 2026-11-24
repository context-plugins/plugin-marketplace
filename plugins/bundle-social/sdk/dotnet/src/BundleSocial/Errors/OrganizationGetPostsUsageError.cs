using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class OrganizationGetPostsUsageError : ApiError
{
    private readonly Optional<ApiV1OrganizationUsagePosts400Error1> _apiV1OrganizationUsagePosts400Error1Value;

    private readonly Optional<ApiV1OrganizationUsagePosts401Error1> _apiV1OrganizationUsagePosts401Error1Value;

    private readonly Optional<ApiV1OrganizationUsagePosts403Error1> _apiV1OrganizationUsagePosts403Error1Value;

    private readonly Optional<ApiV1OrganizationUsagePosts404Error1> _apiV1OrganizationUsagePosts404Error1Value;

    private readonly Optional<ApiV1OrganizationUsagePosts429Error1> _apiV1OrganizationUsagePosts429Error1Value;

    private readonly Optional<ApiV1OrganizationUsagePosts500Error1> _apiV1OrganizationUsagePosts500Error1Value;

    private readonly Optional<ApiV1OrganizationUsagePosts502Error1> _apiV1OrganizationUsagePosts502Error1Value;

    private readonly Optional<ApiV1OrganizationUsagePosts503Error1> _apiV1OrganizationUsagePosts503Error1Value;

    private readonly Optional<ApiV1OrganizationUsagePosts504Error1> _apiV1OrganizationUsagePosts504Error1Value;

    private OrganizationGetPostsUsageError(Optional<ApiV1OrganizationUsagePosts400Error1> apiV1OrganizationUsagePosts400Error1Value,
        Optional<ApiV1OrganizationUsagePosts401Error1> apiV1OrganizationUsagePosts401Error1Value,
        Optional<ApiV1OrganizationUsagePosts403Error1> apiV1OrganizationUsagePosts403Error1Value,
        Optional<ApiV1OrganizationUsagePosts404Error1> apiV1OrganizationUsagePosts404Error1Value,
        Optional<ApiV1OrganizationUsagePosts429Error1> apiV1OrganizationUsagePosts429Error1Value,
        Optional<ApiV1OrganizationUsagePosts500Error1> apiV1OrganizationUsagePosts500Error1Value,
        Optional<ApiV1OrganizationUsagePosts502Error1> apiV1OrganizationUsagePosts502Error1Value,
        Optional<ApiV1OrganizationUsagePosts503Error1> apiV1OrganizationUsagePosts503Error1Value,
        Optional<ApiV1OrganizationUsagePosts504Error1> apiV1OrganizationUsagePosts504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1OrganizationUsagePosts400Error1Value = apiV1OrganizationUsagePosts400Error1Value;
        _apiV1OrganizationUsagePosts401Error1Value = apiV1OrganizationUsagePosts401Error1Value;
        _apiV1OrganizationUsagePosts403Error1Value = apiV1OrganizationUsagePosts403Error1Value;
        _apiV1OrganizationUsagePosts404Error1Value = apiV1OrganizationUsagePosts404Error1Value;
        _apiV1OrganizationUsagePosts429Error1Value = apiV1OrganizationUsagePosts429Error1Value;
        _apiV1OrganizationUsagePosts500Error1Value = apiV1OrganizationUsagePosts500Error1Value;
        _apiV1OrganizationUsagePosts502Error1Value = apiV1OrganizationUsagePosts502Error1Value;
        _apiV1OrganizationUsagePosts503Error1Value = apiV1OrganizationUsagePosts503Error1Value;
        _apiV1OrganizationUsagePosts504Error1Value = apiV1OrganizationUsagePosts504Error1Value;
    }

    private static OrganizationGetPostsUsageError AsApiV1OrganizationUsagePosts400Error1(ApiV1OrganizationUsagePosts400Error1 value) =>
        new(
            Optional<ApiV1OrganizationUsagePosts400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetPostsUsageError AsApiV1OrganizationUsagePosts401Error1(ApiV1OrganizationUsagePosts401Error1 value) =>
        new(
            default,
            Optional<ApiV1OrganizationUsagePosts401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetPostsUsageError AsApiV1OrganizationUsagePosts403Error1(ApiV1OrganizationUsagePosts403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1OrganizationUsagePosts403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetPostsUsageError AsApiV1OrganizationUsagePosts404Error1(ApiV1OrganizationUsagePosts404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsagePosts404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetPostsUsageError AsApiV1OrganizationUsagePosts429Error1(ApiV1OrganizationUsagePosts429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsagePosts429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetPostsUsageError AsApiV1OrganizationUsagePosts500Error1(ApiV1OrganizationUsagePosts500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsagePosts500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static OrganizationGetPostsUsageError AsApiV1OrganizationUsagePosts502Error1(ApiV1OrganizationUsagePosts502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsagePosts502Error1>.Some(value),
            default,
            default,
            default);

    private static OrganizationGetPostsUsageError AsApiV1OrganizationUsagePosts503Error1(ApiV1OrganizationUsagePosts503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsagePosts503Error1>.Some(value),
            default,
            default);

    private static OrganizationGetPostsUsageError AsApiV1OrganizationUsagePosts504Error1(ApiV1OrganizationUsagePosts504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsagePosts504Error1>.Some(value),
            default);

    private static OrganizationGetPostsUsageError AsFallback(RawError value) =>
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

    public bool TryGetApiV1OrganizationUsagePosts400Error1([NotNullWhen(true)] out ApiV1OrganizationUsagePosts400Error1? value) =>
        _apiV1OrganizationUsagePosts400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsagePosts401Error1([NotNullWhen(true)] out ApiV1OrganizationUsagePosts401Error1? value) =>
        _apiV1OrganizationUsagePosts401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsagePosts403Error1([NotNullWhen(true)] out ApiV1OrganizationUsagePosts403Error1? value) =>
        _apiV1OrganizationUsagePosts403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsagePosts404Error1([NotNullWhen(true)] out ApiV1OrganizationUsagePosts404Error1? value) =>
        _apiV1OrganizationUsagePosts404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsagePosts429Error1([NotNullWhen(true)] out ApiV1OrganizationUsagePosts429Error1? value) =>
        _apiV1OrganizationUsagePosts429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsagePosts500Error1([NotNullWhen(true)] out ApiV1OrganizationUsagePosts500Error1? value) =>
        _apiV1OrganizationUsagePosts500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsagePosts502Error1([NotNullWhen(true)] out ApiV1OrganizationUsagePosts502Error1? value) =>
        _apiV1OrganizationUsagePosts502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsagePosts503Error1([NotNullWhen(true)] out ApiV1OrganizationUsagePosts503Error1? value) =>
        _apiV1OrganizationUsagePosts503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsagePosts504Error1([NotNullWhen(true)] out ApiV1OrganizationUsagePosts504Error1? value) =>
        _apiV1OrganizationUsagePosts504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1OrganizationUsagePosts400Error1, TResult> onApiV1OrganizationUsagePosts400Error1,
        Func<ApiV1OrganizationUsagePosts401Error1, TResult> onApiV1OrganizationUsagePosts401Error1,
        Func<ApiV1OrganizationUsagePosts403Error1, TResult> onApiV1OrganizationUsagePosts403Error1,
        Func<ApiV1OrganizationUsagePosts404Error1, TResult> onApiV1OrganizationUsagePosts404Error1,
        Func<ApiV1OrganizationUsagePosts429Error1, TResult> onApiV1OrganizationUsagePosts429Error1,
        Func<ApiV1OrganizationUsagePosts500Error1, TResult> onApiV1OrganizationUsagePosts500Error1,
        Func<ApiV1OrganizationUsagePosts502Error1, TResult> onApiV1OrganizationUsagePosts502Error1,
        Func<ApiV1OrganizationUsagePosts503Error1, TResult> onApiV1OrganizationUsagePosts503Error1,
        Func<ApiV1OrganizationUsagePosts504Error1, TResult> onApiV1OrganizationUsagePosts504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1OrganizationUsagePosts400Error1(
                out var apiV1OrganizationUsagePosts400Error1Value) => onApiV1OrganizationUsagePosts400Error1(
                apiV1OrganizationUsagePosts400Error1Value),
            _ when TryGetApiV1OrganizationUsagePosts401Error1(
                out var apiV1OrganizationUsagePosts401Error1Value) => onApiV1OrganizationUsagePosts401Error1(
                apiV1OrganizationUsagePosts401Error1Value),
            _ when TryGetApiV1OrganizationUsagePosts403Error1(
                out var apiV1OrganizationUsagePosts403Error1Value) => onApiV1OrganizationUsagePosts403Error1(
                apiV1OrganizationUsagePosts403Error1Value),
            _ when TryGetApiV1OrganizationUsagePosts404Error1(
                out var apiV1OrganizationUsagePosts404Error1Value) => onApiV1OrganizationUsagePosts404Error1(
                apiV1OrganizationUsagePosts404Error1Value),
            _ when TryGetApiV1OrganizationUsagePosts429Error1(
                out var apiV1OrganizationUsagePosts429Error1Value) => onApiV1OrganizationUsagePosts429Error1(
                apiV1OrganizationUsagePosts429Error1Value),
            _ when TryGetApiV1OrganizationUsagePosts500Error1(
                out var apiV1OrganizationUsagePosts500Error1Value) => onApiV1OrganizationUsagePosts500Error1(
                apiV1OrganizationUsagePosts500Error1Value),
            _ when TryGetApiV1OrganizationUsagePosts502Error1(
                out var apiV1OrganizationUsagePosts502Error1Value) => onApiV1OrganizationUsagePosts502Error1(
                apiV1OrganizationUsagePosts502Error1Value),
            _ when TryGetApiV1OrganizationUsagePosts503Error1(
                out var apiV1OrganizationUsagePosts503Error1Value) => onApiV1OrganizationUsagePosts503Error1(
                apiV1OrganizationUsagePosts503Error1Value),
            _ when TryGetApiV1OrganizationUsagePosts504Error1(
                out var apiV1OrganizationUsagePosts504Error1Value) => onApiV1OrganizationUsagePosts504Error1(
                apiV1OrganizationUsagePosts504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(OrganizationGetPostsUsageError)} holds no value.")
        };

    public void Match(Action<ApiV1OrganizationUsagePosts400Error1> onApiV1OrganizationUsagePosts400Error1,
        Action<ApiV1OrganizationUsagePosts401Error1> onApiV1OrganizationUsagePosts401Error1,
        Action<ApiV1OrganizationUsagePosts403Error1> onApiV1OrganizationUsagePosts403Error1,
        Action<ApiV1OrganizationUsagePosts404Error1> onApiV1OrganizationUsagePosts404Error1,
        Action<ApiV1OrganizationUsagePosts429Error1> onApiV1OrganizationUsagePosts429Error1,
        Action<ApiV1OrganizationUsagePosts500Error1> onApiV1OrganizationUsagePosts500Error1,
        Action<ApiV1OrganizationUsagePosts502Error1> onApiV1OrganizationUsagePosts502Error1,
        Action<ApiV1OrganizationUsagePosts503Error1> onApiV1OrganizationUsagePosts503Error1,
        Action<ApiV1OrganizationUsagePosts504Error1> onApiV1OrganizationUsagePosts504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1OrganizationUsagePosts400Error1(
            out var apiV1OrganizationUsagePosts400Error1Value)) onApiV1OrganizationUsagePosts400Error1(
            apiV1OrganizationUsagePosts400Error1Value);
        else if (TryGetApiV1OrganizationUsagePosts401Error1(
            out var apiV1OrganizationUsagePosts401Error1Value)) onApiV1OrganizationUsagePosts401Error1(
            apiV1OrganizationUsagePosts401Error1Value);
        else if (TryGetApiV1OrganizationUsagePosts403Error1(
            out var apiV1OrganizationUsagePosts403Error1Value)) onApiV1OrganizationUsagePosts403Error1(
            apiV1OrganizationUsagePosts403Error1Value);
        else if (TryGetApiV1OrganizationUsagePosts404Error1(
            out var apiV1OrganizationUsagePosts404Error1Value)) onApiV1OrganizationUsagePosts404Error1(
            apiV1OrganizationUsagePosts404Error1Value);
        else if (TryGetApiV1OrganizationUsagePosts429Error1(
            out var apiV1OrganizationUsagePosts429Error1Value)) onApiV1OrganizationUsagePosts429Error1(
            apiV1OrganizationUsagePosts429Error1Value);
        else if (TryGetApiV1OrganizationUsagePosts500Error1(
            out var apiV1OrganizationUsagePosts500Error1Value)) onApiV1OrganizationUsagePosts500Error1(
            apiV1OrganizationUsagePosts500Error1Value);
        else if (TryGetApiV1OrganizationUsagePosts502Error1(
            out var apiV1OrganizationUsagePosts502Error1Value)) onApiV1OrganizationUsagePosts502Error1(
            apiV1OrganizationUsagePosts502Error1Value);
        else if (TryGetApiV1OrganizationUsagePosts503Error1(
            out var apiV1OrganizationUsagePosts503Error1Value)) onApiV1OrganizationUsagePosts503Error1(
            apiV1OrganizationUsagePosts503Error1Value);
        else if (TryGetApiV1OrganizationUsagePosts504Error1(
            out var apiV1OrganizationUsagePosts504Error1Value)) onApiV1OrganizationUsagePosts504Error1(
            apiV1OrganizationUsagePosts504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(OrganizationGetPostsUsageError)} holds no value.");
    }

    private static Task<OrganizationGetPostsUsageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1OrganizationUsagePosts400Error1>().As(AsApiV1OrganizationUsagePosts400Error1),
            401 => response.Json<ApiV1OrganizationUsagePosts401Error1>().As(AsApiV1OrganizationUsagePosts401Error1),
            403 => response.Json<ApiV1OrganizationUsagePosts403Error1>().As(AsApiV1OrganizationUsagePosts403Error1),
            404 => response.Json<ApiV1OrganizationUsagePosts404Error1>().As(AsApiV1OrganizationUsagePosts404Error1),
            429 => response.Json<ApiV1OrganizationUsagePosts429Error1>().As(AsApiV1OrganizationUsagePosts429Error1),
            500 => response.Json<ApiV1OrganizationUsagePosts500Error1>().As(AsApiV1OrganizationUsagePosts500Error1),
            502 => response.Json<ApiV1OrganizationUsagePosts502Error1>().As(AsApiV1OrganizationUsagePosts502Error1),
            503 => response.Json<ApiV1OrganizationUsagePosts503Error1>().As(AsApiV1OrganizationUsagePosts503Error1),
            504 => response.Json<ApiV1OrganizationUsagePosts504Error1>().As(AsApiV1OrganizationUsagePosts504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<OrganizationGetPostsUsageError> Response { get; } = new(Create);
}
