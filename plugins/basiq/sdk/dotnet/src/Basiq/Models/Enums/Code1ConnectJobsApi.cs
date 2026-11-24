using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Application-specific error code, expressed as a string value.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Code1ConnectJobsApi>))]
public sealed record Code1ConnectJobsApi : OpenStringEnum<Code1ConnectJobsApi>
{
    private Code1ConnectJobsApi(string value) : base(value)
    {
    }

    public static readonly Code1ConnectJobsApi ParameterNotSupplied = new("parameter-not-supplied");

    public static readonly Code1ConnectJobsApi ParameterNotValid = new("parameter-not-valid");

    public static readonly Code1ConnectJobsApi UnsupportedAccept = new("unsupported-accept");

    public static readonly Code1ConnectJobsApi InvalidContent = new("invalid-content");

    public static readonly Code1ConnectJobsApi InstitutionNotSupported = new("institution-not-supported");

    public static readonly Code1ConnectJobsApi InvalidCredentials = new("invalid-credentials");

    public TResult Match<TResult>(Func<TResult> onParameterNotSupplied,
        Func<TResult> onParameterNotValid,
        Func<TResult> onUnsupportedAccept,
        Func<TResult> onInvalidContent,
        Func<TResult> onInstitutionNotSupported,
        Func<TResult> onInvalidCredentials,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ParameterNotSupplied => onParameterNotSupplied(),
            _ when this == ParameterNotValid => onParameterNotValid(),
            _ when this == UnsupportedAccept => onUnsupportedAccept(),
            _ when this == InvalidContent => onInvalidContent(),
            _ when this == InstitutionNotSupported => onInstitutionNotSupported(),
            _ when this == InvalidCredentials => onInvalidCredentials(),
            _ => otherwise(Value)
        };

    public void Match(Action onParameterNotSupplied,
        Action onParameterNotValid,
        Action onUnsupportedAccept,
        Action onInvalidContent,
        Action onInstitutionNotSupported,
        Action onInvalidCredentials,
        Action<string> otherwise)
    {
        if (this == ParameterNotSupplied) onParameterNotSupplied();
        else if (this == ParameterNotValid) onParameterNotValid();
        else if (this == UnsupportedAccept) onUnsupportedAccept();
        else if (this == InvalidContent) onInvalidContent();
        else if (this == InstitutionNotSupported) onInstitutionNotSupported();
        else if (this == InvalidCredentials) onInvalidCredentials();
        else otherwise(Value);
    }
}
