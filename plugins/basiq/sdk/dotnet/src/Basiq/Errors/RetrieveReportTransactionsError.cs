using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class RetrieveReportTransactionsError : ApiError
{
    private readonly Optional<ReportsTransactions400Error1> _reportsTransactions400Error1Value;

    private readonly Optional<ReportsTransactions403Error1> _reportsTransactions403Error1Value;

    private readonly Optional<ReportsTransactions404Error1> _reportsTransactions404Error1Value;

    private readonly Optional<ReportsTransactions500Error1> _reportsTransactions500Error1Value;

    private RetrieveReportTransactionsError(Optional<ReportsTransactions400Error1> reportsTransactions400Error1Value,
        Optional<ReportsTransactions403Error1> reportsTransactions403Error1Value,
        Optional<ReportsTransactions404Error1> reportsTransactions404Error1Value,
        Optional<ReportsTransactions500Error1> reportsTransactions500Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _reportsTransactions400Error1Value = reportsTransactions400Error1Value;
        _reportsTransactions403Error1Value = reportsTransactions403Error1Value;
        _reportsTransactions404Error1Value = reportsTransactions404Error1Value;
        _reportsTransactions500Error1Value = reportsTransactions500Error1Value;
    }

    private static RetrieveReportTransactionsError AsReportsTransactions400Error1(ReportsTransactions400Error1 value) =>
        new(Optional<ReportsTransactions400Error1>.Some(value), default, default, default, default);

    private static RetrieveReportTransactionsError AsReportsTransactions403Error1(ReportsTransactions403Error1 value) =>
        new(default, Optional<ReportsTransactions403Error1>.Some(value), default, default, default);

    private static RetrieveReportTransactionsError AsReportsTransactions404Error1(ReportsTransactions404Error1 value) =>
        new(default, default, Optional<ReportsTransactions404Error1>.Some(value), default, default);

    private static RetrieveReportTransactionsError AsReportsTransactions500Error1(ReportsTransactions500Error1 value) =>
        new(default, default, default, Optional<ReportsTransactions500Error1>.Some(value), default);

    private static RetrieveReportTransactionsError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetReportsTransactions400Error1([NotNullWhen(true)] out ReportsTransactions400Error1? value) =>
        _reportsTransactions400Error1Value.TryGetValue(out value);

    public bool TryGetReportsTransactions403Error1([NotNullWhen(true)] out ReportsTransactions403Error1? value) =>
        _reportsTransactions403Error1Value.TryGetValue(out value);

    public bool TryGetReportsTransactions404Error1([NotNullWhen(true)] out ReportsTransactions404Error1? value) =>
        _reportsTransactions404Error1Value.TryGetValue(out value);

    public bool TryGetReportsTransactions500Error1([NotNullWhen(true)] out ReportsTransactions500Error1? value) =>
        _reportsTransactions500Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ReportsTransactions400Error1, TResult> onReportsTransactions400Error1,
        Func<ReportsTransactions403Error1, TResult> onReportsTransactions403Error1,
        Func<ReportsTransactions404Error1, TResult> onReportsTransactions404Error1,
        Func<ReportsTransactions500Error1, TResult> onReportsTransactions500Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetReportsTransactions400Error1(
                out var reportsTransactions400Error1Value) => onReportsTransactions400Error1(
                reportsTransactions400Error1Value),
            _ when TryGetReportsTransactions403Error1(
                out var reportsTransactions403Error1Value) => onReportsTransactions403Error1(
                reportsTransactions403Error1Value),
            _ when TryGetReportsTransactions404Error1(
                out var reportsTransactions404Error1Value) => onReportsTransactions404Error1(
                reportsTransactions404Error1Value),
            _ when TryGetReportsTransactions500Error1(
                out var reportsTransactions500Error1Value) => onReportsTransactions500Error1(
                reportsTransactions500Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(RetrieveReportTransactionsError)} holds no value.")
        };

    public void Match(Action<ReportsTransactions400Error1> onReportsTransactions400Error1,
        Action<ReportsTransactions403Error1> onReportsTransactions403Error1,
        Action<ReportsTransactions404Error1> onReportsTransactions404Error1,
        Action<ReportsTransactions500Error1> onReportsTransactions500Error1,
        Action<RawError> otherwise)
    {
        if (TryGetReportsTransactions400Error1(
            out var reportsTransactions400Error1Value)) onReportsTransactions400Error1(
            reportsTransactions400Error1Value);
        else if (TryGetReportsTransactions403Error1(
            out var reportsTransactions403Error1Value)) onReportsTransactions403Error1(
            reportsTransactions403Error1Value);
        else if (TryGetReportsTransactions404Error1(
            out var reportsTransactions404Error1Value)) onReportsTransactions404Error1(
            reportsTransactions404Error1Value);
        else if (TryGetReportsTransactions500Error1(
            out var reportsTransactions500Error1Value)) onReportsTransactions500Error1(
            reportsTransactions500Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(RetrieveReportTransactionsError)} holds no value.");
    }

    private static Task<RetrieveReportTransactionsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ReportsTransactions400Error1>().As(AsReportsTransactions400Error1),
            403 => response.Json<ReportsTransactions403Error1>().As(AsReportsTransactions403Error1),
            404 => response.Json<ReportsTransactions404Error1>().As(AsReportsTransactions404Error1),
            500 => response.Json<ReportsTransactions500Error1>().As(AsReportsTransactions500Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<RetrieveReportTransactionsError> Response { get; } = new(Create);
}
