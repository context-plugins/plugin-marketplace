using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget19>))]
public sealed record XAmzTarget19 : OpenStringEnum<XAmzTarget19>
{
    private XAmzTarget19(string value) : base(value)
    {
    }

    public static readonly XAmzTarget19 CodeBuild20161006UpdateWebhook = new("CodeBuild_20161006.UpdateWebhook");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006UpdateWebhook, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006UpdateWebhook => onCodeBuild20161006UpdateWebhook(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006UpdateWebhook, Action<string> otherwise)
    {
        if (this == CodeBuild20161006UpdateWebhook) onCodeBuild20161006UpdateWebhook();
        else otherwise(Value);
    }
}
