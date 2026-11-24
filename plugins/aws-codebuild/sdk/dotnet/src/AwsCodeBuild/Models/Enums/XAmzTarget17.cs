using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget17>))]
public sealed record XAmzTarget17 : OpenStringEnum<XAmzTarget17>
{
    private XAmzTarget17(string value) : base(value)
    {
    }

    public static readonly XAmzTarget17 CodeBuild20161006CreateWebhook = new("CodeBuild_20161006.CreateWebhook");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006CreateWebhook, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006CreateWebhook => onCodeBuild20161006CreateWebhook(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006CreateWebhook, Action<string> otherwise)
    {
        if (this == CodeBuild20161006CreateWebhook) onCodeBuild20161006CreateWebhook();
        else otherwise(Value);
    }
}
