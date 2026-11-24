using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;
using Basiq.Models.AnyOf;

namespace Basiq.Errors;

public sealed class CreatereportError : ApiError
{
    private readonly Optional<Reports403Error1> _reports403Error1Value;

    private readonly Optional<Reports404Error1> _reports404Error1Value;

    private readonly Optional<Reports500Error1> _reports500Error1Value;

    private readonly Optional<ReportsResponse12> _reportsResponse12Value;

    private CreatereportError(Optional<Reports403Error1> reports403Error1Value,
        Optional<Reports404Error1> reports404Error1Value,
        Optional<Reports500Error1> reports500Error1Value,
        Optional<ReportsResponse12> reportsResponse12Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _reports403Error1Value = reports403Error1Value;
        _reports404Error1Value = reports404Error1Value;
        _reports500Error1Value = reports500Error1Value;
        _reportsResponse12Value = reportsResponse12Value;
    }

    private static CreatereportError AsReports403Error1(Reports403Error1 value) =>
        new(Optional<Reports403Error1>.Some(value), default, default, default, default);

    private static CreatereportError AsReports404Error1(Reports404Error1 value) =>
        new(default, Optional<Reports404Error1>.Some(value), default, default, default);

    private static CreatereportError AsReports500Error1(Reports500Error1 value) =>
        new(default, default, Optional<Reports500Error1>.Some(value), default, default);

    private static CreatereportError AsReportsResponse12(ReportsResponse12 value) =>
        new(default, default, default, Optional<ReportsResponse12>.Some(value), default);

    private static CreatereportError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetReports403Error1([NotNullWhen(true)] out Reports403Error1? value) =>
        _reports403Error1Value.TryGetValue(out value);

    public bool TryGetReports404Error1([NotNullWhen(true)] out Reports404Error1? value) =>
        _reports404Error1Value.TryGetValue(out value);

    public bool TryGetReports500Error1([NotNullWhen(true)] out Reports500Error1? value) =>
        _reports500Error1Value.TryGetValue(out value);

    public bool TryGetReportsResponse12([NotNullWhen(true)] out ReportsResponse12? value) =>
        _reportsResponse12Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<Reports403Error1, TResult> onReports403Error1,
        Func<Reports404Error1, TResult> onReports404Error1,
        Func<Reports500Error1, TResult> onReports500Error1,
        Func<ReportsResponse12, TResult> onReportsResponse12,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetReports403Error1(out var reports403Error1Value) => onReports403Error1(reports403Error1Value),
            _ when TryGetReports404Error1(out var reports404Error1Value) => onReports404Error1(reports404Error1Value),
            _ when TryGetReports500Error1(out var reports500Error1Value) => onReports500Error1(reports500Error1Value),
            _ when TryGetReportsResponse12(out var reportsResponse12Value) => onReportsResponse12(
                reportsResponse12Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreatereportError)} holds no value.")
        };

    public void Match(Action<Reports403Error1> onReports403Error1,
        Action<Reports404Error1> onReports404Error1,
        Action<Reports500Error1> onReports500Error1,
        Action<ReportsResponse12> onReportsResponse12,
        Action<RawError> otherwise)
    {
        if (TryGetReports403Error1(out var reports403Error1Value)) onReports403Error1(reports403Error1Value);
        else if (TryGetReports404Error1(out var reports404Error1Value)) onReports404Error1(reports404Error1Value);
        else if (TryGetReports500Error1(out var reports500Error1Value)) onReports500Error1(reports500Error1Value);
        else if (TryGetReportsResponse12(out var reportsResponse12Value)) onReportsResponse12(reportsResponse12Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreatereportError)} holds no value.");
    }

    private static Task<CreatereportError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ReportsResponse12>().As(AsReportsResponse12),
            403 => response.Json<Reports403Error1>().As(AsReports403Error1),
            404 => response.Json<Reports404Error1>().As(AsReports404Error1),
            500 => response.Json<Reports500Error1>().As(AsReports500Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreatereportError> Response { get; } = new(Create);
}
