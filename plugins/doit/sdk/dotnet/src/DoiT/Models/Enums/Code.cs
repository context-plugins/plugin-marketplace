using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Code>))]
public sealed record Code : OpenStringEnum<Code>
{
    private Code(string value) : base(value)
    {
    }

    public static readonly Code BundleSchemaInvalid = new("bundle_schema_invalid");

    public static readonly Code BundleVersionUnsupported = new("bundle_version_unsupported");

    public static readonly Code BundleLimitsExceeded = new("bundle_limits_exceeded");

    public static readonly Code BindingNotFound = new("binding_not_found");

    public static readonly Code BindingProviderMismatch = new("binding_provider_mismatch");

    public static readonly Code TableSchemaIncompatible = new("table_schema_incompatible");

    public static readonly Code GlobalVariableTypeConflict = new("global_variable_type_conflict");

    public static readonly Code InternalFieldRejected = new("internal_field_rejected");

    public TResult Match<TResult>(Func<TResult> onBundleSchemaInvalid,
        Func<TResult> onBundleVersionUnsupported,
        Func<TResult> onBundleLimitsExceeded,
        Func<TResult> onBindingNotFound,
        Func<TResult> onBindingProviderMismatch,
        Func<TResult> onTableSchemaIncompatible,
        Func<TResult> onGlobalVariableTypeConflict,
        Func<TResult> onInternalFieldRejected,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BundleSchemaInvalid => onBundleSchemaInvalid(),
            _ when this == BundleVersionUnsupported => onBundleVersionUnsupported(),
            _ when this == BundleLimitsExceeded => onBundleLimitsExceeded(),
            _ when this == BindingNotFound => onBindingNotFound(),
            _ when this == BindingProviderMismatch => onBindingProviderMismatch(),
            _ when this == TableSchemaIncompatible => onTableSchemaIncompatible(),
            _ when this == GlobalVariableTypeConflict => onGlobalVariableTypeConflict(),
            _ when this == InternalFieldRejected => onInternalFieldRejected(),
            _ => otherwise(Value)
        };

    public void Match(Action onBundleSchemaInvalid,
        Action onBundleVersionUnsupported,
        Action onBundleLimitsExceeded,
        Action onBindingNotFound,
        Action onBindingProviderMismatch,
        Action onTableSchemaIncompatible,
        Action onGlobalVariableTypeConflict,
        Action onInternalFieldRejected,
        Action<string> otherwise)
    {
        if (this == BundleSchemaInvalid) onBundleSchemaInvalid();
        else if (this == BundleVersionUnsupported) onBundleVersionUnsupported();
        else if (this == BundleLimitsExceeded) onBundleLimitsExceeded();
        else if (this == BindingNotFound) onBindingNotFound();
        else if (this == BindingProviderMismatch) onBindingProviderMismatch();
        else if (this == TableSchemaIncompatible) onTableSchemaIncompatible();
        else if (this == GlobalVariableTypeConflict) onGlobalVariableTypeConflict();
        else if (this == InternalFieldRejected) onInternalFieldRejected();
        else otherwise(Value);
    }
}
