using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class ListReportTypesError : ApiError
{
    private readonly Optional<ReportsTypes400Error1> _reportsTypes400Error1Value;

    private readonly Optional<ReportsTypes403Error1> _reportsTypes403Error1Value;

    private readonly Optional<ReportsTypes404Error1> _reportsTypes404Error1Value;

    private readonly Optional<ReportsTypes500Error1> _reportsTypes500Error1Value;

    private ListReportTypesError(Optional<ReportsTypes400Error1> reportsTypes400Error1Value,
        Optional<ReportsTypes403Error1> reportsTypes403Error1Value,
        Optional<ReportsTypes404Error1> reportsTypes404Error1Value,
        Optional<ReportsTypes500Error1> reportsTypes500Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _reportsTypes400Error1Value = reportsTypes400Error1Value;
        _reportsTypes403Error1Value = reportsTypes403Error1Value;
        _reportsTypes404Error1Value = reportsTypes404Error1Value;
        _reportsTypes500Error1Value = reportsTypes500Error1Value;
    }

    private static ListReportTypesError AsReportsTypes400Error1(ReportsTypes400Error1 value) =>
        new(Optional<ReportsTypes400Error1>.Some(value), default, default, default, default);

    private static ListReportTypesError AsReportsTypes403Error1(ReportsTypes403Error1 value) =>
        new(default, Optional<ReportsTypes403Error1>.Some(value), default, default, default);

    private static ListReportTypesError AsReportsTypes404Error1(ReportsTypes404Error1 value) =>
        new(default, default, Optional<ReportsTypes404Error1>.Some(value), default, default);

    private static ListReportTypesError AsReportsTypes500Error1(ReportsTypes500Error1 value) =>
        new(default, default, default, Optional<ReportsTypes500Error1>.Some(value), default);

    private static ListReportTypesError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetReportsTypes400Error1([NotNullWhen(true)] out ReportsTypes400Error1? value) =>
        _reportsTypes400Error1Value.TryGetValue(out value);

    public bool TryGetReportsTypes403Error1([NotNullWhen(true)] out ReportsTypes403Error1? value) =>
        _reportsTypes403Error1Value.TryGetValue(out value);

    public bool TryGetReportsTypes404Error1([NotNullWhen(true)] out ReportsTypes404Error1? value) =>
        _reportsTypes404Error1Value.TryGetValue(out value);

    public bool TryGetReportsTypes500Error1([NotNullWhen(true)] out ReportsTypes500Error1? value) =>
        _reportsTypes500Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ReportsTypes400Error1, TResult> onReportsTypes400Error1,
        Func<ReportsTypes403Error1, TResult> onReportsTypes403Error1,
        Func<ReportsTypes404Error1, TResult> onReportsTypes404Error1,
        Func<ReportsTypes500Error1, TResult> onReportsTypes500Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetReportsTypes400Error1(out var reportsTypes400Error1Value) => onReportsTypes400Error1(
                reportsTypes400Error1Value),
            _ when TryGetReportsTypes403Error1(out var reportsTypes403Error1Value) => onReportsTypes403Error1(
                reportsTypes403Error1Value),
            _ when TryGetReportsTypes404Error1(out var reportsTypes404Error1Value) => onReportsTypes404Error1(
                reportsTypes404Error1Value),
            _ when TryGetReportsTypes500Error1(out var reportsTypes500Error1Value) => onReportsTypes500Error1(
                reportsTypes500Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListReportTypesError)} holds no value.")
        };

    public void Match(Action<ReportsTypes400Error1> onReportsTypes400Error1,
        Action<ReportsTypes403Error1> onReportsTypes403Error1,
        Action<ReportsTypes404Error1> onReportsTypes404Error1,
        Action<ReportsTypes500Error1> onReportsTypes500Error1,
        Action<RawError> otherwise)
    {
        if (TryGetReportsTypes400Error1(out var reportsTypes400Error1Value)) onReportsTypes400Error1(
            reportsTypes400Error1Value);
        else if (TryGetReportsTypes403Error1(out var reportsTypes403Error1Value)) onReportsTypes403Error1(
            reportsTypes403Error1Value);
        else if (TryGetReportsTypes404Error1(out var reportsTypes404Error1Value)) onReportsTypes404Error1(
            reportsTypes404Error1Value);
        else if (TryGetReportsTypes500Error1(out var reportsTypes500Error1Value)) onReportsTypes500Error1(
            reportsTypes500Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListReportTypesError)} holds no value.");
    }

    private static Task<ListReportTypesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ReportsTypes400Error1>().As(AsReportsTypes400Error1),
            403 => response.Json<ReportsTypes403Error1>().As(AsReportsTypes403Error1),
            404 => response.Json<ReportsTypes404Error1>().As(AsReportsTypes404Error1),
            500 => response.Json<ReportsTypes500Error1>().As(AsReportsTypes500Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListReportTypesError> Response { get; } = new(Create);
}
