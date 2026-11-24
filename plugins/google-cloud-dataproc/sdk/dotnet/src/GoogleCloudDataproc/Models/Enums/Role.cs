using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Role>))]
public sealed record Role : OpenStringEnum<Role>
{
    private Role(string value) : base(value)
    {
    }

    public static readonly Role RoleUnspecified = new("ROLE_UNSPECIFIED");

    public static readonly Role Default = new("DEFAULT");

    public static readonly Role Controller = new("CONTROLLER");

    public static readonly Role SparkDriver = new("SPARK_DRIVER");

    public static readonly Role SparkExecutor = new("SPARK_EXECUTOR");

    public TResult Match<TResult>(Func<TResult> onRoleUnspecified,
        Func<TResult> onDefault,
        Func<TResult> onController,
        Func<TResult> onSparkDriver,
        Func<TResult> onSparkExecutor,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RoleUnspecified => onRoleUnspecified(),
            _ when this == Default => onDefault(),
            _ when this == Controller => onController(),
            _ when this == SparkDriver => onSparkDriver(),
            _ when this == SparkExecutor => onSparkExecutor(),
            _ => otherwise(Value)
        };

    public void Match(Action onRoleUnspecified,
        Action onDefault,
        Action onController,
        Action onSparkDriver,
        Action onSparkExecutor,
        Action<string> otherwise)
    {
        if (this == RoleUnspecified) onRoleUnspecified();
        else if (this == Default) onDefault();
        else if (this == Controller) onController();
        else if (this == SparkDriver) onSparkDriver();
        else if (this == SparkExecutor) onSparkExecutor();
        else otherwise(Value);
    }
}
