using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Models.Enums;

/// <summary>
/// Type of operation
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Create = new("create");

    public static readonly TypeEnum Copy = new("copy");

    public static readonly TypeEnum Delete = new("delete");

    public static readonly TypeEnum SoftDelete = new("softDelete");

    public static readonly TypeEnum Recover = new("recover");

    public static readonly TypeEnum EnvironmentRename = new("environmentRename");

    public static readonly TypeEnum PitRestore = new("pitRestore");

    public static readonly TypeEnum EnvironmentAppInstall = new("environmentAppInstall");

    public static readonly TypeEnum EnvironmentAppUninstall = new("environmentAppUninstall");

    public static readonly TypeEnum EnvironmentAppUpdate = new("environmentAppUpdate");

    public static readonly TypeEnum EnvironmentAppHotfix = new("environmentAppHotfix");

    public static readonly TypeEnum Modify = new("modify");

    public static readonly TypeEnum Update = new("update");

    public static readonly TypeEnum Restart = new("restart");

    public static readonly TypeEnum MoveToAnotherAadTenant = new("moveToAnotherAadTenant");

    public TResult Match<TResult>(Func<TResult> onCreate,
        Func<TResult> onCopy,
        Func<TResult> onDelete,
        Func<TResult> onSoftDelete,
        Func<TResult> onRecover,
        Func<TResult> onEnvironmentRename,
        Func<TResult> onPitRestore,
        Func<TResult> onEnvironmentAppInstall,
        Func<TResult> onEnvironmentAppUninstall,
        Func<TResult> onEnvironmentAppUpdate,
        Func<TResult> onEnvironmentAppHotfix,
        Func<TResult> onModify,
        Func<TResult> onUpdate,
        Func<TResult> onRestart,
        Func<TResult> onMoveToAnotherAadTenant,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Create => onCreate(),
            _ when this == Copy => onCopy(),
            _ when this == Delete => onDelete(),
            _ when this == SoftDelete => onSoftDelete(),
            _ when this == Recover => onRecover(),
            _ when this == EnvironmentRename => onEnvironmentRename(),
            _ when this == PitRestore => onPitRestore(),
            _ when this == EnvironmentAppInstall => onEnvironmentAppInstall(),
            _ when this == EnvironmentAppUninstall => onEnvironmentAppUninstall(),
            _ when this == EnvironmentAppUpdate => onEnvironmentAppUpdate(),
            _ when this == EnvironmentAppHotfix => onEnvironmentAppHotfix(),
            _ when this == Modify => onModify(),
            _ when this == Update => onUpdate(),
            _ when this == Restart => onRestart(),
            _ when this == MoveToAnotherAadTenant => onMoveToAnotherAadTenant(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreate,
        Action onCopy,
        Action onDelete,
        Action onSoftDelete,
        Action onRecover,
        Action onEnvironmentRename,
        Action onPitRestore,
        Action onEnvironmentAppInstall,
        Action onEnvironmentAppUninstall,
        Action onEnvironmentAppUpdate,
        Action onEnvironmentAppHotfix,
        Action onModify,
        Action onUpdate,
        Action onRestart,
        Action onMoveToAnotherAadTenant,
        Action<string> otherwise)
    {
        if (this == Create) onCreate();
        else if (this == Copy) onCopy();
        else if (this == Delete) onDelete();
        else if (this == SoftDelete) onSoftDelete();
        else if (this == Recover) onRecover();
        else if (this == EnvironmentRename) onEnvironmentRename();
        else if (this == PitRestore) onPitRestore();
        else if (this == EnvironmentAppInstall) onEnvironmentAppInstall();
        else if (this == EnvironmentAppUninstall) onEnvironmentAppUninstall();
        else if (this == EnvironmentAppUpdate) onEnvironmentAppUpdate();
        else if (this == EnvironmentAppHotfix) onEnvironmentAppHotfix();
        else if (this == Modify) onModify();
        else if (this == Update) onUpdate();
        else if (this == Restart) onRestart();
        else if (this == MoveToAnotherAadTenant) onMoveToAnotherAadTenant();
        else otherwise(Value);
    }
}
