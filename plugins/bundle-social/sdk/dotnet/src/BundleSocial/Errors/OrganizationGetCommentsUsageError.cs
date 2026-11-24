using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class OrganizationGetCommentsUsageError : ApiError
{
    private readonly Optional<ApiV1OrganizationUsageComments400Error1> _apiV1OrganizationUsageComments400Error1Value;

    private readonly Optional<ApiV1OrganizationUsageComments401Error1> _apiV1OrganizationUsageComments401Error1Value;

    private readonly Optional<ApiV1OrganizationUsageComments403Error1> _apiV1OrganizationUsageComments403Error1Value;

    private readonly Optional<ApiV1OrganizationUsageComments404Error1> _apiV1OrganizationUsageComments404Error1Value;

    private readonly Optional<ApiV1OrganizationUsageComments429Error1> _apiV1OrganizationUsageComments429Error1Value;

    private readonly Optional<ApiV1OrganizationUsageComments500Error1> _apiV1OrganizationUsageComments500Error1Value;

    private readonly Optional<ApiV1OrganizationUsageComments502Error1> _apiV1OrganizationUsageComments502Error1Value;

    private readonly Optional<ApiV1OrganizationUsageComments503Error1> _apiV1OrganizationUsageComments503Error1Value;

    private readonly Optional<ApiV1OrganizationUsageComments504Error1> _apiV1OrganizationUsageComments504Error1Value;

    private OrganizationGetCommentsUsageError(Optional<ApiV1OrganizationUsageComments400Error1> apiV1OrganizationUsageComments400Error1Value,
        Optional<ApiV1OrganizationUsageComments401Error1> apiV1OrganizationUsageComments401Error1Value,
        Optional<ApiV1OrganizationUsageComments403Error1> apiV1OrganizationUsageComments403Error1Value,
        Optional<ApiV1OrganizationUsageComments404Error1> apiV1OrganizationUsageComments404Error1Value,
        Optional<ApiV1OrganizationUsageComments429Error1> apiV1OrganizationUsageComments429Error1Value,
        Optional<ApiV1OrganizationUsageComments500Error1> apiV1OrganizationUsageComments500Error1Value,
        Optional<ApiV1OrganizationUsageComments502Error1> apiV1OrganizationUsageComments502Error1Value,
        Optional<ApiV1OrganizationUsageComments503Error1> apiV1OrganizationUsageComments503Error1Value,
        Optional<ApiV1OrganizationUsageComments504Error1> apiV1OrganizationUsageComments504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1OrganizationUsageComments400Error1Value = apiV1OrganizationUsageComments400Error1Value;
        _apiV1OrganizationUsageComments401Error1Value = apiV1OrganizationUsageComments401Error1Value;
        _apiV1OrganizationUsageComments403Error1Value = apiV1OrganizationUsageComments403Error1Value;
        _apiV1OrganizationUsageComments404Error1Value = apiV1OrganizationUsageComments404Error1Value;
        _apiV1OrganizationUsageComments429Error1Value = apiV1OrganizationUsageComments429Error1Value;
        _apiV1OrganizationUsageComments500Error1Value = apiV1OrganizationUsageComments500Error1Value;
        _apiV1OrganizationUsageComments502Error1Value = apiV1OrganizationUsageComments502Error1Value;
        _apiV1OrganizationUsageComments503Error1Value = apiV1OrganizationUsageComments503Error1Value;
        _apiV1OrganizationUsageComments504Error1Value = apiV1OrganizationUsageComments504Error1Value;
    }

    private static OrganizationGetCommentsUsageError AsApiV1OrganizationUsageComments400Error1(ApiV1OrganizationUsageComments400Error1 value) =>
        new(
            Optional<ApiV1OrganizationUsageComments400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetCommentsUsageError AsApiV1OrganizationUsageComments401Error1(ApiV1OrganizationUsageComments401Error1 value) =>
        new(
            default,
            Optional<ApiV1OrganizationUsageComments401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetCommentsUsageError AsApiV1OrganizationUsageComments403Error1(ApiV1OrganizationUsageComments403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1OrganizationUsageComments403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetCommentsUsageError AsApiV1OrganizationUsageComments404Error1(ApiV1OrganizationUsageComments404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageComments404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetCommentsUsageError AsApiV1OrganizationUsageComments429Error1(ApiV1OrganizationUsageComments429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageComments429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetCommentsUsageError AsApiV1OrganizationUsageComments500Error1(ApiV1OrganizationUsageComments500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageComments500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static OrganizationGetCommentsUsageError AsApiV1OrganizationUsageComments502Error1(ApiV1OrganizationUsageComments502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageComments502Error1>.Some(value),
            default,
            default,
            default);

    private static OrganizationGetCommentsUsageError AsApiV1OrganizationUsageComments503Error1(ApiV1OrganizationUsageComments503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageComments503Error1>.Some(value),
            default,
            default);

    private static OrganizationGetCommentsUsageError AsApiV1OrganizationUsageComments504Error1(ApiV1OrganizationUsageComments504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageComments504Error1>.Some(value),
            default);

    private static OrganizationGetCommentsUsageError AsFallback(RawError value) =>
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

    public bool TryGetApiV1OrganizationUsageComments400Error1([NotNullWhen(true)] out ApiV1OrganizationUsageComments400Error1? value) =>
        _apiV1OrganizationUsageComments400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageComments401Error1([NotNullWhen(true)] out ApiV1OrganizationUsageComments401Error1? value) =>
        _apiV1OrganizationUsageComments401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageComments403Error1([NotNullWhen(true)] out ApiV1OrganizationUsageComments403Error1? value) =>
        _apiV1OrganizationUsageComments403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageComments404Error1([NotNullWhen(true)] out ApiV1OrganizationUsageComments404Error1? value) =>
        _apiV1OrganizationUsageComments404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageComments429Error1([NotNullWhen(true)] out ApiV1OrganizationUsageComments429Error1? value) =>
        _apiV1OrganizationUsageComments429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageComments500Error1([NotNullWhen(true)] out ApiV1OrganizationUsageComments500Error1? value) =>
        _apiV1OrganizationUsageComments500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageComments502Error1([NotNullWhen(true)] out ApiV1OrganizationUsageComments502Error1? value) =>
        _apiV1OrganizationUsageComments502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageComments503Error1([NotNullWhen(true)] out ApiV1OrganizationUsageComments503Error1? value) =>
        _apiV1OrganizationUsageComments503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageComments504Error1([NotNullWhen(true)] out ApiV1OrganizationUsageComments504Error1? value) =>
        _apiV1OrganizationUsageComments504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1OrganizationUsageComments400Error1, TResult> onApiV1OrganizationUsageComments400Error1,
        Func<ApiV1OrganizationUsageComments401Error1, TResult> onApiV1OrganizationUsageComments401Error1,
        Func<ApiV1OrganizationUsageComments403Error1, TResult> onApiV1OrganizationUsageComments403Error1,
        Func<ApiV1OrganizationUsageComments404Error1, TResult> onApiV1OrganizationUsageComments404Error1,
        Func<ApiV1OrganizationUsageComments429Error1, TResult> onApiV1OrganizationUsageComments429Error1,
        Func<ApiV1OrganizationUsageComments500Error1, TResult> onApiV1OrganizationUsageComments500Error1,
        Func<ApiV1OrganizationUsageComments502Error1, TResult> onApiV1OrganizationUsageComments502Error1,
        Func<ApiV1OrganizationUsageComments503Error1, TResult> onApiV1OrganizationUsageComments503Error1,
        Func<ApiV1OrganizationUsageComments504Error1, TResult> onApiV1OrganizationUsageComments504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1OrganizationUsageComments400Error1(
                out var apiV1OrganizationUsageComments400Error1Value) => onApiV1OrganizationUsageComments400Error1(
                apiV1OrganizationUsageComments400Error1Value),
            _ when TryGetApiV1OrganizationUsageComments401Error1(
                out var apiV1OrganizationUsageComments401Error1Value) => onApiV1OrganizationUsageComments401Error1(
                apiV1OrganizationUsageComments401Error1Value),
            _ when TryGetApiV1OrganizationUsageComments403Error1(
                out var apiV1OrganizationUsageComments403Error1Value) => onApiV1OrganizationUsageComments403Error1(
                apiV1OrganizationUsageComments403Error1Value),
            _ when TryGetApiV1OrganizationUsageComments404Error1(
                out var apiV1OrganizationUsageComments404Error1Value) => onApiV1OrganizationUsageComments404Error1(
                apiV1OrganizationUsageComments404Error1Value),
            _ when TryGetApiV1OrganizationUsageComments429Error1(
                out var apiV1OrganizationUsageComments429Error1Value) => onApiV1OrganizationUsageComments429Error1(
                apiV1OrganizationUsageComments429Error1Value),
            _ when TryGetApiV1OrganizationUsageComments500Error1(
                out var apiV1OrganizationUsageComments500Error1Value) => onApiV1OrganizationUsageComments500Error1(
                apiV1OrganizationUsageComments500Error1Value),
            _ when TryGetApiV1OrganizationUsageComments502Error1(
                out var apiV1OrganizationUsageComments502Error1Value) => onApiV1OrganizationUsageComments502Error1(
                apiV1OrganizationUsageComments502Error1Value),
            _ when TryGetApiV1OrganizationUsageComments503Error1(
                out var apiV1OrganizationUsageComments503Error1Value) => onApiV1OrganizationUsageComments503Error1(
                apiV1OrganizationUsageComments503Error1Value),
            _ when TryGetApiV1OrganizationUsageComments504Error1(
                out var apiV1OrganizationUsageComments504Error1Value) => onApiV1OrganizationUsageComments504Error1(
                apiV1OrganizationUsageComments504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(OrganizationGetCommentsUsageError)} holds no value.")
        };

    public void Match(Action<ApiV1OrganizationUsageComments400Error1> onApiV1OrganizationUsageComments400Error1,
        Action<ApiV1OrganizationUsageComments401Error1> onApiV1OrganizationUsageComments401Error1,
        Action<ApiV1OrganizationUsageComments403Error1> onApiV1OrganizationUsageComments403Error1,
        Action<ApiV1OrganizationUsageComments404Error1> onApiV1OrganizationUsageComments404Error1,
        Action<ApiV1OrganizationUsageComments429Error1> onApiV1OrganizationUsageComments429Error1,
        Action<ApiV1OrganizationUsageComments500Error1> onApiV1OrganizationUsageComments500Error1,
        Action<ApiV1OrganizationUsageComments502Error1> onApiV1OrganizationUsageComments502Error1,
        Action<ApiV1OrganizationUsageComments503Error1> onApiV1OrganizationUsageComments503Error1,
        Action<ApiV1OrganizationUsageComments504Error1> onApiV1OrganizationUsageComments504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1OrganizationUsageComments400Error1(
            out var apiV1OrganizationUsageComments400Error1Value)) onApiV1OrganizationUsageComments400Error1(
            apiV1OrganizationUsageComments400Error1Value);
        else if (TryGetApiV1OrganizationUsageComments401Error1(
            out var apiV1OrganizationUsageComments401Error1Value)) onApiV1OrganizationUsageComments401Error1(
            apiV1OrganizationUsageComments401Error1Value);
        else if (TryGetApiV1OrganizationUsageComments403Error1(
            out var apiV1OrganizationUsageComments403Error1Value)) onApiV1OrganizationUsageComments403Error1(
            apiV1OrganizationUsageComments403Error1Value);
        else if (TryGetApiV1OrganizationUsageComments404Error1(
            out var apiV1OrganizationUsageComments404Error1Value)) onApiV1OrganizationUsageComments404Error1(
            apiV1OrganizationUsageComments404Error1Value);
        else if (TryGetApiV1OrganizationUsageComments429Error1(
            out var apiV1OrganizationUsageComments429Error1Value)) onApiV1OrganizationUsageComments429Error1(
            apiV1OrganizationUsageComments429Error1Value);
        else if (TryGetApiV1OrganizationUsageComments500Error1(
            out var apiV1OrganizationUsageComments500Error1Value)) onApiV1OrganizationUsageComments500Error1(
            apiV1OrganizationUsageComments500Error1Value);
        else if (TryGetApiV1OrganizationUsageComments502Error1(
            out var apiV1OrganizationUsageComments502Error1Value)) onApiV1OrganizationUsageComments502Error1(
            apiV1OrganizationUsageComments502Error1Value);
        else if (TryGetApiV1OrganizationUsageComments503Error1(
            out var apiV1OrganizationUsageComments503Error1Value)) onApiV1OrganizationUsageComments503Error1(
            apiV1OrganizationUsageComments503Error1Value);
        else if (TryGetApiV1OrganizationUsageComments504Error1(
            out var apiV1OrganizationUsageComments504Error1Value)) onApiV1OrganizationUsageComments504Error1(
            apiV1OrganizationUsageComments504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(OrganizationGetCommentsUsageError)} holds no value.");
    }

    private static Task<OrganizationGetCommentsUsageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1OrganizationUsageComments400Error1>().As(
                AsApiV1OrganizationUsageComments400Error1),
            401 => response.Json<ApiV1OrganizationUsageComments401Error1>().As(
                AsApiV1OrganizationUsageComments401Error1),
            403 => response.Json<ApiV1OrganizationUsageComments403Error1>().As(
                AsApiV1OrganizationUsageComments403Error1),
            404 => response.Json<ApiV1OrganizationUsageComments404Error1>().As(
                AsApiV1OrganizationUsageComments404Error1),
            429 => response.Json<ApiV1OrganizationUsageComments429Error1>().As(
                AsApiV1OrganizationUsageComments429Error1),
            500 => response.Json<ApiV1OrganizationUsageComments500Error1>().As(
                AsApiV1OrganizationUsageComments500Error1),
            502 => response.Json<ApiV1OrganizationUsageComments502Error1>().As(
                AsApiV1OrganizationUsageComments502Error1),
            503 => response.Json<ApiV1OrganizationUsageComments503Error1>().As(
                AsApiV1OrganizationUsageComments503Error1),
            504 => response.Json<ApiV1OrganizationUsageComments504Error1>().As(
                AsApiV1OrganizationUsageComments504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<OrganizationGetCommentsUsageError> Response { get; } = new(Create);
}
