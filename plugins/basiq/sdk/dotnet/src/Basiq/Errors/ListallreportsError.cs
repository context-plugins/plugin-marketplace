using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class ListallreportsError : ApiError
{
    private readonly Optional<Reports400Error1> _reports400Error1Value;

    private readonly Optional<Reports403Error21> _reports403Error21Value;

    private readonly Optional<Reports404Error21> _reports404Error21Value;

    private readonly Optional<Reports500Error21> _reports500Error21Value;

    private ListallreportsError(Optional<Reports400Error1> reports400Error1Value,
        Optional<Reports403Error21> reports403Error21Value,
        Optional<Reports404Error21> reports404Error21Value,
        Optional<Reports500Error21> reports500Error21Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _reports400Error1Value = reports400Error1Value;
        _reports403Error21Value = reports403Error21Value;
        _reports404Error21Value = reports404Error21Value;
        _reports500Error21Value = reports500Error21Value;
    }

    private static ListallreportsError AsReports400Error1(Reports400Error1 value) =>
        new(Optional<Reports400Error1>.Some(value), default, default, default, default);

    private static ListallreportsError AsReports403Error21(Reports403Error21 value) =>
        new(default, Optional<Reports403Error21>.Some(value), default, default, default);

    private static ListallreportsError AsReports404Error21(Reports404Error21 value) =>
        new(default, default, Optional<Reports404Error21>.Some(value), default, default);

    private static ListallreportsError AsReports500Error21(Reports500Error21 value) =>
        new(default, default, default, Optional<Reports500Error21>.Some(value), default);

    private static ListallreportsError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetReports400Error1([NotNullWhen(true)] out Reports400Error1? value) =>
        _reports400Error1Value.TryGetValue(out value);

    public bool TryGetReports403Error21([NotNullWhen(true)] out Reports403Error21? value) =>
        _reports403Error21Value.TryGetValue(out value);

    public bool TryGetReports404Error21([NotNullWhen(true)] out Reports404Error21? value) =>
        _reports404Error21Value.TryGetValue(out value);

    public bool TryGetReports500Error21([NotNullWhen(true)] out Reports500Error21? value) =>
        _reports500Error21Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<Reports400Error1, TResult> onReports400Error1,
        Func<Reports403Error21, TResult> onReports403Error21,
        Func<Reports404Error21, TResult> onReports404Error21,
        Func<Reports500Error21, TResult> onReports500Error21,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetReports400Error1(out var reports400Error1Value) => onReports400Error1(reports400Error1Value),
            _ when TryGetReports403Error21(out var reports403Error21Value) => onReports403Error21(
                reports403Error21Value),
            _ when TryGetReports404Error21(out var reports404Error21Value) => onReports404Error21(
                reports404Error21Value),
            _ when TryGetReports500Error21(out var reports500Error21Value) => onReports500Error21(
                reports500Error21Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListallreportsError)} holds no value.")
        };

    public void Match(Action<Reports400Error1> onReports400Error1,
        Action<Reports403Error21> onReports403Error21,
        Action<Reports404Error21> onReports404Error21,
        Action<Reports500Error21> onReports500Error21,
        Action<RawError> otherwise)
    {
        if (TryGetReports400Error1(out var reports400Error1Value)) onReports400Error1(reports400Error1Value);
        else if (TryGetReports403Error21(out var reports403Error21Value)) onReports403Error21(reports403Error21Value);
        else if (TryGetReports404Error21(out var reports404Error21Value)) onReports404Error21(reports404Error21Value);
        else if (TryGetReports500Error21(out var reports500Error21Value)) onReports500Error21(reports500Error21Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListallreportsError)} holds no value.");
    }

    private static Task<ListallreportsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Reports400Error1>().As(AsReports400Error1),
            403 => response.Json<Reports403Error21>().As(AsReports403Error21),
            404 => response.Json<Reports404Error21>().As(AsReports404Error21),
            500 => response.Json<Reports500Error21>().As(AsReports500Error21),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListallreportsError> Response { get; } = new(Create);
}
