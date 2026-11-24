using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class OrganizationGetOrganizationError : ApiError
{
    private readonly Optional<ApiV1Organization400Error1> _apiV1Organization400Error1Value;

    private readonly Optional<ApiV1Organization401Error1> _apiV1Organization401Error1Value;

    private readonly Optional<ApiV1Organization403Error1> _apiV1Organization403Error1Value;

    private readonly Optional<ApiV1Organization404Error1> _apiV1Organization404Error1Value;

    private readonly Optional<ApiV1Organization429Error1> _apiV1Organization429Error1Value;

    private readonly Optional<ApiV1Organization500Error1> _apiV1Organization500Error1Value;

    private readonly Optional<ApiV1Organization502Error1> _apiV1Organization502Error1Value;

    private readonly Optional<ApiV1Organization503Error1> _apiV1Organization503Error1Value;

    private readonly Optional<ApiV1Organization504Error1> _apiV1Organization504Error1Value;

    private OrganizationGetOrganizationError(Optional<ApiV1Organization400Error1> apiV1Organization400Error1Value,
        Optional<ApiV1Organization401Error1> apiV1Organization401Error1Value,
        Optional<ApiV1Organization403Error1> apiV1Organization403Error1Value,
        Optional<ApiV1Organization404Error1> apiV1Organization404Error1Value,
        Optional<ApiV1Organization429Error1> apiV1Organization429Error1Value,
        Optional<ApiV1Organization500Error1> apiV1Organization500Error1Value,
        Optional<ApiV1Organization502Error1> apiV1Organization502Error1Value,
        Optional<ApiV1Organization503Error1> apiV1Organization503Error1Value,
        Optional<ApiV1Organization504Error1> apiV1Organization504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1Organization400Error1Value = apiV1Organization400Error1Value;
        _apiV1Organization401Error1Value = apiV1Organization401Error1Value;
        _apiV1Organization403Error1Value = apiV1Organization403Error1Value;
        _apiV1Organization404Error1Value = apiV1Organization404Error1Value;
        _apiV1Organization429Error1Value = apiV1Organization429Error1Value;
        _apiV1Organization500Error1Value = apiV1Organization500Error1Value;
        _apiV1Organization502Error1Value = apiV1Organization502Error1Value;
        _apiV1Organization503Error1Value = apiV1Organization503Error1Value;
        _apiV1Organization504Error1Value = apiV1Organization504Error1Value;
    }

    private static OrganizationGetOrganizationError AsApiV1Organization400Error1(ApiV1Organization400Error1 value) =>
        new(
            Optional<ApiV1Organization400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetOrganizationError AsApiV1Organization401Error1(ApiV1Organization401Error1 value) =>
        new(
            default,
            Optional<ApiV1Organization401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetOrganizationError AsApiV1Organization403Error1(ApiV1Organization403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1Organization403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetOrganizationError AsApiV1Organization404Error1(ApiV1Organization404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1Organization404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetOrganizationError AsApiV1Organization429Error1(ApiV1Organization429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1Organization429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetOrganizationError AsApiV1Organization500Error1(ApiV1Organization500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Organization500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static OrganizationGetOrganizationError AsApiV1Organization502Error1(ApiV1Organization502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Organization502Error1>.Some(value),
            default,
            default,
            default);

    private static OrganizationGetOrganizationError AsApiV1Organization503Error1(ApiV1Organization503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Organization503Error1>.Some(value),
            default,
            default);

    private static OrganizationGetOrganizationError AsApiV1Organization504Error1(ApiV1Organization504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1Organization504Error1>.Some(value),
            default);

    private static OrganizationGetOrganizationError AsFallback(RawError value) =>
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

    public bool TryGetApiV1Organization400Error1([NotNullWhen(true)] out ApiV1Organization400Error1? value) =>
        _apiV1Organization400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Organization401Error1([NotNullWhen(true)] out ApiV1Organization401Error1? value) =>
        _apiV1Organization401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Organization403Error1([NotNullWhen(true)] out ApiV1Organization403Error1? value) =>
        _apiV1Organization403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Organization404Error1([NotNullWhen(true)] out ApiV1Organization404Error1? value) =>
        _apiV1Organization404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Organization429Error1([NotNullWhen(true)] out ApiV1Organization429Error1? value) =>
        _apiV1Organization429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Organization500Error1([NotNullWhen(true)] out ApiV1Organization500Error1? value) =>
        _apiV1Organization500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Organization502Error1([NotNullWhen(true)] out ApiV1Organization502Error1? value) =>
        _apiV1Organization502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Organization503Error1([NotNullWhen(true)] out ApiV1Organization503Error1? value) =>
        _apiV1Organization503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Organization504Error1([NotNullWhen(true)] out ApiV1Organization504Error1? value) =>
        _apiV1Organization504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1Organization400Error1, TResult> onApiV1Organization400Error1,
        Func<ApiV1Organization401Error1, TResult> onApiV1Organization401Error1,
        Func<ApiV1Organization403Error1, TResult> onApiV1Organization403Error1,
        Func<ApiV1Organization404Error1, TResult> onApiV1Organization404Error1,
        Func<ApiV1Organization429Error1, TResult> onApiV1Organization429Error1,
        Func<ApiV1Organization500Error1, TResult> onApiV1Organization500Error1,
        Func<ApiV1Organization502Error1, TResult> onApiV1Organization502Error1,
        Func<ApiV1Organization503Error1, TResult> onApiV1Organization503Error1,
        Func<ApiV1Organization504Error1, TResult> onApiV1Organization504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1Organization400Error1(
                out var apiV1Organization400Error1Value) => onApiV1Organization400Error1(
                apiV1Organization400Error1Value),
            _ when TryGetApiV1Organization401Error1(
                out var apiV1Organization401Error1Value) => onApiV1Organization401Error1(
                apiV1Organization401Error1Value),
            _ when TryGetApiV1Organization403Error1(
                out var apiV1Organization403Error1Value) => onApiV1Organization403Error1(
                apiV1Organization403Error1Value),
            _ when TryGetApiV1Organization404Error1(
                out var apiV1Organization404Error1Value) => onApiV1Organization404Error1(
                apiV1Organization404Error1Value),
            _ when TryGetApiV1Organization429Error1(
                out var apiV1Organization429Error1Value) => onApiV1Organization429Error1(
                apiV1Organization429Error1Value),
            _ when TryGetApiV1Organization500Error1(
                out var apiV1Organization500Error1Value) => onApiV1Organization500Error1(
                apiV1Organization500Error1Value),
            _ when TryGetApiV1Organization502Error1(
                out var apiV1Organization502Error1Value) => onApiV1Organization502Error1(
                apiV1Organization502Error1Value),
            _ when TryGetApiV1Organization503Error1(
                out var apiV1Organization503Error1Value) => onApiV1Organization503Error1(
                apiV1Organization503Error1Value),
            _ when TryGetApiV1Organization504Error1(
                out var apiV1Organization504Error1Value) => onApiV1Organization504Error1(
                apiV1Organization504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(OrganizationGetOrganizationError)} holds no value.")
        };

    public void Match(Action<ApiV1Organization400Error1> onApiV1Organization400Error1,
        Action<ApiV1Organization401Error1> onApiV1Organization401Error1,
        Action<ApiV1Organization403Error1> onApiV1Organization403Error1,
        Action<ApiV1Organization404Error1> onApiV1Organization404Error1,
        Action<ApiV1Organization429Error1> onApiV1Organization429Error1,
        Action<ApiV1Organization500Error1> onApiV1Organization500Error1,
        Action<ApiV1Organization502Error1> onApiV1Organization502Error1,
        Action<ApiV1Organization503Error1> onApiV1Organization503Error1,
        Action<ApiV1Organization504Error1> onApiV1Organization504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1Organization400Error1(out var apiV1Organization400Error1Value)) onApiV1Organization400Error1(
            apiV1Organization400Error1Value);
        else if (TryGetApiV1Organization401Error1(
            out var apiV1Organization401Error1Value)) onApiV1Organization401Error1(apiV1Organization401Error1Value);
        else if (TryGetApiV1Organization403Error1(
            out var apiV1Organization403Error1Value)) onApiV1Organization403Error1(apiV1Organization403Error1Value);
        else if (TryGetApiV1Organization404Error1(
            out var apiV1Organization404Error1Value)) onApiV1Organization404Error1(apiV1Organization404Error1Value);
        else if (TryGetApiV1Organization429Error1(
            out var apiV1Organization429Error1Value)) onApiV1Organization429Error1(apiV1Organization429Error1Value);
        else if (TryGetApiV1Organization500Error1(
            out var apiV1Organization500Error1Value)) onApiV1Organization500Error1(apiV1Organization500Error1Value);
        else if (TryGetApiV1Organization502Error1(
            out var apiV1Organization502Error1Value)) onApiV1Organization502Error1(apiV1Organization502Error1Value);
        else if (TryGetApiV1Organization503Error1(
            out var apiV1Organization503Error1Value)) onApiV1Organization503Error1(apiV1Organization503Error1Value);
        else if (TryGetApiV1Organization504Error1(
            out var apiV1Organization504Error1Value)) onApiV1Organization504Error1(apiV1Organization504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(OrganizationGetOrganizationError)} holds no value.");
    }

    private static Task<OrganizationGetOrganizationError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1Organization400Error1>().As(AsApiV1Organization400Error1),
            401 => response.Json<ApiV1Organization401Error1>().As(AsApiV1Organization401Error1),
            403 => response.Json<ApiV1Organization403Error1>().As(AsApiV1Organization403Error1),
            404 => response.Json<ApiV1Organization404Error1>().As(AsApiV1Organization404Error1),
            429 => response.Json<ApiV1Organization429Error1>().As(AsApiV1Organization429Error1),
            500 => response.Json<ApiV1Organization500Error1>().As(AsApiV1Organization500Error1),
            502 => response.Json<ApiV1Organization502Error1>().As(AsApiV1Organization502Error1),
            503 => response.Json<ApiV1Organization503Error1>().As(AsApiV1Organization503Error1),
            504 => response.Json<ApiV1Organization504Error1>().As(AsApiV1Organization504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<OrganizationGetOrganizationError> Response { get; } = new(Create);
}
