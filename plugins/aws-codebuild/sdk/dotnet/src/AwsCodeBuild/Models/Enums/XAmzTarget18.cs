using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget18>))]
public sealed record XAmzTarget18 : OpenStringEnum<XAmzTarget18>
{
    private XAmzTarget18(string value) : base(value)
    {
    }

    public static readonly XAmzTarget18 CodeBuild20161006DeleteWebhook = new("CodeBuild_20161006.DeleteWebhook");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006DeleteWebhook, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006DeleteWebhook => onCodeBuild20161006DeleteWebhook(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006DeleteWebhook, Action<string> otherwise)
    {
        if (this == CodeBuild20161006DeleteWebhook) onCodeBuild20161006DeleteWebhook();
        else otherwise(Value);
    }
}
