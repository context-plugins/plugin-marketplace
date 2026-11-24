using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using BundleSocial.Core.ErrorResponse;
using BundleSocial.Core.Models;
using BundleSocial.Models;

namespace BundleSocial.Errors;

public sealed class OrganizationGetMessagesUsageError : ApiError
{
    private readonly Optional<ApiV1OrganizationUsageMessages400Error1> _apiV1OrganizationUsageMessages400Error1Value;

    private readonly Optional<ApiV1OrganizationUsageMessages401Error1> _apiV1OrganizationUsageMessages401Error1Value;

    private readonly Optional<ApiV1OrganizationUsageMessages403Error1> _apiV1OrganizationUsageMessages403Error1Value;

    private readonly Optional<ApiV1OrganizationUsageMessages404Error1> _apiV1OrganizationUsageMessages404Error1Value;

    private readonly Optional<ApiV1OrganizationUsageMessages429Error1> _apiV1OrganizationUsageMessages429Error1Value;

    private readonly Optional<ApiV1OrganizationUsageMessages500Error1> _apiV1OrganizationUsageMessages500Error1Value;

    private readonly Optional<ApiV1OrganizationUsageMessages502Error1> _apiV1OrganizationUsageMessages502Error1Value;

    private readonly Optional<ApiV1OrganizationUsageMessages503Error1> _apiV1OrganizationUsageMessages503Error1Value;

    private readonly Optional<ApiV1OrganizationUsageMessages504Error1> _apiV1OrganizationUsageMessages504Error1Value;

    private OrganizationGetMessagesUsageError(Optional<ApiV1OrganizationUsageMessages400Error1> apiV1OrganizationUsageMessages400Error1Value,
        Optional<ApiV1OrganizationUsageMessages401Error1> apiV1OrganizationUsageMessages401Error1Value,
        Optional<ApiV1OrganizationUsageMessages403Error1> apiV1OrganizationUsageMessages403Error1Value,
        Optional<ApiV1OrganizationUsageMessages404Error1> apiV1OrganizationUsageMessages404Error1Value,
        Optional<ApiV1OrganizationUsageMessages429Error1> apiV1OrganizationUsageMessages429Error1Value,
        Optional<ApiV1OrganizationUsageMessages500Error1> apiV1OrganizationUsageMessages500Error1Value,
        Optional<ApiV1OrganizationUsageMessages502Error1> apiV1OrganizationUsageMessages502Error1Value,
        Optional<ApiV1OrganizationUsageMessages503Error1> apiV1OrganizationUsageMessages503Error1Value,
        Optional<ApiV1OrganizationUsageMessages504Error1> apiV1OrganizationUsageMessages504Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1OrganizationUsageMessages400Error1Value = apiV1OrganizationUsageMessages400Error1Value;
        _apiV1OrganizationUsageMessages401Error1Value = apiV1OrganizationUsageMessages401Error1Value;
        _apiV1OrganizationUsageMessages403Error1Value = apiV1OrganizationUsageMessages403Error1Value;
        _apiV1OrganizationUsageMessages404Error1Value = apiV1OrganizationUsageMessages404Error1Value;
        _apiV1OrganizationUsageMessages429Error1Value = apiV1OrganizationUsageMessages429Error1Value;
        _apiV1OrganizationUsageMessages500Error1Value = apiV1OrganizationUsageMessages500Error1Value;
        _apiV1OrganizationUsageMessages502Error1Value = apiV1OrganizationUsageMessages502Error1Value;
        _apiV1OrganizationUsageMessages503Error1Value = apiV1OrganizationUsageMessages503Error1Value;
        _apiV1OrganizationUsageMessages504Error1Value = apiV1OrganizationUsageMessages504Error1Value;
    }

    private static OrganizationGetMessagesUsageError AsApiV1OrganizationUsageMessages400Error1(ApiV1OrganizationUsageMessages400Error1 value) =>
        new(
            Optional<ApiV1OrganizationUsageMessages400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetMessagesUsageError AsApiV1OrganizationUsageMessages401Error1(ApiV1OrganizationUsageMessages401Error1 value) =>
        new(
            default,
            Optional<ApiV1OrganizationUsageMessages401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetMessagesUsageError AsApiV1OrganizationUsageMessages403Error1(ApiV1OrganizationUsageMessages403Error1 value) =>
        new(
            default,
            default,
            Optional<ApiV1OrganizationUsageMessages403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetMessagesUsageError AsApiV1OrganizationUsageMessages404Error1(ApiV1OrganizationUsageMessages404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageMessages404Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetMessagesUsageError AsApiV1OrganizationUsageMessages429Error1(ApiV1OrganizationUsageMessages429Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageMessages429Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static OrganizationGetMessagesUsageError AsApiV1OrganizationUsageMessages500Error1(ApiV1OrganizationUsageMessages500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageMessages500Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static OrganizationGetMessagesUsageError AsApiV1OrganizationUsageMessages502Error1(ApiV1OrganizationUsageMessages502Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageMessages502Error1>.Some(value),
            default,
            default,
            default);

    private static OrganizationGetMessagesUsageError AsApiV1OrganizationUsageMessages503Error1(ApiV1OrganizationUsageMessages503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageMessages503Error1>.Some(value),
            default,
            default);

    private static OrganizationGetMessagesUsageError AsApiV1OrganizationUsageMessages504Error1(ApiV1OrganizationUsageMessages504Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<ApiV1OrganizationUsageMessages504Error1>.Some(value),
            default);

    private static OrganizationGetMessagesUsageError AsFallback(RawError value) =>
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

    public bool TryGetApiV1OrganizationUsageMessages400Error1([NotNullWhen(true)] out ApiV1OrganizationUsageMessages400Error1? value) =>
        _apiV1OrganizationUsageMessages400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageMessages401Error1([NotNullWhen(true)] out ApiV1OrganizationUsageMessages401Error1? value) =>
        _apiV1OrganizationUsageMessages401Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageMessages403Error1([NotNullWhen(true)] out ApiV1OrganizationUsageMessages403Error1? value) =>
        _apiV1OrganizationUsageMessages403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageMessages404Error1([NotNullWhen(true)] out ApiV1OrganizationUsageMessages404Error1? value) =>
        _apiV1OrganizationUsageMessages404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageMessages429Error1([NotNullWhen(true)] out ApiV1OrganizationUsageMessages429Error1? value) =>
        _apiV1OrganizationUsageMessages429Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageMessages500Error1([NotNullWhen(true)] out ApiV1OrganizationUsageMessages500Error1? value) =>
        _apiV1OrganizationUsageMessages500Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageMessages502Error1([NotNullWhen(true)] out ApiV1OrganizationUsageMessages502Error1? value) =>
        _apiV1OrganizationUsageMessages502Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageMessages503Error1([NotNullWhen(true)] out ApiV1OrganizationUsageMessages503Error1? value) =>
        _apiV1OrganizationUsageMessages503Error1Value.TryGetValue(out value);

    public bool TryGetApiV1OrganizationUsageMessages504Error1([NotNullWhen(true)] out ApiV1OrganizationUsageMessages504Error1? value) =>
        _apiV1OrganizationUsageMessages504Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1OrganizationUsageMessages400Error1, TResult> onApiV1OrganizationUsageMessages400Error1,
        Func<ApiV1OrganizationUsageMessages401Error1, TResult> onApiV1OrganizationUsageMessages401Error1,
        Func<ApiV1OrganizationUsageMessages403Error1, TResult> onApiV1OrganizationUsageMessages403Error1,
        Func<ApiV1OrganizationUsageMessages404Error1, TResult> onApiV1OrganizationUsageMessages404Error1,
        Func<ApiV1OrganizationUsageMessages429Error1, TResult> onApiV1OrganizationUsageMessages429Error1,
        Func<ApiV1OrganizationUsageMessages500Error1, TResult> onApiV1OrganizationUsageMessages500Error1,
        Func<ApiV1OrganizationUsageMessages502Error1, TResult> onApiV1OrganizationUsageMessages502Error1,
        Func<ApiV1OrganizationUsageMessages503Error1, TResult> onApiV1OrganizationUsageMessages503Error1,
        Func<ApiV1OrganizationUsageMessages504Error1, TResult> onApiV1OrganizationUsageMessages504Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1OrganizationUsageMessages400Error1(
                out var apiV1OrganizationUsageMessages400Error1Value) => onApiV1OrganizationUsageMessages400Error1(
                apiV1OrganizationUsageMessages400Error1Value),
            _ when TryGetApiV1OrganizationUsageMessages401Error1(
                out var apiV1OrganizationUsageMessages401Error1Value) => onApiV1OrganizationUsageMessages401Error1(
                apiV1OrganizationUsageMessages401Error1Value),
            _ when TryGetApiV1OrganizationUsageMessages403Error1(
                out var apiV1OrganizationUsageMessages403Error1Value) => onApiV1OrganizationUsageMessages403Error1(
                apiV1OrganizationUsageMessages403Error1Value),
            _ when TryGetApiV1OrganizationUsageMessages404Error1(
                out var apiV1OrganizationUsageMessages404Error1Value) => onApiV1OrganizationUsageMessages404Error1(
                apiV1OrganizationUsageMessages404Error1Value),
            _ when TryGetApiV1OrganizationUsageMessages429Error1(
                out var apiV1OrganizationUsageMessages429Error1Value) => onApiV1OrganizationUsageMessages429Error1(
                apiV1OrganizationUsageMessages429Error1Value),
            _ when TryGetApiV1OrganizationUsageMessages500Error1(
                out var apiV1OrganizationUsageMessages500Error1Value) => onApiV1OrganizationUsageMessages500Error1(
                apiV1OrganizationUsageMessages500Error1Value),
            _ when TryGetApiV1OrganizationUsageMessages502Error1(
                out var apiV1OrganizationUsageMessages502Error1Value) => onApiV1OrganizationUsageMessages502Error1(
                apiV1OrganizationUsageMessages502Error1Value),
            _ when TryGetApiV1OrganizationUsageMessages503Error1(
                out var apiV1OrganizationUsageMessages503Error1Value) => onApiV1OrganizationUsageMessages503Error1(
                apiV1OrganizationUsageMessages503Error1Value),
            _ when TryGetApiV1OrganizationUsageMessages504Error1(
                out var apiV1OrganizationUsageMessages504Error1Value) => onApiV1OrganizationUsageMessages504Error1(
                apiV1OrganizationUsageMessages504Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(OrganizationGetMessagesUsageError)} holds no value.")
        };

    public void Match(Action<ApiV1OrganizationUsageMessages400Error1> onApiV1OrganizationUsageMessages400Error1,
        Action<ApiV1OrganizationUsageMessages401Error1> onApiV1OrganizationUsageMessages401Error1,
        Action<ApiV1OrganizationUsageMessages403Error1> onApiV1OrganizationUsageMessages403Error1,
        Action<ApiV1OrganizationUsageMessages404Error1> onApiV1OrganizationUsageMessages404Error1,
        Action<ApiV1OrganizationUsageMessages429Error1> onApiV1OrganizationUsageMessages429Error1,
        Action<ApiV1OrganizationUsageMessages500Error1> onApiV1OrganizationUsageMessages500Error1,
        Action<ApiV1OrganizationUsageMessages502Error1> onApiV1OrganizationUsageMessages502Error1,
        Action<ApiV1OrganizationUsageMessages503Error1> onApiV1OrganizationUsageMessages503Error1,
        Action<ApiV1OrganizationUsageMessages504Error1> onApiV1OrganizationUsageMessages504Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1OrganizationUsageMessages400Error1(
            out var apiV1OrganizationUsageMessages400Error1Value)) onApiV1OrganizationUsageMessages400Error1(
            apiV1OrganizationUsageMessages400Error1Value);
        else if (TryGetApiV1OrganizationUsageMessages401Error1(
            out var apiV1OrganizationUsageMessages401Error1Value)) onApiV1OrganizationUsageMessages401Error1(
            apiV1OrganizationUsageMessages401Error1Value);
        else if (TryGetApiV1OrganizationUsageMessages403Error1(
            out var apiV1OrganizationUsageMessages403Error1Value)) onApiV1OrganizationUsageMessages403Error1(
            apiV1OrganizationUsageMessages403Error1Value);
        else if (TryGetApiV1OrganizationUsageMessages404Error1(
            out var apiV1OrganizationUsageMessages404Error1Value)) onApiV1OrganizationUsageMessages404Error1(
            apiV1OrganizationUsageMessages404Error1Value);
        else if (TryGetApiV1OrganizationUsageMessages429Error1(
            out var apiV1OrganizationUsageMessages429Error1Value)) onApiV1OrganizationUsageMessages429Error1(
            apiV1OrganizationUsageMessages429Error1Value);
        else if (TryGetApiV1OrganizationUsageMessages500Error1(
            out var apiV1OrganizationUsageMessages500Error1Value)) onApiV1OrganizationUsageMessages500Error1(
            apiV1OrganizationUsageMessages500Error1Value);
        else if (TryGetApiV1OrganizationUsageMessages502Error1(
            out var apiV1OrganizationUsageMessages502Error1Value)) onApiV1OrganizationUsageMessages502Error1(
            apiV1OrganizationUsageMessages502Error1Value);
        else if (TryGetApiV1OrganizationUsageMessages503Error1(
            out var apiV1OrganizationUsageMessages503Error1Value)) onApiV1OrganizationUsageMessages503Error1(
            apiV1OrganizationUsageMessages503Error1Value);
        else if (TryGetApiV1OrganizationUsageMessages504Error1(
            out var apiV1OrganizationUsageMessages504Error1Value)) onApiV1OrganizationUsageMessages504Error1(
            apiV1OrganizationUsageMessages504Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(OrganizationGetMessagesUsageError)} holds no value.");
    }

    private static Task<OrganizationGetMessagesUsageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1OrganizationUsageMessages400Error1>().As(
                AsApiV1OrganizationUsageMessages400Error1),
            401 => response.Json<ApiV1OrganizationUsageMessages401Error1>().As(
                AsApiV1OrganizationUsageMessages401Error1),
            403 => response.Json<ApiV1OrganizationUsageMessages403Error1>().As(
                AsApiV1OrganizationUsageMessages403Error1),
            404 => response.Json<ApiV1OrganizationUsageMessages404Error1>().As(
                AsApiV1OrganizationUsageMessages404Error1),
            429 => response.Json<ApiV1OrganizationUsageMessages429Error1>().As(
                AsApiV1OrganizationUsageMessages429Error1),
            500 => response.Json<ApiV1OrganizationUsageMessages500Error1>().As(
                AsApiV1OrganizationUsageMessages500Error1),
            502 => response.Json<ApiV1OrganizationUsageMessages502Error1>().As(
                AsApiV1OrganizationUsageMessages502Error1),
            503 => response.Json<ApiV1OrganizationUsageMessages503Error1>().As(
                AsApiV1OrganizationUsageMessages503Error1),
            504 => response.Json<ApiV1OrganizationUsageMessages504Error1>().As(
                AsApiV1OrganizationUsageMessages504Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<OrganizationGetMessagesUsageError> Response { get; } = new(Create);
}
