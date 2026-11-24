using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class RetrieveReportError : ApiError
{
    private readonly Optional<Reports400Error21> _reports400Error21Value;

    private readonly Optional<Reports403Error31> _reports403Error31Value;

    private readonly Optional<Reports404Error31> _reports404Error31Value;

    private readonly Optional<Reports500Error31> _reports500Error31Value;

    private RetrieveReportError(Optional<Reports400Error21> reports400Error21Value,
        Optional<Reports403Error31> reports403Error31Value,
        Optional<Reports404Error31> reports404Error31Value,
        Optional<Reports500Error31> reports500Error31Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _reports400Error21Value = reports400Error21Value;
        _reports403Error31Value = reports403Error31Value;
        _reports404Error31Value = reports404Error31Value;
        _reports500Error31Value = reports500Error31Value;
    }

    private static RetrieveReportError AsReports400Error21(Reports400Error21 value) =>
        new(Optional<Reports400Error21>.Some(value), default, default, default, default);

    private static RetrieveReportError AsReports403Error31(Reports403Error31 value) =>
        new(default, Optional<Reports403Error31>.Some(value), default, default, default);

    private static RetrieveReportError AsReports404Error31(Reports404Error31 value) =>
        new(default, default, Optional<Reports404Error31>.Some(value), default, default);

    private static RetrieveReportError AsReports500Error31(Reports500Error31 value) =>
        new(default, default, default, Optional<Reports500Error31>.Some(value), default);

    private static RetrieveReportError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetReports400Error21([NotNullWhen(true)] out Reports400Error21? value) =>
        _reports400Error21Value.TryGetValue(out value);

    public bool TryGetReports403Error31([NotNullWhen(true)] out Reports403Error31? value) =>
        _reports403Error31Value.TryGetValue(out value);

    public bool TryGetReports404Error31([NotNullWhen(true)] out Reports404Error31? value) =>
        _reports404Error31Value.TryGetValue(out value);

    public bool TryGetReports500Error31([NotNullWhen(true)] out Reports500Error31? value) =>
        _reports500Error31Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<Reports400Error21, TResult> onReports400Error21,
        Func<Reports403Error31, TResult> onReports403Error31,
        Func<Reports404Error31, TResult> onReports404Error31,
        Func<Reports500Error31, TResult> onReports500Error31,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetReports400Error21(out var reports400Error21Value) => onReports400Error21(
                reports400Error21Value),
            _ when TryGetReports403Error31(out var reports403Error31Value) => onReports403Error31(
                reports403Error31Value),
            _ when TryGetReports404Error31(out var reports404Error31Value) => onReports404Error31(
                reports404Error31Value),
            _ when TryGetReports500Error31(out var reports500Error31Value) => onReports500Error31(
                reports500Error31Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(RetrieveReportError)} holds no value.")
        };

    public void Match(Action<Reports400Error21> onReports400Error21,
        Action<Reports403Error31> onReports403Error31,
        Action<Reports404Error31> onReports404Error31,
        Action<Reports500Error31> onReports500Error31,
        Action<RawError> otherwise)
    {
        if (TryGetReports400Error21(out var reports400Error21Value)) onReports400Error21(reports400Error21Value);
        else if (TryGetReports403Error31(out var reports403Error31Value)) onReports403Error31(reports403Error31Value);
        else if (TryGetReports404Error31(out var reports404Error31Value)) onReports404Error31(reports404Error31Value);
        else if (TryGetReports500Error31(out var reports500Error31Value)) onReports500Error31(reports500Error31Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(RetrieveReportError)} holds no value.");
    }

    private static Task<RetrieveReportError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Reports400Error21>().As(AsReports400Error21),
            403 => response.Json<Reports403Error31>().As(AsReports403Error31),
            404 => response.Json<Reports404Error31>().As(AsReports404Error31),
            500 => response.Json<Reports500Error31>().As(AsReports500Error31),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<RetrieveReportError> Response { get; } = new(Create);
}
