using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// The type of log anomaly that has been detected.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LogAnomalyType>))]
public sealed record LogAnomalyType : OpenStringEnum<LogAnomalyType>
{
    private LogAnomalyType(string value) : base(value)
    {
    }

    public static readonly LogAnomalyType Keyword = new("KEYWORD");

    public static readonly LogAnomalyType KeywordToken = new("KEYWORD_TOKEN");

    public static readonly LogAnomalyType Format = new("FORMAT");

    public static readonly LogAnomalyType HttpCode = new("HTTP_CODE");

    public static readonly LogAnomalyType BlockFormat = new("BLOCK_FORMAT");

    public static readonly LogAnomalyType NumericalPoint = new("NUMERICAL_POINT");

    public static readonly LogAnomalyType NumericalNan = new("NUMERICAL_NAN");

    public static readonly LogAnomalyType NewFieldName = new("NEW_FIELD_NAME");

    public TResult Match<TResult>(Func<TResult> onKeyword,
        Func<TResult> onKeywordToken,
        Func<TResult> onFormat,
        Func<TResult> onHttpCode,
        Func<TResult> onBlockFormat,
        Func<TResult> onNumericalPoint,
        Func<TResult> onNumericalNan,
        Func<TResult> onNewFieldName,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Keyword => onKeyword(),
            _ when this == KeywordToken => onKeywordToken(),
            _ when this == Format => onFormat(),
            _ when this == HttpCode => onHttpCode(),
            _ when this == BlockFormat => onBlockFormat(),
            _ when this == NumericalPoint => onNumericalPoint(),
            _ when this == NumericalNan => onNumericalNan(),
            _ when this == NewFieldName => onNewFieldName(),
            _ => otherwise(Value)
        };

    public void Match(Action onKeyword,
        Action onKeywordToken,
        Action onFormat,
        Action onHttpCode,
        Action onBlockFormat,
        Action onNumericalPoint,
        Action onNumericalNan,
        Action onNewFieldName,
        Action<string> otherwise)
    {
        if (this == Keyword) onKeyword();
        else if (this == KeywordToken) onKeywordToken();
        else if (this == Format) onFormat();
        else if (this == HttpCode) onHttpCode();
        else if (this == BlockFormat) onBlockFormat();
        else if (this == NumericalPoint) onNumericalPoint();
        else if (this == NumericalNan) onNumericalNan();
        else if (this == NewFieldName) onNewFieldName();
        else otherwise(Value);
    }
}
