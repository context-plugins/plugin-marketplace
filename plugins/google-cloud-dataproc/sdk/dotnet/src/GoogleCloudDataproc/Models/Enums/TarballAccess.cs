using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Optional. (Optional) The access type to the diagnostic tarball. If not specified, falls back to default access of the bucket
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TarballAccess>))]
public sealed record TarballAccess : OpenStringEnum<TarballAccess>
{
    private TarballAccess(string value) : base(value)
    {
    }

    public static readonly TarballAccess TarballAccessUnspecified = new("TARBALL_ACCESS_UNSPECIFIED");

    public static readonly TarballAccess GoogleCloudSupport = new("GOOGLE_CLOUD_SUPPORT");

    public static readonly TarballAccess GoogleDataprocDiagnose = new("GOOGLE_DATAPROC_DIAGNOSE");

    public TResult Match<TResult>(Func<TResult> onTarballAccessUnspecified,
        Func<TResult> onGoogleCloudSupport,
        Func<TResult> onGoogleDataprocDiagnose,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TarballAccessUnspecified => onTarballAccessUnspecified(),
            _ when this == GoogleCloudSupport => onGoogleCloudSupport(),
            _ when this == GoogleDataprocDiagnose => onGoogleDataprocDiagnose(),
            _ => otherwise(Value)
        };

    public void Match(Action onTarballAccessUnspecified,
        Action onGoogleCloudSupport,
        Action onGoogleDataprocDiagnose,
        Action<string> otherwise)
    {
        if (this == TarballAccessUnspecified) onTarballAccessUnspecified();
        else if (this == GoogleCloudSupport) onGoogleCloudSupport();
        else if (this == GoogleDataprocDiagnose) onGoogleDataprocDiagnose();
        else otherwise(Value);
    }
}
