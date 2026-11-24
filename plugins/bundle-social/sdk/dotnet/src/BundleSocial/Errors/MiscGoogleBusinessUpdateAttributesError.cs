using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class MiscGoogleBusinessUpdateAttributesError : ApiError
{
    private readonly Optional<ApiV1MiscGoogleBusinessLocationAttributes400Error1> _apiV1MiscGoogleBusinessLocationAttributes400Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationAttributes401Error1> _apiV1MiscGoogleBusinessLocationAttributes401Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationAttributes403Error1> _apiV1MiscGoogleBusinessLocationAttributes403Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationAttributes404Error1> _apiV1MiscGoogleBusinessLocationAttributes404Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationAttributes429Error1> _apiV1MiscGoogleBusinessLocationAttributes429Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationAttributes500Error1> _apiV1MiscGoogleBusinessLocationAttributes500Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationAttributes502Error1> _apiV1MiscGoogleBusinessLocationAttributes502Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationAttributes503Error1> _apiV1MiscGoogleBusinessLocationAttributes503Error1Value;

    private readonly Optional<ApiV1MiscGoogleBusinessLocationAttributes504Error1> _apiV1MiscGoogleBusinessLocationAttributes504Error1Value;

    private MiscGoogleBusinessUpdateAttributesError(Optional<ApiV1MiscGoogleBusinessLocationAttributes400Error1> apiV1MiscGoogleBusinessLocationAttributes400Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationAttributes401Error1> apiV1MiscGoogleBusinessLocationAttributes401Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationAttributes403Error1> apiV1MiscGoogleBusinessLocationAttributes403Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationAttributes404Error1> apiV1MiscGoogleBusinessLocationAttributes404Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationAttributes429Error1> apiV1MiscGoogleBusinessLocationAttributes429Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationAttributes500Error1> apiV1MiscGoogleBusinessLocationAttributes500Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationAttributes502Error1> apiV1MiscGoogleBusinessLocationAttributes502Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationAttributes503Error1> apiV1MiscGoogleBusinessLocationAttributes503Error1Value,
        Optional<ApiV1MiscGoogleBusinessLocationAttributes504Error1> apiV1MiscGoogleBusinessLocationAttributes504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1MiscGoogleBusinessLocationAttributes400Error1Value =
            apiV1MiscGoogleBusinessLocationAttributes400Error1Value;
        _apiV1MiscGoogleBusinessLocationAttributes401Error1Value =
            apiV1MiscGoogleBusinessLocationAttributes401Error1Value;
        _apiV1MiscGoogleBusinessLocationAttributes403Error1Value =
            apiV1MiscGoogleBusinessLocationAttributes403Error1Value;
        _apiV1MiscGoogleBusinessLocationAttributes404Error1Value =
            apiV1MiscGoogleBusinessLocationAttributes404Error1Value;
        _apiV1MiscGoogleBusinessLocationAttributes429Error1Value =
            apiV1MiscGoogleBusinessLocationAttributes429Error1Value;
        _apiV1MiscGoogleBusinessLocationAttributes500Error1Value =
            apiV1MiscGoogleBusinessLocationAttributes500Error1Value;
        _apiV1MiscGoogleBusinessLocationAttributes502Error1Value =
            apiV1MiscGoogleBusinessLocationAttributes502Error1Value;
        _apiV1MiscGoogleBusinessLocationAttributes503Error1Value =
            apiV1MiscGoogleBusinessLocationAttributes503Error1Value;
        _apiV1MiscGoogleBusinessLocationAttributes504Error1Value =
            apiV1MiscGoogleBusinessLocationAttributes504Error1Value;
    }

    private static MiscGoogleBusinessUpdateAttributesError AsApiV1MiscGoogleBusinessLocationAttributes400Error1(ApiV1MiscGoogleBusinessLocationAttributes400Error1 value) =>
        new(
            Optional<ApiV1MiscGoogleBusinessLocationAttributes400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateAttributesError AsApiV1MiscGoogleBusinessLocationAttributes401Error1(ApiV1MiscGoogleBusinessLocationAttributes401Error1 value) =>
        new(
            default,
            Optional<ApiV1MiscGoogleBusinessLocationAttributes401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateAttributesError AsApiV1MiscGoogleBusinessLocationAttributes403Error1(ApiV1MiscGoogleBusinessLocationAttributes403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationAttributes403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateAttributesError AsApiV1MiscGoogleBusinessLocationAttributes404Error1(ApiV1MiscGoogleBusinessLocationAttributes404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationAttributes404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateAttributesError AsApiV1MiscGoogleBusinessLocationAttributes429Error1(ApiV1MiscGoogleBusinessLocationAttributes429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationAttributes429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateAttributesError AsApiV1MiscGoogleBusinessLocationAttributes500Error1(ApiV1MiscGoogleBusinessLocationAttributes500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationAttributes500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateAttributesError AsApiV1MiscGoogleBusinessLocationAttributes502Error1(ApiV1MiscGoogleBusinessLocationAttributes502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationAttributes502Error1>.Some(value),
            default,
            default,
            default);

    private static MiscGoogleBusinessUpdateAttributesError AsApiV1MiscGoogleBusinessLocationAttributes503Error1(ApiV1MiscGoogleBusinessLocationAttributes503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationAttributes503Error1>.Some(value),
            default,
            default);

    private static MiscGoogleBusinessUpdateAttributesError AsApiV1MiscGoogleBusinessLocationAttributes504Error1(ApiV1MiscGoogleBusinessLocationAttributes504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1MiscGoogleBusinessLocationAttributes504Error1>.Some(value),
            default);

    private static MiscGoogleBusinessUpdateAttributesError AsFallback(RawError value) =>
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

    public bool TryGetApiV1MiscGoogleBusinessLocationAttributes400Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes400Error1? value) =>
        _apiV1MiscGoogleBusinessLocationAttributes400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationAttributes401Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes401Error1? value) =>
        _apiV1MiscGoogleBusinessLocationAttributes401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationAttributes403Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes403Error1? value) =>
        _apiV1MiscGoogleBusinessLocationAttributes403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationAttributes404Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes404Error1? value) =>
        _apiV1MiscGoogleBusinessLocationAttributes404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationAttributes429Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes429Error1? value) =>
        _apiV1MiscGoogleBusinessLocationAttributes429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationAttributes500Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes500Error1? value) =>
        _apiV1MiscGoogleBusinessLocationAttributes500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationAttributes502Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes502Error1? value) =>
        _apiV1MiscGoogleBusinessLocationAttributes502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationAttributes503Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes503Error1? value) =>
        _apiV1MiscGoogleBusinessLocationAttributes503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1MiscGoogleBusinessLocationAttributes504Error1([NotNullWhen(true)] out ApiV1MiscGoogleBusinessLocationAttributes504Error1? value) =>
        _apiV1MiscGoogleBusinessLocationAttributes504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1MiscGoogleBusinessLocationAttributes400Error1, TResult> onApiV1MiscGoogleBusinessLocationAttributes400Error1,
        Func<ApiV1MiscGoogleBusinessLocationAttributes401Error1, TResult> onApiV1MiscGoogleBusinessLocationAttributes401Error1,
        Func<ApiV1MiscGoogleBusinessLocationAttributes403Error1, TResult> onApiV1MiscGoogleBusinessLocationAttributes403Error1,
        Func<ApiV1MiscGoogleBusinessLocationAttributes404Error1, TResult> onApiV1MiscGoogleBusinessLocationAttributes404Error1,
        Func<ApiV1MiscGoogleBusinessLocationAttributes429Error1, TResult> onApiV1MiscGoogleBusinessLocationAttributes429Error1,
        Func<ApiV1MiscGoogleBusinessLocationAttributes500Error1, TResult> onApiV1MiscGoogleBusinessLocationAttributes500Error1,
        Func<ApiV1MiscGoogleBusinessLocationAttributes502Error1, TResult> onApiV1MiscGoogleBusinessLocationAttributes502Error1,
        Func<ApiV1MiscGoogleBusinessLocationAttributes503Error1, TResult> onApiV1MiscGoogleBusinessLocationAttributes503Error1,
        Func<ApiV1MiscGoogleBusinessLocationAttributes504Error1, TResult> onApiV1MiscGoogleBusinessLocationAttributes504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1MiscGoogleBusinessLocationAttributes400Error1(
                out var apiV1MiscGoogleBusinessLocationAttributes400Error1Value) => onApiV1MiscGoogleBusinessLocationAttributes400Error1(
                apiV1MiscGoogleBusinessLocationAttributes400Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationAttributes401Error1(
                out var apiV1MiscGoogleBusinessLocationAttributes401Error1Value) => onApiV1MiscGoogleBusinessLocationAttributes401Error1(
                apiV1MiscGoogleBusinessLocationAttributes401Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationAttributes403Error1(
                out var apiV1MiscGoogleBusinessLocationAttributes403Error1Value) => onApiV1MiscGoogleBusinessLocationAttributes403Error1(
                apiV1MiscGoogleBusinessLocationAttributes403Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationAttributes404Error1(
                out var apiV1MiscGoogleBusinessLocationAttributes404Error1Value) => onApiV1MiscGoogleBusinessLocationAttributes404Error1(
                apiV1MiscGoogleBusinessLocationAttributes404Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationAttributes429Error1(
                out var apiV1MiscGoogleBusinessLocationAttributes429Error1Value) => onApiV1MiscGoogleBusinessLocationAttributes429Error1(
                apiV1MiscGoogleBusinessLocationAttributes429Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationAttributes500Error1(
                out var apiV1MiscGoogleBusinessLocationAttributes500Error1Value) => onApiV1MiscGoogleBusinessLocationAttributes500Error1(
                apiV1MiscGoogleBusinessLocationAttributes500Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationAttributes502Error1(
                out var apiV1MiscGoogleBusinessLocationAttributes502Error1Value) => onApiV1MiscGoogleBusinessLocationAttributes502Error1(
                apiV1MiscGoogleBusinessLocationAttributes502Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationAttributes503Error1(
                out var apiV1MiscGoogleBusinessLocationAttributes503Error1Value) => onApiV1MiscGoogleBusinessLocationAttributes503Error1(
                apiV1MiscGoogleBusinessLocationAttributes503Error1Value),
            _ when TryGetApiV1MiscGoogleBusinessLocationAttributes504Error1(
                out var apiV1MiscGoogleBusinessLocationAttributes504Error1Value) => onApiV1MiscGoogleBusinessLocationAttributes504Error1(
                apiV1MiscGoogleBusinessLocationAttributes504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(MiscGoogleBusinessUpdateAttributesError)} holds no value.")
        };

    public void Match(Action<ApiV1MiscGoogleBusinessLocationAttributes400Error1> onApiV1MiscGoogleBusinessLocationAttributes400Error1,
        Action<ApiV1MiscGoogleBusinessLocationAttributes401Error1> onApiV1MiscGoogleBusinessLocationAttributes401Error1,
        Action<ApiV1MiscGoogleBusinessLocationAttributes403Error1> onApiV1MiscGoogleBusinessLocationAttributes403Error1,
        Action<ApiV1MiscGoogleBusinessLocationAttributes404Error1> onApiV1MiscGoogleBusinessLocationAttributes404Error1,
        Action<ApiV1MiscGoogleBusinessLocationAttributes429Error1> onApiV1MiscGoogleBusinessLocationAttributes429Error1,
        Action<ApiV1MiscGoogleBusinessLocationAttributes500Error1> onApiV1MiscGoogleBusinessLocationAttributes500Error1,
        Action<ApiV1MiscGoogleBusinessLocationAttributes502Error1> onApiV1MiscGoogleBusinessLocationAttributes502Error1,
        Action<ApiV1MiscGoogleBusinessLocationAttributes503Error1> onApiV1MiscGoogleBusinessLocationAttributes503Error1,
        Action<ApiV1MiscGoogleBusinessLocationAttributes504Error1> onApiV1MiscGoogleBusinessLocationAttributes504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1MiscGoogleBusinessLocationAttributes400Error1(
            out var apiV1MiscGoogleBusinessLocationAttributes400Error1Value)) onApiV1MiscGoogleBusinessLocationAttributes400Error1(
            apiV1MiscGoogleBusinessLocationAttributes400Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationAttributes401Error1(
            out var apiV1MiscGoogleBusinessLocationAttributes401Error1Value)) onApiV1MiscGoogleBusinessLocationAttributes401Error1(
            apiV1MiscGoogleBusinessLocationAttributes401Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationAttributes403Error1(
            out var apiV1MiscGoogleBusinessLocationAttributes403Error1Value)) onApiV1MiscGoogleBusinessLocationAttributes403Error1(
            apiV1MiscGoogleBusinessLocationAttributes403Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationAttributes404Error1(
            out var apiV1MiscGoogleBusinessLocationAttributes404Error1Value)) onApiV1MiscGoogleBusinessLocationAttributes404Error1(
            apiV1MiscGoogleBusinessLocationAttributes404Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationAttributes429Error1(
            out var apiV1MiscGoogleBusinessLocationAttributes429Error1Value)) onApiV1MiscGoogleBusinessLocationAttributes429Error1(
            apiV1MiscGoogleBusinessLocationAttributes429Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationAttributes500Error1(
            out var apiV1MiscGoogleBusinessLocationAttributes500Error1Value)) onApiV1MiscGoogleBusinessLocationAttributes500Error1(
            apiV1MiscGoogleBusinessLocationAttributes500Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationAttributes502Error1(
            out var apiV1MiscGoogleBusinessLocationAttributes502Error1Value)) onApiV1MiscGoogleBusinessLocationAttributes502Error1(
            apiV1MiscGoogleBusinessLocationAttributes502Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationAttributes503Error1(
            out var apiV1MiscGoogleBusinessLocationAttributes503Error1Value)) onApiV1MiscGoogleBusinessLocationAttributes503Error1(
            apiV1MiscGoogleBusinessLocationAttributes503Error1Value);
        else if (TryGetApiV1MiscGoogleBusinessLocationAttributes504Error1(
            out var apiV1MiscGoogleBusinessLocationAttributes504Error1Value)) onApiV1MiscGoogleBusinessLocationAttributes504Error1(
            apiV1MiscGoogleBusinessLocationAttributes504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(MiscGoogleBusinessUpdateAttributesError)} holds no value.");
    }

    private static Task<MiscGoogleBusinessUpdateAttributesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1MiscGoogleBusinessLocationAttributes400Error1>().As(
                AsApiV1MiscGoogleBusinessLocationAttributes400Error1),
            401 => response.Json<ApiV1MiscGoogleBusinessLocationAttributes401Error1>().As(
                AsApiV1MiscGoogleBusinessLocationAttributes401Error1),
            403 => response.Json<ApiV1MiscGoogleBusinessLocationAttributes403Error1>().As(
                AsApiV1MiscGoogleBusinessLocationAttributes403Error1),
            404 => response.Json<ApiV1MiscGoogleBusinessLocationAttributes404Error1>().As(
                AsApiV1MiscGoogleBusinessLocationAttributes404Error1),
            429 => response.Json<ApiV1MiscGoogleBusinessLocationAttributes429Error1>().As(
                AsApiV1MiscGoogleBusinessLocationAttributes429Error1),
            500 => response.Json<ApiV1MiscGoogleBusinessLocationAttributes500Error1>().As(
                AsApiV1MiscGoogleBusinessLocationAttributes500Error1),
            502 => response.Json<ApiV1MiscGoogleBusinessLocationAttributes502Error1>().As(
                AsApiV1MiscGoogleBusinessLocationAttributes502Error1),
            503 => response.Json<ApiV1MiscGoogleBusinessLocationAttributes503Error1>().As(
                AsApiV1MiscGoogleBusinessLocationAttributes503Error1),
            504 => response.Json<ApiV1MiscGoogleBusinessLocationAttributes504Error1>().As(
                AsApiV1MiscGoogleBusinessLocationAttributes504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<MiscGoogleBusinessUpdateAttributesError> Response { get; } = new(Create);
}
