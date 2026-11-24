using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class OrganizationGetImportsUsageError : ApiError
{
    private readonly Optional<ApiV1OrganizationUsageImports400Error1> _apiV1OrganizationUsageImports400Error1Value;

    private readonly Optional<ApiV1OrganizationUsageImports401Error1> _apiV1OrganizationUsageImports401Error1Value;

    private readonly Optional<ApiV1OrganizationUsageImports403Error1> _apiV1OrganizationUsageImports403Error1Value;

    private readonly Optional<ApiV1OrganizationUsageImports404Error1> _apiV1OrganizationUsageImports404Error1Value;

    private readonly Optional<ApiV1OrganizationUsageImports429Error1> _apiV1OrganizationUsageImports429Error1Value;

    private readonly Optional<ApiV1OrganizationUsageImports500Error1> _apiV1OrganizationUsageImports500Error1Value;

    private readonly Optional<ApiV1OrganizationUsageImports502Error1> _apiV1OrganizationUsageImports502Error1Value;

    private readonly Optional<ApiV1OrganizationUsageImports503Error1> _apiV1OrganizationUsageImports503Error1Value;

    private readonly Optional<ApiV1OrganizationUsageImports504Error1> _apiV1OrganizationUsageImports504Error1Value;

    private OrganizationGetImportsUsageError(Optional<ApiV1OrganizationUsageImports400Error1> apiV1OrganizationUsageImports400Error1Value,
        Optional<ApiV1OrganizationUsageImports401Error1> apiV1OrganizationUsageImports401Error1Value,
        Optional<ApiV1OrganizationUsageImports403Error1> apiV1OrganizationUsageImports403Error1Value,
        Optional<ApiV1OrganizationUsageImports404Error1> apiV1OrganizationUsageImports404Error1Value,
        Optional<ApiV1OrganizationUsageImports429Error1> apiV1OrganizationUsageImports429Error1Value,
        Optional<ApiV1OrganizationUsageImports500Error1> apiV1OrganizationUsageImports500Error1Value,
        Optional<ApiV1OrganizationUsageImports502Error1> apiV1OrganizationUsageImports502Error1Value,
        Optional<ApiV1OrganizationUsageImports503Error1> apiV1OrganizationUsageImports503Error1Value,
        Optional<ApiV1OrganizationUsageImports504Error1> apiV1OrganizationUsageImports504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1OrganizationUsageImports400Error1Value = apiV1OrganizationUsageImports400Error1Value;
        _apiV1OrganizationUsageImports401Error1Value = apiV1OrganizationUsageImports401Error1Value;
        _apiV1OrganizationUsageImports403Error1Value = apiV1OrganizationUsageImports403Error1Value;
        _apiV1OrganizationUsageImports404Error1Value = apiV1OrganizationUsageImports404Error1Value;
        _apiV1OrganizationUsageImports429Error1Value = apiV1OrganizationUsageImports429Error1Value;
        _apiV1OrganizationUsageImports500Error1Value = apiV1OrganizationUsageImports500Error1Value;
        _apiV1OrganizationUsageImports502Error1Value = apiV1OrganizationUsageImports502Error1Value;
        _apiV1OrganizationUsageImports503Error1Value = apiV1OrganizationUsageImports503Error1Value;
        _apiV1OrganizationUsageImports504Error1Value = apiV1OrganizationUsageImports504Error1Value;
    }

    private static OrganizationGetImportsUsageError AsApiV1OrganizationUsageImports400Error1(ApiV1OrganizationUsageImports400Error1 value) =>
        new(
            Optional<ApiV1OrganizationUsageImports400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetImportsUsageError AsApiV1OrganizationUsageImports401Error1(ApiV1OrganizationUsageImports401Error1 value) =>
        new(
            default,
            Optional<ApiV1OrganizationUsageImports401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetImportsUsageError AsApiV1OrganizationUsageImports403Error1(ApiV1OrganizationUsageImports403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1OrganizationUsageImports403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetImportsUsageError AsApiV1OrganizationUsageImports404Error1(ApiV1OrganizationUsageImports404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageImports404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetImportsUsageError AsApiV1OrganizationUsageImports429Error1(ApiV1OrganizationUsageImports429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageImports429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetImportsUsageError AsApiV1OrganizationUsageImports500Error1(ApiV1OrganizationUsageImports500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageImports500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static OrganizationGetImportsUsageError AsApiV1OrganizationUsageImports502Error1(ApiV1OrganizationUsageImports502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageImports502Error1>.Some(value),
            default,
            default,
            default);

    private static OrganizationGetImportsUsageError AsApiV1OrganizationUsageImports503Error1(ApiV1OrganizationUsageImports503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageImports503Error1>.Some(value),
            default,
            default);

    private static OrganizationGetImportsUsageError AsApiV1OrganizationUsageImports504Error1(ApiV1OrganizationUsageImports504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageImports504Error1>.Some(value),
            default);

    private static OrganizationGetImportsUsageError AsFallback(RawError value) =>
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

    public bool TryGetApiV1OrganizationUsageImports400Error1([NotNullWhen(true)] out ApiV1OrganizationUsageImports400Error1? value) =>
        _apiV1OrganizationUsageImports400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageImports401Error1([NotNullWhen(true)] out ApiV1OrganizationUsageImports401Error1? value) =>
        _apiV1OrganizationUsageImports401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageImports403Error1([NotNullWhen(true)] out ApiV1OrganizationUsageImports403Error1? value) =>
        _apiV1OrganizationUsageImports403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageImports404Error1([NotNullWhen(true)] out ApiV1OrganizationUsageImports404Error1? value) =>
        _apiV1OrganizationUsageImports404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageImports429Error1([NotNullWhen(true)] out ApiV1OrganizationUsageImports429Error1? value) =>
        _apiV1OrganizationUsageImports429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageImports500Error1([NotNullWhen(true)] out ApiV1OrganizationUsageImports500Error1? value) =>
        _apiV1OrganizationUsageImports500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageImports502Error1([NotNullWhen(true)] out ApiV1OrganizationUsageImports502Error1? value) =>
        _apiV1OrganizationUsageImports502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageImports503Error1([NotNullWhen(true)] out ApiV1OrganizationUsageImports503Error1? value) =>
        _apiV1OrganizationUsageImports503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageImports504Error1([NotNullWhen(true)] out ApiV1OrganizationUsageImports504Error1? value) =>
        _apiV1OrganizationUsageImports504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1OrganizationUsageImports400Error1, TResult> onApiV1OrganizationUsageImports400Error1,
        Func<ApiV1OrganizationUsageImports401Error1, TResult> onApiV1OrganizationUsageImports401Error1,
        Func<ApiV1OrganizationUsageImports403Error1, TResult> onApiV1OrganizationUsageImports403Error1,
        Func<ApiV1OrganizationUsageImports404Error1, TResult> onApiV1OrganizationUsageImports404Error1,
        Func<ApiV1OrganizationUsageImports429Error1, TResult> onApiV1OrganizationUsageImports429Error1,
        Func<ApiV1OrganizationUsageImports500Error1, TResult> onApiV1OrganizationUsageImports500Error1,
        Func<ApiV1OrganizationUsageImports502Error1, TResult> onApiV1OrganizationUsageImports502Error1,
        Func<ApiV1OrganizationUsageImports503Error1, TResult> onApiV1OrganizationUsageImports503Error1,
        Func<ApiV1OrganizationUsageImports504Error1, TResult> onApiV1OrganizationUsageImports504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1OrganizationUsageImports400Error1(
                out var apiV1OrganizationUsageImports400Error1Value) => onApiV1OrganizationUsageImports400Error1(
                apiV1OrganizationUsageImports400Error1Value),
            _ when TryGetApiV1OrganizationUsageImports401Error1(
                out var apiV1OrganizationUsageImports401Error1Value) => onApiV1OrganizationUsageImports401Error1(
                apiV1OrganizationUsageImports401Error1Value),
            _ when TryGetApiV1OrganizationUsageImports403Error1(
                out var apiV1OrganizationUsageImports403Error1Value) => onApiV1OrganizationUsageImports403Error1(
                apiV1OrganizationUsageImports403Error1Value),
            _ when TryGetApiV1OrganizationUsageImports404Error1(
                out var apiV1OrganizationUsageImports404Error1Value) => onApiV1OrganizationUsageImports404Error1(
                apiV1OrganizationUsageImports404Error1Value),
            _ when TryGetApiV1OrganizationUsageImports429Error1(
                out var apiV1OrganizationUsageImports429Error1Value) => onApiV1OrganizationUsageImports429Error1(
                apiV1OrganizationUsageImports429Error1Value),
            _ when TryGetApiV1OrganizationUsageImports500Error1(
                out var apiV1OrganizationUsageImports500Error1Value) => onApiV1OrganizationUsageImports500Error1(
                apiV1OrganizationUsageImports500Error1Value),
            _ when TryGetApiV1OrganizationUsageImports502Error1(
                out var apiV1OrganizationUsageImports502Error1Value) => onApiV1OrganizationUsageImports502Error1(
                apiV1OrganizationUsageImports502Error1Value),
            _ when TryGetApiV1OrganizationUsageImports503Error1(
                out var apiV1OrganizationUsageImports503Error1Value) => onApiV1OrganizationUsageImports503Error1(
                apiV1OrganizationUsageImports503Error1Value),
            _ when TryGetApiV1OrganizationUsageImports504Error1(
                out var apiV1OrganizationUsageImports504Error1Value) => onApiV1OrganizationUsageImports504Error1(
                apiV1OrganizationUsageImports504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(OrganizationGetImportsUsageError)} holds no value.")
        };

    public void Match(Action<ApiV1OrganizationUsageImports400Error1> onApiV1OrganizationUsageImports400Error1,
        Action<ApiV1OrganizationUsageImports401Error1> onApiV1OrganizationUsageImports401Error1,
        Action<ApiV1OrganizationUsageImports403Error1> onApiV1OrganizationUsageImports403Error1,
        Action<ApiV1OrganizationUsageImports404Error1> onApiV1OrganizationUsageImports404Error1,
        Action<ApiV1OrganizationUsageImports429Error1> onApiV1OrganizationUsageImports429Error1,
        Action<ApiV1OrganizationUsageImports500Error1> onApiV1OrganizationUsageImports500Error1,
        Action<ApiV1OrganizationUsageImports502Error1> onApiV1OrganizationUsageImports502Error1,
        Action<ApiV1OrganizationUsageImports503Error1> onApiV1OrganizationUsageImports503Error1,
        Action<ApiV1OrganizationUsageImports504Error1> onApiV1OrganizationUsageImports504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1OrganizationUsageImports400Error1(
            out var apiV1OrganizationUsageImports400Error1Value)) onApiV1OrganizationUsageImports400Error1(
            apiV1OrganizationUsageImports400Error1Value);
        else if (TryGetApiV1OrganizationUsageImports401Error1(
            out var apiV1OrganizationUsageImports401Error1Value)) onApiV1OrganizationUsageImports401Error1(
            apiV1OrganizationUsageImports401Error1Value);
        else if (TryGetApiV1OrganizationUsageImports403Error1(
            out var apiV1OrganizationUsageImports403Error1Value)) onApiV1OrganizationUsageImports403Error1(
            apiV1OrganizationUsageImports403Error1Value);
        else if (TryGetApiV1OrganizationUsageImports404Error1(
            out var apiV1OrganizationUsageImports404Error1Value)) onApiV1OrganizationUsageImports404Error1(
            apiV1OrganizationUsageImports404Error1Value);
        else if (TryGetApiV1OrganizationUsageImports429Error1(
            out var apiV1OrganizationUsageImports429Error1Value)) onApiV1OrganizationUsageImports429Error1(
            apiV1OrganizationUsageImports429Error1Value);
        else if (TryGetApiV1OrganizationUsageImports500Error1(
            out var apiV1OrganizationUsageImports500Error1Value)) onApiV1OrganizationUsageImports500Error1(
            apiV1OrganizationUsageImports500Error1Value);
        else if (TryGetApiV1OrganizationUsageImports502Error1(
            out var apiV1OrganizationUsageImports502Error1Value)) onApiV1OrganizationUsageImports502Error1(
            apiV1OrganizationUsageImports502Error1Value);
        else if (TryGetApiV1OrganizationUsageImports503Error1(
            out var apiV1OrganizationUsageImports503Error1Value)) onApiV1OrganizationUsageImports503Error1(
            apiV1OrganizationUsageImports503Error1Value);
        else if (TryGetApiV1OrganizationUsageImports504Error1(
            out var apiV1OrganizationUsageImports504Error1Value)) onApiV1OrganizationUsageImports504Error1(
            apiV1OrganizationUsageImports504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(OrganizationGetImportsUsageError)} holds no value.");
    }

    private static Task<OrganizationGetImportsUsageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1OrganizationUsageImports400Error1>().As(AsApiV1OrganizationUsageImports400Error1),
            401 => response.Json<ApiV1OrganizationUsageImports401Error1>().As(AsApiV1OrganizationUsageImports401Error1),
            403 => response.Json<ApiV1OrganizationUsageImports403Error1>().As(AsApiV1OrganizationUsageImports403Error1),
            404 => response.Json<ApiV1OrganizationUsageImports404Error1>().As(AsApiV1OrganizationUsageImports404Error1),
            429 => response.Json<ApiV1OrganizationUsageImports429Error1>().As(AsApiV1OrganizationUsageImports429Error1),
            500 => response.Json<ApiV1OrganizationUsageImports500Error1>().As(AsApiV1OrganizationUsageImports500Error1),
            502 => response.Json<ApiV1OrganizationUsageImports502Error1>().As(AsApiV1OrganizationUsageImports502Error1),
            503 => response.Json<ApiV1OrganizationUsageImports503Error1>().As(AsApiV1OrganizationUsageImports503Error1),
            504 => response.Json<ApiV1OrganizationUsageImports504Error1>().As(AsApiV1OrganizationUsageImports504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<OrganizationGetImportsUsageError> Response { get; } = new(Create);
}
