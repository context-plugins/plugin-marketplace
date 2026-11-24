using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class OrganizationGetUploadsUsageError : ApiError
{
    private readonly Optional<ApiV1OrganizationUsageUploads400Error1> _apiV1OrganizationUsageUploads400Error1Value;

    private readonly Optional<ApiV1OrganizationUsageUploads401Error1> _apiV1OrganizationUsageUploads401Error1Value;

    private readonly Optional<ApiV1OrganizationUsageUploads403Error1> _apiV1OrganizationUsageUploads403Error1Value;

    private readonly Optional<ApiV1OrganizationUsageUploads404Error1> _apiV1OrganizationUsageUploads404Error1Value;

    private readonly Optional<ApiV1OrganizationUsageUploads429Error1> _apiV1OrganizationUsageUploads429Error1Value;

    private readonly Optional<ApiV1OrganizationUsageUploads500Error1> _apiV1OrganizationUsageUploads500Error1Value;

    private readonly Optional<ApiV1OrganizationUsageUploads502Error1> _apiV1OrganizationUsageUploads502Error1Value;

    private readonly Optional<ApiV1OrganizationUsageUploads503Error1> _apiV1OrganizationUsageUploads503Error1Value;

    private readonly Optional<ApiV1OrganizationUsageUploads504Error1> _apiV1OrganizationUsageUploads504Error1Value;

    private OrganizationGetUploadsUsageError(Optional<ApiV1OrganizationUsageUploads400Error1> apiV1OrganizationUsageUploads400Error1Value,
        Optional<ApiV1OrganizationUsageUploads401Error1> apiV1OrganizationUsageUploads401Error1Value,
        Optional<ApiV1OrganizationUsageUploads403Error1> apiV1OrganizationUsageUploads403Error1Value,
        Optional<ApiV1OrganizationUsageUploads404Error1> apiV1OrganizationUsageUploads404Error1Value,
        Optional<ApiV1OrganizationUsageUploads429Error1> apiV1OrganizationUsageUploads429Error1Value,
        Optional<ApiV1OrganizationUsageUploads500Error1> apiV1OrganizationUsageUploads500Error1Value,
        Optional<ApiV1OrganizationUsageUploads502Error1> apiV1OrganizationUsageUploads502Error1Value,
        Optional<ApiV1OrganizationUsageUploads503Error1> apiV1OrganizationUsageUploads503Error1Value,
        Optional<ApiV1OrganizationUsageUploads504Error1> apiV1OrganizationUsageUploads504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1OrganizationUsageUploads400Error1Value = apiV1OrganizationUsageUploads400Error1Value;
        _apiV1OrganizationUsageUploads401Error1Value = apiV1OrganizationUsageUploads401Error1Value;
        _apiV1OrganizationUsageUploads403Error1Value = apiV1OrganizationUsageUploads403Error1Value;
        _apiV1OrganizationUsageUploads404Error1Value = apiV1OrganizationUsageUploads404Error1Value;
        _apiV1OrganizationUsageUploads429Error1Value = apiV1OrganizationUsageUploads429Error1Value;
        _apiV1OrganizationUsageUploads500Error1Value = apiV1OrganizationUsageUploads500Error1Value;
        _apiV1OrganizationUsageUploads502Error1Value = apiV1OrganizationUsageUploads502Error1Value;
        _apiV1OrganizationUsageUploads503Error1Value = apiV1OrganizationUsageUploads503Error1Value;
        _apiV1OrganizationUsageUploads504Error1Value = apiV1OrganizationUsageUploads504Error1Value;
    }

    private static OrganizationGetUploadsUsageError AsApiV1OrganizationUsageUploads400Error1(ApiV1OrganizationUsageUploads400Error1 value) =>
        new(
            Optional<ApiV1OrganizationUsageUploads400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetUploadsUsageError AsApiV1OrganizationUsageUploads401Error1(ApiV1OrganizationUsageUploads401Error1 value) =>
        new(
            default,
            Optional<ApiV1OrganizationUsageUploads401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetUploadsUsageError AsApiV1OrganizationUsageUploads403Error1(ApiV1OrganizationUsageUploads403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1OrganizationUsageUploads403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetUploadsUsageError AsApiV1OrganizationUsageUploads404Error1(ApiV1OrganizationUsageUploads404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageUploads404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetUploadsUsageError AsApiV1OrganizationUsageUploads429Error1(ApiV1OrganizationUsageUploads429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageUploads429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetUploadsUsageError AsApiV1OrganizationUsageUploads500Error1(ApiV1OrganizationUsageUploads500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageUploads500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static OrganizationGetUploadsUsageError AsApiV1OrganizationUsageUploads502Error1(ApiV1OrganizationUsageUploads502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageUploads502Error1>.Some(value),
            default,
            default,
            default);

    private static OrganizationGetUploadsUsageError AsApiV1OrganizationUsageUploads503Error1(ApiV1OrganizationUsageUploads503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageUploads503Error1>.Some(value),
            default,
            default);

    private static OrganizationGetUploadsUsageError AsApiV1OrganizationUsageUploads504Error1(ApiV1OrganizationUsageUploads504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageUploads504Error1>.Some(value),
            default);

    private static OrganizationGetUploadsUsageError AsFallback(RawError value) =>
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

    public bool TryGetApiV1OrganizationUsageUploads400Error1([NotNullWhen(true)] out ApiV1OrganizationUsageUploads400Error1? value) =>
        _apiV1OrganizationUsageUploads400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageUploads401Error1([NotNullWhen(true)] out ApiV1OrganizationUsageUploads401Error1? value) =>
        _apiV1OrganizationUsageUploads401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageUploads403Error1([NotNullWhen(true)] out ApiV1OrganizationUsageUploads403Error1? value) =>
        _apiV1OrganizationUsageUploads403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageUploads404Error1([NotNullWhen(true)] out ApiV1OrganizationUsageUploads404Error1? value) =>
        _apiV1OrganizationUsageUploads404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageUploads429Error1([NotNullWhen(true)] out ApiV1OrganizationUsageUploads429Error1? value) =>
        _apiV1OrganizationUsageUploads429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageUploads500Error1([NotNullWhen(true)] out ApiV1OrganizationUsageUploads500Error1? value) =>
        _apiV1OrganizationUsageUploads500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageUploads502Error1([NotNullWhen(true)] out ApiV1OrganizationUsageUploads502Error1? value) =>
        _apiV1OrganizationUsageUploads502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageUploads503Error1([NotNullWhen(true)] out ApiV1OrganizationUsageUploads503Error1? value) =>
        _apiV1OrganizationUsageUploads503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageUploads504Error1([NotNullWhen(true)] out ApiV1OrganizationUsageUploads504Error1? value) =>
        _apiV1OrganizationUsageUploads504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1OrganizationUsageUploads400Error1, TResult> onApiV1OrganizationUsageUploads400Error1,
        Func<ApiV1OrganizationUsageUploads401Error1, TResult> onApiV1OrganizationUsageUploads401Error1,
        Func<ApiV1OrganizationUsageUploads403Error1, TResult> onApiV1OrganizationUsageUploads403Error1,
        Func<ApiV1OrganizationUsageUploads404Error1, TResult> onApiV1OrganizationUsageUploads404Error1,
        Func<ApiV1OrganizationUsageUploads429Error1, TResult> onApiV1OrganizationUsageUploads429Error1,
        Func<ApiV1OrganizationUsageUploads500Error1, TResult> onApiV1OrganizationUsageUploads500Error1,
        Func<ApiV1OrganizationUsageUploads502Error1, TResult> onApiV1OrganizationUsageUploads502Error1,
        Func<ApiV1OrganizationUsageUploads503Error1, TResult> onApiV1OrganizationUsageUploads503Error1,
        Func<ApiV1OrganizationUsageUploads504Error1, TResult> onApiV1OrganizationUsageUploads504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1OrganizationUsageUploads400Error1(
                out var apiV1OrganizationUsageUploads400Error1Value) => onApiV1OrganizationUsageUploads400Error1(
                apiV1OrganizationUsageUploads400Error1Value),
            _ when TryGetApiV1OrganizationUsageUploads401Error1(
                out var apiV1OrganizationUsageUploads401Error1Value) => onApiV1OrganizationUsageUploads401Error1(
                apiV1OrganizationUsageUploads401Error1Value),
            _ when TryGetApiV1OrganizationUsageUploads403Error1(
                out var apiV1OrganizationUsageUploads403Error1Value) => onApiV1OrganizationUsageUploads403Error1(
                apiV1OrganizationUsageUploads403Error1Value),
            _ when TryGetApiV1OrganizationUsageUploads404Error1(
                out var apiV1OrganizationUsageUploads404Error1Value) => onApiV1OrganizationUsageUploads404Error1(
                apiV1OrganizationUsageUploads404Error1Value),
            _ when TryGetApiV1OrganizationUsageUploads429Error1(
                out var apiV1OrganizationUsageUploads429Error1Value) => onApiV1OrganizationUsageUploads429Error1(
                apiV1OrganizationUsageUploads429Error1Value),
            _ when TryGetApiV1OrganizationUsageUploads500Error1(
                out var apiV1OrganizationUsageUploads500Error1Value) => onApiV1OrganizationUsageUploads500Error1(
                apiV1OrganizationUsageUploads500Error1Value),
            _ when TryGetApiV1OrganizationUsageUploads502Error1(
                out var apiV1OrganizationUsageUploads502Error1Value) => onApiV1OrganizationUsageUploads502Error1(
                apiV1OrganizationUsageUploads502Error1Value),
            _ when TryGetApiV1OrganizationUsageUploads503Error1(
                out var apiV1OrganizationUsageUploads503Error1Value) => onApiV1OrganizationUsageUploads503Error1(
                apiV1OrganizationUsageUploads503Error1Value),
            _ when TryGetApiV1OrganizationUsageUploads504Error1(
                out var apiV1OrganizationUsageUploads504Error1Value) => onApiV1OrganizationUsageUploads504Error1(
                apiV1OrganizationUsageUploads504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(OrganizationGetUploadsUsageError)} holds no value.")
        };

    public void Match(Action<ApiV1OrganizationUsageUploads400Error1> onApiV1OrganizationUsageUploads400Error1,
        Action<ApiV1OrganizationUsageUploads401Error1> onApiV1OrganizationUsageUploads401Error1,
        Action<ApiV1OrganizationUsageUploads403Error1> onApiV1OrganizationUsageUploads403Error1,
        Action<ApiV1OrganizationUsageUploads404Error1> onApiV1OrganizationUsageUploads404Error1,
        Action<ApiV1OrganizationUsageUploads429Error1> onApiV1OrganizationUsageUploads429Error1,
        Action<ApiV1OrganizationUsageUploads500Error1> onApiV1OrganizationUsageUploads500Error1,
        Action<ApiV1OrganizationUsageUploads502Error1> onApiV1OrganizationUsageUploads502Error1,
        Action<ApiV1OrganizationUsageUploads503Error1> onApiV1OrganizationUsageUploads503Error1,
        Action<ApiV1OrganizationUsageUploads504Error1> onApiV1OrganizationUsageUploads504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1OrganizationUsageUploads400Error1(
            out var apiV1OrganizationUsageUploads400Error1Value)) onApiV1OrganizationUsageUploads400Error1(
            apiV1OrganizationUsageUploads400Error1Value);
        else if (TryGetApiV1OrganizationUsageUploads401Error1(
            out var apiV1OrganizationUsageUploads401Error1Value)) onApiV1OrganizationUsageUploads401Error1(
            apiV1OrganizationUsageUploads401Error1Value);
        else if (TryGetApiV1OrganizationUsageUploads403Error1(
            out var apiV1OrganizationUsageUploads403Error1Value)) onApiV1OrganizationUsageUploads403Error1(
            apiV1OrganizationUsageUploads403Error1Value);
        else if (TryGetApiV1OrganizationUsageUploads404Error1(
            out var apiV1OrganizationUsageUploads404Error1Value)) onApiV1OrganizationUsageUploads404Error1(
            apiV1OrganizationUsageUploads404Error1Value);
        else if (TryGetApiV1OrganizationUsageUploads429Error1(
            out var apiV1OrganizationUsageUploads429Error1Value)) onApiV1OrganizationUsageUploads429Error1(
            apiV1OrganizationUsageUploads429Error1Value);
        else if (TryGetApiV1OrganizationUsageUploads500Error1(
            out var apiV1OrganizationUsageUploads500Error1Value)) onApiV1OrganizationUsageUploads500Error1(
            apiV1OrganizationUsageUploads500Error1Value);
        else if (TryGetApiV1OrganizationUsageUploads502Error1(
            out var apiV1OrganizationUsageUploads502Error1Value)) onApiV1OrganizationUsageUploads502Error1(
            apiV1OrganizationUsageUploads502Error1Value);
        else if (TryGetApiV1OrganizationUsageUploads503Error1(
            out var apiV1OrganizationUsageUploads503Error1Value)) onApiV1OrganizationUsageUploads503Error1(
            apiV1OrganizationUsageUploads503Error1Value);
        else if (TryGetApiV1OrganizationUsageUploads504Error1(
            out var apiV1OrganizationUsageUploads504Error1Value)) onApiV1OrganizationUsageUploads504Error1(
            apiV1OrganizationUsageUploads504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(OrganizationGetUploadsUsageError)} holds no value.");
    }

    private static Task<OrganizationGetUploadsUsageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1OrganizationUsageUploads400Error1>().As(AsApiV1OrganizationUsageUploads400Error1),
            401 => response.Json<ApiV1OrganizationUsageUploads401Error1>().As(AsApiV1OrganizationUsageUploads401Error1),
            403 => response.Json<ApiV1OrganizationUsageUploads403Error1>().As(AsApiV1OrganizationUsageUploads403Error1),
            404 => response.Json<ApiV1OrganizationUsageUploads404Error1>().As(AsApiV1OrganizationUsageUploads404Error1),
            429 => response.Json<ApiV1OrganizationUsageUploads429Error1>().As(AsApiV1OrganizationUsageUploads429Error1),
            500 => response.Json<ApiV1OrganizationUsageUploads500Error1>().As(AsApiV1OrganizationUsageUploads500Error1),
            502 => response.Json<ApiV1OrganizationUsageUploads502Error1>().As(AsApiV1OrganizationUsageUploads502Error1),
            503 => response.Json<ApiV1OrganizationUsageUploads503Error1>().As(AsApiV1OrganizationUsageUploads503Error1),
            504 => response.Json<ApiV1OrganizationUsageUploads504Error1>().As(AsApiV1OrganizationUsageUploads504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<OrganizationGetUploadsUsageError> Response { get; } = new(Create);
}
