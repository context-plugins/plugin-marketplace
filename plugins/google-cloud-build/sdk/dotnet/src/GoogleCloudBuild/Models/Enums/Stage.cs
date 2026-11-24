using System;
using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Enum;

namespace GoogleCloudBuild.Models.Enums;

/// <summary>
/// Output only. Current step of the installation process.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Stage>))]
public sealed record Stage : OpenStringEnum<Stage>
{
    private Stage(string value) : base(value)
    {
    }

    public static readonly Stage StageUnspecified = new("STAGE_UNSPECIFIED");

    public static readonly Stage PendingCreateApp = new("PENDING_CREATE_APP");

    public static readonly Stage PendingUserOauth = new("PENDING_USER_OAUTH");

    public static readonly Stage PendingInstallApp = new("PENDING_INSTALL_APP");

    public static readonly Stage Complete = new("COMPLETE");

    public TResult Match<TResult>(Func<TResult> onStageUnspecified,
        Func<TResult> onPendingCreateApp,
        Func<TResult> onPendingUserOauth,
        Func<TResult> onPendingInstallApp,
        Func<TResult> onComplete,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StageUnspecified => onStageUnspecified(),
            _ when this == PendingCreateApp => onPendingCreateApp(),
            _ when this == PendingUserOauth => onPendingUserOauth(),
            _ when this == PendingInstallApp => onPendingInstallApp(),
            _ when this == Complete => onComplete(),
            _ => otherwise(Value)
        };

    public void Match(Action onStageUnspecified,
        Action onPendingCreateApp,
        Action onPendingUserOauth,
        Action onPendingInstallApp,
        Action onComplete,
        Action<string> otherwise)
    {
        if (this == StageUnspecified) onStageUnspecified();
        else if (this == PendingCreateApp) onPendingCreateApp();
        else if (this == PendingUserOauth) onPendingUserOauth();
        else if (this == PendingInstallApp) onPendingInstallApp();
        else if (this == Complete) onComplete();
        else otherwise(Value);
    }
}
